#!/usr/bin/env python3
"""Repeatable read-only GAMA Works 18-route production smoke + SEO audit.

Usage:
  python3 scripts/audit_live_site.py --base https://gama.works \
    --json-out reports/site-audit.json --md-out reports/site-audit.md

Uses Python standard library only; does not authenticate, send mail, book,
modify pages, or make claims about WCAG/SEO conformance. Browser-level
accessibility, Core Web Vitals and rendered color contrast require other tools.
"""
import argparse
import concurrent.futures
import datetime as dt
import html.parser
import json
import pathlib
import time
import urllib.error
import urllib.parse
import urllib.request


PAGE_PAIRS = [
    ("/", "/es/"),
    ("/services", "/es/services"),
    ("/portfolio", "/es/portfolio"),
    ("/gama-web-ready-bundle", "/es/gama-web-ready-bundle"),
    ("/automation-workflow-design", "/es/automation-workflow-design"),
    ("/it-services", "/es/it-services"),
    ("/governance-funding-systems", "/es/governance-funding-systems"),
    ("/background", "/es/background"),
    ("/contact", "/es/contact"),
]
ALL_PATHS = [p for pair in PAGE_PAIRS for p in pair]
PAIRS = {left: right for left, right in PAGE_PAIRS}
PAIRS.update({right: left for left, right in PAGE_PAIRS})


class Inspector(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.html_lang = ""
        self.title = []
        self._title = False
        self._h1 = False
        self.h1s = []
        self.meta = {}
        self.canonical = []
        self.alternates = {}
        self.links = []
        self.images = []
        self.ids = set()
        self.visible = []
        self.hidden = 0

    def handle_starttag(self, tag, attr_list):
        a = dict(attr_list)
        if tag in ("script", "style", "svg", "template"):
            self.hidden += 1
        if tag == "html":
            self.html_lang = a.get("lang", "")
        if tag == "title":
            self._title = True
        if tag == "h1":
            self._h1 = True
            self.h1s.append("")
        if a.get("id"):
            self.ids.add(a["id"])
        if tag == "meta":
            key = a.get("name") or a.get("property") or ""
            if key:
                self.meta[key.lower()] = a.get("content", "")
        if tag == "link":
            rel = a.get("rel", "").lower().split()
            if "canonical" in rel:
                self.canonical.append(a.get("href", ""))
            if "alternate" in rel and a.get("hreflang"):
                self.alternates[a["hreflang"].lower()] = a.get("href", "")
        if tag == "a" and a.get("href"):
            self.links.append(a["href"])
        if tag == "img":
            self.images.append({"src": a.get("src", ""), "has_alt": "alt" in a})
        
    def handle_endtag(self, tag):
        if tag == "title":
            self._title = False
        if tag == "h1":
            self._h1 = False
        if tag in ("script", "style", "svg", "template"):
            self.hidden = max(0, self.hidden - 1)

    def handle_data(self, data):
        if self._title:
            self.title.append(data)
        if self._h1 and self.h1s:
            self.h1s[-1] += data
        if self.hidden == 0:
            self.visible.append(data)


def normalize_path(url, base):
    p = urllib.parse.urlsplit(urllib.parse.urljoin(base, url))
    return p.path.rstrip("/") or "/"


def issue(severity, code, detail):
    return {"severity": severity, "code": code, "detail": detail}


def fetch(path, base, timeout):
    expected_lang = "es" if path.startswith("/es/") else "en"
    target = base.rstrip("/") + path
    started = time.monotonic()
    result = {
        "path": path,
        "url": target,
        "expected_language": expected_lang,
        "http_status": None,
        "elapsed_ms": None,
        "issues": [],
        "metadata": {},
        "links": [],
    }
    request = urllib.request.Request(
        target,
        headers={"User-Agent": "GamaWorksQualityAudit/1.0 (+https://gama.works)"},
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            result["http_status"] = response.status
            result["final_url"] = response.url
            result["content_type"] = response.headers.get("Content-Type", "")
            payload = response.read(3_000_000)
    except urllib.error.HTTPError as exc:
        result["http_status"] = exc.code
        result["issues"].append(issue("error", "http_failure", str(exc)))
        return result
    except Exception as exc:
        result["issues"].append(issue("error", "connection_failure", str(exc)))
        return result
    finally:
        result["elapsed_ms"] = round((time.monotonic() - started) * 1000)

    if result["http_status"] != 200:
        result["issues"].append(issue("error", "unexpected_status", str(result["http_status"])))
    if "html" not in result["content_type"].lower():
        result["issues"].append(issue("error", "not_html", result["content_type"]))
        return result
    try:
        parser = Inspector()
        html = payload.decode("utf-8", errors="replace")
        parser.feed(html)
    except Exception as exc:
        result["issues"].append(issue("error", "parse_failure", str(exc)))
        return result

    title = "".join(parser.title).strip()
    text = "".join(parser.visible)
    result["metadata"] = {
        "title": title,
        "description": parser.meta.get("description", ""),
        "html_lang": parser.html_lang,
        "canonical": parser.canonical,
        "hreflang": parser.alternates,
        "h1": [s.strip() for s in parser.h1s],
        "og_image": parser.meta.get("og:image", ""),
        "robots": parser.meta.get("robots", ""),
        "images_missing_alt_attribute": [
            v["src"] for v in parser.images if not v["has_alt"]
        ][:20],
    }
    result["links"] = parser.links
    if not title:
        result["issues"].append(issue("error", "missing_title", "HTML title missing"))
    if not result["metadata"]["description"]:
        result["issues"].append(issue("warning", "missing_description", "Meta description missing"))
    if not parser.html_lang.lower().startswith(expected_lang):
        result["issues"].append(issue("error", "wrong_language", "Expected " + expected_lang + "; got " + parser.html_lang))
    if len(parser.h1s) != 1:
        result["issues"].append(issue("warning", "h1_count", "H1 elements found: " + str(len(parser.h1s))))
    if not parser.canonical:
        result["issues"].append(issue("warning", "canonical_unconfirmed", "No canonical link in response HTML"))
    elif normalize_path(parser.canonical[0], base) != normalize_path(path, base):
        result["issues"].append(issue("warning", "canonical_mismatch", str(parser.canonical)))
    paired = PAIRS[path]
    opposite = "en" if expected_lang == "es" else "es"
    if not parser.alternates.get(opposite):
        result["issues"].append(issue("warning", "hreflang_missing", "No " + opposite + " alternate for " + paired))
    elif normalize_path(parser.alternates[opposite], base) != normalize_path(paired, base):
        result["issues"].append(issue("warning", "hreflang_mismatch", "Expected " + paired + "; got " + parser.alternates[opposite]))
    if "noindex" in parser.meta.get("robots", "").lower():
        result["issues"].append(issue("warning", "noindex", "Page may be excluded from search"))
    if result["metadata"]["images_missing_alt_attribute"]:
        result["issues"].append(issue("warning", "img_alt_missing", str(result["metadata"]["images_missing_alt_attribute"])))
    if path in ("/contact", "/es/contact"):
        compact_text = "".join(text.split())
        if "hello@gama.works" not in compact_text:
            result["issues"].append(issue("error", "email_not_visible", "Expected hello@gama.works in server HTML text"))
        if not any(
            urllib.parse.unquote(urllib.parse.urlsplit(href).path).lower().startswith("hello@gama.works")
            for href in parser.links if href.startswith("mailto:")
        ):
            result["issues"].append(issue("error", "email_link_missing", "No working mailto recipient"))
        if "email-protection" in html:
            result["issues"].append(issue("warning", "edge_email_obfuscation", "Cloudflare email rewriting present; inspect in browser"))
    for href in parser.links:
        if not href.startswith("#"):
            continue
        anchor = urllib.parse.unquote(href[1:])
        if anchor and anchor not in parser.ids:
            result["issues"].append(issue("warning", "missing_anchor", "Missing target for " + href))
    return result


def report_markdown(results, base, when):
    errors = sum(i["severity"] == "error" for r in results for i in r["issues"])
    warnings = sum(i["severity"] == "warning" for r in results for i in r["issues"])
    rows = [
        "# GAMA Works — Live Route Audit",
        "",
        "Run: " + when + " | Base: " + base,
        "",
        "**This is an HTML-response smoke/SEO report, not a WCAG certification, rendered-browser review, or conversion-rate study.**",
        "",
        "Pages: " + str(len(results)) + " | Errors: " + str(errors) + " | Warnings: " + str(warnings),
        "",
        "| Route | HTTP | Language | Title | Errors | Warnings |",
        "| --- | --- | --- | --- | ---: | ---: |",
    ]
    for r in results:
        issues = r["issues"]
        m = r.get("metadata", {})
        rows.append(
            "| " + r["path"] + " | " + str(r.get("http_status") or "—")
            + " | " + str(m.get("html_lang") or "—")
            + " | " + ("Yes" if m.get("title") else "No")
            + " | " + str(sum(i["severity"] == "error" for i in issues))
            + " | " + str(sum(i["severity"] == "warning" for i in issues)) + " |"
        )
    rows.extend(["", "## Findings", ""])
    for r in results:
        if r["issues"]:
            rows.append("### " + r["path"])
            for i in r["issues"]:
                rows.append("- **" + i["severity"].upper() + " / " + i["code"] + "** — " + i["detail"])
            rows.append("")
    rows.extend([
        "## Required manual sign-off",
        "",
        "- Confirm layout at 1440, 1024, 768, 390, 320px and 200–400% zoom.",
        "- Run axe-core and manually test WCAG 2.2 AA: computed text/nontext contrast, keyboard, focus visibility, target size, screen reader reading order, text spacing and reduced motion.",
        "- Test the native language switcher from each of the nine matched pages.",
        "- Confirm canonical/hreflang, OG images, screenshots, redirects, email/booking destinations, consent and performance in live browsers.",
        "- Review Spanish/English commercial terms and founder attribution against approved source.",
        "- Review actual analytics before making any claims about conversion improvement.",
        ""
    ])
    return "\n".join(rows)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--base", default="https://gama.works")
    parser.add_argument("--timeout", type=int, default=18)
    parser.add_argument("--json-out", default="reports/site-audit.json")
    parser.add_argument("--md-out", default="reports/site-audit.md")
    parser.add_argument("--fail-on-error", action="store_true")
    args = parser.parse_args()
    base = args.base.rstrip("/")
    when = dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds")
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        tasks = [pool.submit(fetch, path, base, args.timeout) for path in ALL_PATHS]
        results = [task.result() for task in tasks]
    errors = sum(i["severity"] == "error" for r in results for i in r["issues"])
    warnings = sum(i["severity"] == "warning" for r in results for i in r["issues"])
    output = {"generated_at_utc": when, "base": base, "pages": results, "errors": errors, "warnings": warnings}
    for filename, body in (
        (args.json_out, json.dumps(output, ensure_ascii=False, indent=2)),
        (args.md_out, report_markdown(results, base, when)),
    ):
        dest = pathlib.Path(filename)
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(body + "\n", encoding="utf-8")
        print("Wrote", dest)
    print("Routes:", len(results), "Errors:", errors, "Warnings:", warnings)
    if args.fail_on_error and errors:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
