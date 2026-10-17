# GAMA Works — Page Inventory & Information Architecture Audit

**Status:** Content architecture complete; final navigation and source-level SEO audit prepared on an integration branch (pending review, merge, and live-site verification)  
**Date:** 2026-10-17  
**Repository:** [wasabinetwork/docs](https://github.com/wasabinetwork/docs)  
**Scope:** Root Mintlify MDX pages and `docs.json` structure. This is an inventory and editorial plan, not a production SEO or browser rendering test.

## Executive finding

The previous refactor completed six core content pages, but the repository had **no `index.mdx` homepage** and **no `services.mdx` service overview**. The existing navigation remained grouped as **About Me / Web2 / Web3** and omitted the new **Automation & Workflow Design** page.

A first-time visitor needs a business-level introduction and a simple way to choose between the four offers. The final integration branch now replaces the legacy navigation with a company-first structure.

This phase adds:
- `index.mdx`: business-first homepage candidate, with one main discovery-call action and secondary service discovery.
- `services.mdx`: qualification and comparison hub across the four offerings.

These pages are intentionally authored **before** changes to `docs.json`.

## Verified Page Inventory

| File | Intended role | Status at start of this phase | Outcome |
| --- | --- | --- | --- |
| `index.mdx` | Home / primary business introduction | Missing | Added in this phase |
| `services.mdx` | Service selection / comparison hub | Missing | Added in this phase |
| `background.mdx` | About GAMA Works and founder story | Refactored and merged in PR #6 | Retain |
| `contact.mdx` | Inquiry and conversion hub | Refactored and merged in PR #7 | Retain |
| `gama-web-ready-bundle.mdx` | Packaged website product | Refactored in PR #3 | Retain |
| `automation-workflow-design.mdx` | Process and automation service | Added in PR #2 | Retain |
| `it-services.mdx` | Custom technical systems service | Refactored in PR #4 | Retain |
| `governance-funding-systems.mdx` | Governance and funding operations service | Refactored in PR #5 | Retain |
| `essentials/*.mdx` | Mintlify tutorial/starter content | Exists, not in current navigation | Exclude from commercial site; decide whether to archive/remove in housekeeping |
| `README.md` | Developer / repository entry point | Already refactored | Link to new pages |
| `docs.json` | Site settings and menu | Legacy tab structure | Refactor only after the page set is finalized |

### Current navigation problems

Before the integration PR, `docs.json` tabs were:
- **About Me:** `background`, `contact`
- **Web2:** `it-services`, `gama-web-ready-bundle`
- **Web3:** `governance-funding-systems`

This hides the service cohesion of GAMA Works, does not represent the revised About positioning, and omits Automation. The new Home and Services pages are not added to navigation until the final navigation PR.

### Mintlify publication caveat

Mintlify treats pages omitted from navigation as hidden pages and excludes them from indexing by default. The integration branch now includes `index`, `services`, and every core service page in `docs.json` navigation. **Until the PR is merged and the deployment is checked, do not claim the homepage is live, discoverable, or indexed.** Verify the root URL, navigation, robots directives, and sitemap in the deployed environment.

Reference: https://mintlify.com/docs/guides/hidden-pages

## Suggested Information Architecture

**Implemented in the integration branch, pending review and merge.** Existing page paths are preserved.

| User-facing area | Proposed page route | Primary job |
| --- | --- | --- |
| Home | `/` via `index.mdx` | Explain value and guide toward discovery |
| Services | `/services` | Compare service options and qualify leads |
| WebReady | `/gama-web-ready-bundle` | Explain the packaged product and published price |
| Automation & Workflow Design | `/automation-workflow-design` | Qualify operational improvement projects |
| IT Services | `/it-services` | Qualify custom technical projects |
| Governance & Funding | `/governance-funding-systems` | Qualify governance, grants, and funding engagements |
| About | `/background` (retain existing route) | Establish mission, founder story, and credibility |
| Contact | `/contact` | Convert interest into actionable inquiries |

A good starting principle is **Home → Services → [specific service] → Contact/meeting**, with About as credibility support and WebReady as the most concrete self-selection option.

### Why not rename existing URLs now?

The current service and About paths are already used in internal links and may be indexed or shared externally. Preserve them through the content phase. URL changes, if needed, require deliberate redirect and canonical-link planning.

## Conversion Audit

| Surface | Primary action | Secondary action | Proof/caveats |
| --- | --- | --- | --- |
| Home | Book a discovery call | Compare services | Founder experience only; no invented company case studies |
| Services | Book discovery / submit inquiry | Visit individual service page | WebReady prices cited accurately; custom pricing not invented |
| WebReady | Choose monthly or yearly path | Contact for fit questions | Preserve plan terms, ownership conditions, and no unsupported guarantees |
| Automation | Discuss/define a workflow | Contact | No invented savings or performance claims |
| IT Services | Request scoped technical work | Contact | No unsupported security/availability guarantees |
| Governance & Funding | Discuss an operating challenge | Contact | Founder roles separated from agency clients/endorsements |
| About | Discover services / book call | Contact | Credible dates and career distinctions |
| Contact | Send project inquiry or book call | Browse a service | Use `hello@gama.works` consistently |

### Proof not yet available from the repository

The currently reviewed sources do **not** substantiate customer testimonials, company case-study results, logos used as client endorsements, site traffic benchmarks, conversion uplift, guaranteed cost savings, or aggregate outcomes from GAMA Works engagements.

**Do not create testimonial/case-study claims from inference.** A future Work/Case Studies page becomes worthwhile once permissioned client examples or demonstrated public projects can be documented with scope, evidence, and clear outcomes.

## Priority Next Steps

### Priority 0 — Finish content architecture

- [x] Audit root page inventory.
- [x] Add `index.mdx` homepage candidate.
- [x] Add `services.mdx` comparison hub.
- [x] Maintain service-specific CTAs and internal routing.
- [x] Preserve canonical email: `hello@gama.works`.

### Priority 1 — Navigation, home-route activation, and publication QA

- [x] Rebuild `docs.json` around Home, Services, About, and Contact rather than Web2/Web3 (integration branch).
- [x] Include all four offers in the Services tab (integration branch).
- [ ] Confirm root `/` resolves to the intended homepage in the deployed Mintlify project.
- [ ] Confirm both new pages are discoverable and indexed according to intended settings.
- [ ] Decide whether to remove/archive `essentials/*.mdx` starter material.
- [x] Preserve existing service URL paths and add redirects for legacy `/gama-webready-bundle` and `/services/governance-funding-systems` links.

### Priority 2 — Quality, metadata, and conversion audit

- [ ] Preview all pages in Mintlify on desktop and mobile; inspect spacing, cards, accordions, headings, and CTAs.
- [ ] Check MDX build warnings, docs schema validity, and route availability.
- [x] Improve all eight public-page titles, descriptions, and Mintlify search keywords in frontmatter (source-level).
- [ ] Verify generated social sharing previews and canonicals on the deployed site.
- [x] Audit internal page links and canonical email `hello@gama.works` across the eight public pages (source-level).
- [ ] Confirm calendar and contact destinations work in the deployed site.
- [ ] Review plan prices, service promises, ownership terms, and response-time claims for consistency.
- [ ] Confirm analytics and consent settings are appropriate before adding new tracking.
- [ ] Review privacy/terms disclosures with qualified support if lead forms, payments, or sensitive data processing are introduced.

### Priority 3 — Optional follow-on commercial pages

- [ ] Case studies / selected work **only after public or permissioned evidence exists**.
- [ ] A dedicated FAQ/help page **only if support volume warrants one** (service FAQs already exist).
- [ ] Vertical pages or educational articles **only after search intent and content resources are validated**.

## Implementation Phases

**Content architecture (PR #8, merged):** Added `index.mdx`, `services.mdx`, this audit, and README links.

**Final navigation and source-level SEO integration (this PR):** Rebuilt `docs.json` with Home / Services / About / Contact tabs; placed all eight core pages in navigation; preserved existing URLs and configured two targeted 301 redirects; aligned metadata and internal search keywords; performed source-level route and component checks.

**Still requires live verification after merge:** deployed Mintlify root route, menu rendering, mobile/desktop layout, schema/CLI validation, internal and external link behavior, generated Open Graph previews, canonical URLs, indexing, and analytics/consent settings. The connected Mintlify deployment available in this session is not the GAMA Works site. No production browser QA or live indexing claims are made.
