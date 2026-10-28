# GAMA Works · Services Accessibility & Visual Consistency Audit

**Baseline:** WCAG 2.2 AA target. **Implementation:** `fix-services-wcag-contrast-design-v2`.
**Status:** Source-level improvements and palette calculations completed. Browser-based accessibility and responsive verification **still required before calling the site conformant**.

## Root cause

PR #13 introduced a consistent custom visual hero and service cards, but then rendered the complete legacy documentation-oriented service guide inside a plain white content wrapper. Mintlify's theme-native `<Card>`, `<Columns>`, `<Info>`, `<Tabs>`, and `<Accordion>` styles were not guaranteed to inherit custom page foreground/background colors in a high-contrast pairing. The visual hierarchy and reading experience were also inconsistent after the opening sections.

## Changes

### `/services` full-page redesign

- Keep the approved custom hero, connected systems illustration, four pathways, and introductory bridge.
- Replace the remainder with a deliberately designed sequence:
  - high-contrast discovery/contact cards
  - accessible, responsive outcome-selection rows replacing the dense comparison table
  - four illustrated services with scope bullets, fit guidance, and calls to action
  - connected-services story and process
  - four explicitly scoped engagement models
  - responsible founder/background context
  - seven semantic, keyboard-usable FAQ disclosures
  - final contact CTA.
- Retain `snippets/service-content/services.mdx` as the unchanged original comparison/copy reference, although it is no longer rendered on the public Services overview. The new overview preserves its important offers, facts, service fit distinctions, engagement models and FAQs in redesigned copy.
- The individual service pages remain the authoritative locations for the *full* WebReady offer conditions and all detailed service boundaries.

### Four detailed service pages

- Replace theme-native `Card`, `Columns`, `Info`, `Check`, `Warning`, `Note`, `Tip`, `Tabs`, `Tab`, `Steps`, `Step`, `AccordionGroup`, and `Accordion` inside their imported MDX guides with GAMA-specific high-contrast equivalents.
- Use a reusable JSX component library in `snippets/gama-service-blocks.jsx`.
- Visual cards render as semantic links or noninteractive `div`s, depending on whether a valid destination exists. FAQs use native `<details><summary>`, with a visible +/× state.
- Existing service-guide text is unchanged (checked via extraction); WebReady prices, qualifications, guarantee, trial, support, domain and ownership language remain intact.
- Content and metadata in the public service MDX entrypoints are otherwise unchanged. No new packages or framework migration.

### Home & Portfolio companion fixes

- Darken select under-contrast helper text and section labels on light backgrounds.
- Add visible keyboard focus styling; maintain the already-approved layouts.

## WCAG 2.2 AA contrast benchmarks

WCAG SC 1.4.3: **4.5:1** minimum normal text; **3:1** for qualifying large text.
SC 1.4.11: **3:1** for necessary UI component boundaries/states and important graphics.
Source: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html and https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html.

These are independently calculated from CSS sRGB hex values using relative luminance and the WCAG contrast formula, not from a live DOM sample:

| Foreground | Background | Ratio | Example |
| --- | --- | ---: | --- |
| `#112a22` | `#ffffff` | **15.24:1** | Card headings and dark ink |
| `#38594c` | `#ffffff` | **7.77:1** | Card description text |
| `#496b5c` | `#ffffff` | **5.93:1** | Muted text |
| `#076b43` | `#ffffff` | **6.58:1** | Forest-green links |
| `#38594c` | `#e4f5eb` | **6.87:1** | Body on mint background |
| `#076b43` | `#e4f5eb` | **5.81:1** | Green on mint background |
| `#f5fff9` | `#0a1c25` | **17.05:1** | Light text on navy |
| `#c7e7d8` | `#0a1c25` | **13.15:1** | Supporting text on navy |
| `#8df2b8` | `#0a1c25` | **12.88:1** | Mint links on navy |
| `#052c1e` | `#18d47c` | **7.76:1** | Primary CTA text/background |
| `#698a78` | `#ffffff` | **3.81:1** | Necessary card borders |

**Limitations:** Dark sections use gradients and layered surfaces; the table only validates specified flat-color pairs. Actual computed foreground and background colors, state variants, overlays, and browser rendering still require inspection.

## Pre-merge review checklist (required)

- [ ] Mintlify builds/opens all five service pages without a parse or missing-import error.
- [ ] Check `/services` entire vertical flow at desktop and mobile (1440, 1024, 768, 390, 320 px).
- [ ] Confirm **all text and icons** have usable contrast in light/dark themes and in hover/focus/active states.
- [ ] Run browser axe-core/Lighthouse accessibility audits, then manually inspect warnings; automated tools cannot prove full WCAG conformance.
- [ ] Sample computed CSS colors with DevTools and verify SC 1.4.3 and SC 1.4.11 on final rendered content, not only token values.
- [ ] Keyboard-only test tab order and `<details>` toggles; visible focus against every background.
- [ ] Check focus-not-obscured, 24px target size or applicable exceptions, non-color cues, heading hierarchy, semantics, accessible names, and link purpose.
- [ ] Test browser zoom at 200% and 400%, reflow to 320px, text spacing overrides, screen reader labels, and reduced-motion preference.
- [ ] Confirm the mobile service diagrams do not overlap text or interactive elements; decorative diagrams must not be relied on to convey unique information.
- [ ] Confirm every service booking link and internal CTA opens the intended route.
- [ ] Verify WebReady `$29.99/month`, `$299.98/year`, 30-day conditional monthly guarantee, 30-day conditional annual trial, first-year eligible standard domain and 90-day support qualifiers on its detailed page.
- [ ] Compare Home and Portfolio with the approved deployment to verify only purposeful contrast/focus improvements.
- [ ] Check additional site pages (About, Contact) for WCAG 2.2 AA issues in later site-wide pass.

## Remaining constraints

This PR improves Services visual structure and addresses known source-level color issues across the main designed pages. **It is not an accessibility certification and does not prove full-site WCAG 2.2 AA compliance.** Production rendering, semantics, assistive-tech behavior and any remaining About/Contact content must be tested.

No changes to the deployment, pricing, or external product/subdomain architecture are required.
