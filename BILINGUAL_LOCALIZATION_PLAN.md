# GAMA Works — Bilingual Launch Roadmap

**Phase:** Native Mintlify localization foundation, English + Spanish.
**Status:** Home, Services overview, Portfolio, WebReady, Automation and IT Services are merged in Spanish. Governance & Funding is translated in the current review branch; merge only after Mintlify preview, copy and accessibility review.

## Product architecture

- **English:** all existing routes remain in place (no moves, no redirects, no renamed files).
- **Spanish:** `/es/`, `/es/services`, `/es/portfolio`, `/es/gama-web-ready-bundle`, `/es/automation-workflow-design`, `/es/it-services`, and `/es/governance-funding-systems`, using native navigation under `navigation.languages`.
- The primary GAMA Works website stays on Mintlify. Atlas is an independent e-commerce OS initiative on its own subdomain.
- Spanish marketing copy uses neutral, readable Latin American Spanish suitable for Dominican businesses.
- Complex Spanish JSX lives in `snippets/gama-es.jsx`, `snippets/gama-webready-es.jsx`, and `snippets/gama-automation-es.jsx`, `snippets/gama-it-es.jsx`, and `snippets/gama-governance-es.jsx`, rendered through minimal MDX entrypoints to avoid the prior Mintlify editor parsing problem.
- Existing social image assets are reused rather than generating unapproved new artwork. Note that existing image text may still be in English; localized OG artwork is a future creative task.

## What this initial localization includes

| Page | English | Spanish | Status |
| --- | --- | --- | --- |
| Home | `/` | `/es/` | New Spanish visual page |
| Services overview | `/services` | `/es/services` | New Spanish visual overview |
| Portfolio | `/portfolio` | `/es/portfolio` | New Spanish portfolio |
| WebReady terms | `/gama-web-ready-bundle` | `/es/gama-web-ready-bundle` | Merged; complete Spanish guide |
| Automation details | `/automation-workflow-design` | `/es/automation-workflow-design` | Merged; complete Spanish guide |
| IT details | `/it-services` | `/es/it-services` | Merged; complete Spanish guide |
| Governance details | `/governance-funding-systems` | `/es/governance-funding-systems` | **Translated in current PR; preview/review required** |
| About | `/background` | — | **Translation pending** |
| Contact | `/contact` | — | **Translation pending** |

**Important:** This is a **partial bilingual launch foundation**. Spanish Home and Services route all four service visitors to complete Spanish guides. About and Contact still lead to English pages; notices identify these remaining gaps. The Spanish menu intentionally exposes only translated pages. It must not be described as fully translated until all remaining public routes and policy terms are localized.

## Translation principles

- Don't change package price amounts, guarantees, domain conditions, support windows, ownership conditions, or professional advisory exclusions when translating.
- Preserve brand names: GAMA Works, WebReady, Atlas, Kokonut Network, Kokonut Intelligence.
- Prefer natural terms: *automatización de procesos*, *servicios de TI*, *gobernanza*, *financiación*, *portafolio*, *proyecto a medida*.
- Translate buttons, accessibility labels, SEO titles/descriptions, internal links, and alt text alongside body copy.
- Keep project status and founder relationship qualifications explicit; no implied client projects or performance claims.
- All four detailed service pages have been translated in full (Governance pending review/merge). Keep commercial, operational and professional boundaries and FAQs aligned with their English originals.
- Language switcher should provide a route to the corresponding page where translated. For pages not yet translated, avoid misleading route mapping.

## Preview acceptance criteria

- [ ] Mintlify docs.json schema accepts `navigation.languages` with `tabs` nested under `en` and `es`.
- [ ] Spanish language chooser displays correctly and English routes remain unchanged.
- [ ] All translated Spanish routes, including `/es/governance-funding-systems`, render, open in the Mintlify dashboard editor, and resolve their JSX/MDX snippet imports.
- [ ] Spanish typography does not clip and service graphics remain legible at 1440, 1024, 768, 390, and 320 px.
- [ ] Check keyboard navigation, heading hierarchy, contrast, and focus states against WCAG 2.2 AA.
- [ ] Verify Spanish-to-Spanish service cross-links, English-only About/Contact handoffs, original booking links and email behavior.
- [ ] Verify Spanish title/description metadata, canonical behavior, language alternates/hreflang, and social previews as actually rendered.
- [ ] Check native interface strings such as search, breadcrumbs, and language selector.
- [ ] Confirm no content inadvertently copied into the Spanish language tree in English without an explicit disclaimer.
- [ ] Review regional Spanish copy with a native editor before declaring fully localized.
- [ ] Run Mintlify CLI broken-link checking and inspect build output.

## Next implementation increment

1. **All four detailed services are translated once this PR merges.** Translate About and Contact next, including commercial inquiries and founder-role qualifications.
2. Localize About and Contact, including their calls to action and project-intake descriptions.
3. Create localized social-sharing assets if desired.
4. Audit language-specific SEO and test the full bilingual conversion flow end to end.


## WebReady full-guide translation audit (previously merged)

- Complete Spanish version: `snippets/service-content/webready-es.mdx`. All major original sections and 13 FAQs have Spanish counterparts.
- Public entrypoint: `es/gama-web-ready-bundle.mdx`; visual intro: `snippets/gama-webready-es.jsx`.
- Preserve published prices, booking destinations, 30-day monthly conditional money-back guarantee, 30-day annual conditional free trial, eligible first-year standard domain, 45-minute discovery session, up-to-7-day delivery target conditional on onboarding during the first 72 hours, 90-day covered support, initial 1–24-hour response goal, 10 GB per inbox, and 12-month source-file eligibility conditions and exclusions.
- Do not imply an unconditional refund or delivery time, an ownership transfer before completion of the qualifying period, or that a trial and guarantee are the same protection.
- The Spanish marketing page should be reviewed against the applicable service agreement; it does not replace the agreement.

## Automation & Workflow Design localization audit (previously merged)

- Public route: `/es/automation-workflow-design`; MDX entrypoint: `es/automation-workflow-design.mdx`.
- Full Spanish guide: `snippets/service-content/automation-es.mdx`; visual component: `snippets/gama-automation-es.jsx`.
- Translate all original section headings, six use-case groups, seven engagement steps, measurable outcomes, risk/AI boundaries, four engagement modes, and seven FAQs.
- Maintain explicit **human-in-the-loop** controls for money, privacy, governance and consequential decisions; permissions, logs, fallback paths and escalation remain central.
- Retain custom scoping; there is **no fixed price, guaranteed business outcome, or unlimited AI autonomy** in this offer.
- Keep the original booking URL `https://cal.com/wasabi/gama` and link to English-only Contact with a transparent note until its translation is ready.
- Verify mobile diagram text, source-level contrast plus browser WCAG 2.2 AA checks, translated metadata and all in-language internal links before merging.


## IT Services full localization audit (previously merged)

- Public route: `/es/it-services`; thin entrypoint: `es/it-services.mdx`; localized visual: `snippets/gama-it-es.jsx`.
- Full Spanish guide: `snippets/service-content/it-es.mdx`.
- Preserve the complete technical scope: applications and internal tools, hosting/cloud/deployments, domains/business email, APIs/integrations, migrations/rescue work, fractional technical support, engagement models, operating principles, suitability and all nine FAQs.
- Retain the qualifications that there is **no guaranteed 24/7 emergency response**, formal penetration-testing service or regulated-industry compliance specialization without appropriate partners.
- Ongoing support, response expectations and fees depend on written agreement; custom projects require discovery and a defined proposal.
- Keep the English published booking destination unchanged while making Spanish WebReady, Automation, Home, and Services routes link directly to `/es/it-services`.
- Preview must check Mintlify editor parsing, rich content, mobile overflow, the annotated IT systems illustration, WCAG 2.2 AA contrast/keyboard behavior and native i18n routing.


## Governance & Funding full localization audit (current PR)

- Public route: `/es/governance-funding-systems`; MDX entrypoint: `es/governance-funding-systems.mdx`.
- Complete Spanish guide: `snippets/service-content/governance-es.mdx`; visual experience: `snippets/gama-governance-es.jsx`.
- Preserve all **five engagement models** (health check, governance system, grant program, ecosystem/funding framework, and fractional strategic operations), process flows, use-case groups, indicators, founder history and all FAQs.
- **Strict authority boundary:** recommendations and process support do not grant treasury signing rights, custody, disbursement authority, privileged access or final funding-decision rights. Decision rights remain with the client's authorized body unless explicitly assigned in a separate appropriately controlled agreement.
- **Professional boundary:** not legal, tax, investment, audit, or regulated fiduciary advice; independent qualified specialists may be required.
- No guarantees of grant awards, fundraising outcomes, token prices, community consensus, voting results, impact improvements or formal independent assurance.
- Existing founder roles in Gitcoin, Octant Community Fund, Polygon General Grants and Kokonut Network are attributed as founder experience, **not** as GAMA Works client engagements, sponsorships or endorsements.
- Keep the original booking URL, use Spanish WebReady, Automation and IT cross-links, and visibly identify About and Contact as English-only until localized.
- Confirm mobile and desktop visual rendering, agreement-language review, WCAG 2.2 AA browser testing, imported snippet compilation and language navigation before merge.
