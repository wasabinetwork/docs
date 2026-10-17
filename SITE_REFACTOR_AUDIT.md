# GAMA Works — Page Inventory & Information Architecture Audit

**Status:** Content architecture review, before navigation refactor  
**Date:** 2026-10-17  
**Repository:** [wasabinetwork/docs](https://github.com/wasabinetwork/docs)  
**Scope:** Root Mintlify MDX pages and `docs.json` structure. This is an inventory and editorial plan, not a production SEO or browser rendering test.

## Executive finding

The previous refactor completed six core content pages, but the repository had **no `index.mdx` homepage** and **no `services.mdx` service overview**. The existing navigation remained grouped as **About Me / Web2 / Web3** and omitted the new **Automation & Workflow Design** page.

A first-time visitor needs a business-level introduction and a simple way to choose between the four offers before that navigation structure can be replaced coherently.

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

The current `docs.json` tabs are:
- **About Me:** `background`, `contact`
- **Web2:** `it-services`, `gama-web-ready-bundle`
- **Web3:** `governance-funding-systems`

This hides the service cohesion of GAMA Works, does not represent the revised About positioning, and omits Automation. The new Home and Services pages are not added to navigation until the final navigation PR.

### Mintlify publication caveat

Mintlify treats pages omitted from navigation as hidden pages. Their file-path URLs may be directly accessible, but they will not appear in the normal menu, and hidden pages are excluded from indexing by default. **Do not regard this content PR as the final home-page launch.** When ready, add `index` and `services` to the planned navigation and verify the intended root experience in Mintlify.

Reference: https://mintlify.com/docs/guides/hidden-pages

## Suggested Information Architecture

**Proposed only — do not implement in `docs.json` in this phase.**

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

- [ ] Rebuild `docs.json` around Home, Services, About, and Contact rather than Web2/Web3.
- [ ] Put all four offers in a discoverable, coherent navigation structure.
- [ ] Confirm root `/` resolves to the intended homepage in the deployed Mintlify project.
- [ ] Confirm both new pages are discoverable and indexed according to intended settings.
- [ ] Decide whether to remove/archive `essentials/*.mdx` starter material.
- [ ] Keep existing service URL paths or add redirects before any rename.

### Priority 2 — Quality, metadata, and conversion audit

- [ ] Preview all pages in Mintlify on desktop and mobile; inspect spacing, cards, accordions, headings, and CTAs.
- [ ] Check MDX build warnings, docs schema validity, and route availability.
- [ ] Validate page-specific titles, descriptions, and social sharing previews.
- [ ] Audit internal links and canonical email across all files.
- [ ] Confirm calendar and contact destinations work in the deployed site.
- [ ] Review plan prices, service promises, ownership terms, and response-time claims for consistency.
- [ ] Confirm analytics and consent settings are appropriate before adding new tracking.
- [ ] Review privacy/terms disclosures with qualified support if lead forms, payments, or sensitive data processing are introduced.

### Priority 3 — Optional follow-on commercial pages

- [ ] Case studies / selected work **only after public or permissioned evidence exists**.
- [ ] A dedicated FAQ/help page **only if support volume warrants one** (service FAQs already exist).
- [ ] Vertical pages or educational articles **only after search intent and content resources are validated**.

## Scope of This PR

- New `index.mdx`
- New `services.mdx`
- Updated `README.md`
- New `SITE_REFACTOR_AUDIT.md`
- **No changes to `docs.json`**

The navigation, live root routing, and final SEO/conversion QA are deliberately reserved for the final integration pass.
