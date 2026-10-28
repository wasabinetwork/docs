# GAMA Works Visual Experience — Design & Rollout Notes

**Status:** Phase 1 implementation on a PR branch (requires Mintlify preview, review, and deployment validation)

## Product boundaries

- **gama.works** stays on **Mintlify**, hosting the agency website, service pages, and portfolio.
- Purpose-specific applications can use other frameworks on **dedicated subdomains** when warranted.
- **Atlas** is an independent **e-commerce operating system initiative** on `atlas.gama.works`; it is **an example of that deployment strategy**, not a dependency or embedded module in this refactor.
- The current project is the **GAMA Works visual experience**, not an Atlas integration.

## Phase 1: Homepage + Portfolio (this PR)

### Visual direction

- Dark navy base `#07131e` / `#0b1722`; GAMA greens `#16a34a`, `#07c983`, `#15803d`
- Strong editorial headlines, clear first-screen CTA, accessible body contrast
- Abstract CSS-built graphics rather than invented customer screenshots or stock imagery
- Bright, lighter content sections to create rhythm and make service choices scannable
- Meaningful hover treatment only; respects `prefers-reduced-motion`
- Mobile-first responsive breakpoints: 980px, 850px, 650px

### Files

- `index.mdx`: custom-mode homepage, four service pathways, featured work, process and conversion CTA
- `portfolio.mdx`: new custom-mode selected-work page
- `style.css`: scoped custom-mode styles for GAMA pages; avoids global selectors on documentation chrome
- `docs.json`: Portfolio tab in primary navigation
- `README.md`: page inventory / visual-system reference

### Portfolio evidence rules

The initial portfolio contains:
1. **Atlas** — independent e-commerce OS, in development, external URL provided by project owner
2. **Kokonut Intelligence** — public open-source project and founder contribution
3. **Kokonut Network** — founder-led regenerative coordination initiative
4. **GAMA Works website** — in-house digital experience and documentation architecture

They are **not presented as commissioned agency client projects**, with no invented revenue, conversion, performance metrics, or endorsements. Project cards contain designed abstract artwork, **not real UI screenshots**. For future client case studies, request permission and document the client's approved role attribution, problem, scope, deliverables and verified outcomes.

## QA before merge

- [ ] Preview `index.mdx` and `portfolio.mdx` on deployed PR preview
- [ ] Confirm `style.css` is applied by the GAMA Works Mintlify deployment and plan
- [ ] Confirm custom mode removes sidebar/TOC but preserves navigation
- [ ] Confirm desktop/mobile layouts at 1440, 1024, 768, 390 and 320 pixels
- [ ] Keyboard-test links and inspect focus indication
- [ ] Check headings and accessible image descriptions
- [ ] Confirm contrast and reduced-motion behavior
- [ ] Confirm internal routes: `/services`, `/portfolio`, `/background`, `/contact` and all service pages
- [ ] Check external destination URLs (especially WIP Atlas)
- [ ] Confirm social sharing metadata on Home remains unchanged
- [ ] Run Mintlify validator and broken-link checks where CLI / preview available
- [ ] Check light and dark browser preference: custom sections intentionally use own dark/light palette
- [ ] Confirm no unrelated Mintlify page styling regressed

## Phase 2: Expand the visual system

Refactor the **Services overview** first, then the four individual service pages. Keep their published commercial conditions, routes, and metadata stable. The custom layout style should be reused rather than rebuilt per page.

Consider a small, useful **service finder** only when it has meaningful interactions and accessible fallbacks. Do not add animations simply to fill space.

## Phase 3: English + Spanish

Introduce Mintlify's native language navigation using the existing English routes and an `es/` content tree. Translate all public pages including Portfolio, CTAs, SEO metadata, FAQs, accessibility labels, and error states. Preserve brand/product names, URLs and commercial/legal terms. Use natural Latin American Spanish for Dominican Republic relevance; verify language switching, canonical/hreflang, and social image metadata.

## Future (optional)

Add permissioned case studies (client-approved photographs, screenshots, process notes, verified outcomes), and consider Next.js **only** for dedicated application experiences or specific advanced needs on subdomains. Avoid replacing Mintlify solely for visual reasons.

## Known validation boundary

The repository changes are source-level. They do **not** establish that GAMA Works' Mintlify PR preview or deployed production experience renders correctly. Browser QA should gate merging.
