# GAMA Works — Bilingual Launch Roadmap

**Phase:** Native Mintlify localization foundation, English + Spanish.
**Status:** Spanish Home, Services, Portfolio, and WebReady are merged. The complete Automation translation is in the current review branch; merge only after successful Mintlify preview and copy review.

## Product architecture

- **English:** all existing routes remain in place (no moves, no redirects, no renamed files).
- **Spanish:** `/es/`, `/es/services`, `/es/portfolio`, `/es/gama-web-ready-bundle`, and `/es/automation-workflow-design`, using native navigation under `navigation.languages`.
- The primary GAMA Works website stays on Mintlify. Atlas is an independent e-commerce OS initiative on its own subdomain.
- Spanish marketing copy uses neutral, readable Latin American Spanish suitable for Dominican businesses.
- Complex Spanish JSX lives in `snippets/gama-es.jsx`, `snippets/gama-webready-es.jsx`, and `snippets/gama-automation-es.jsx`, rendered through minimal MDX entrypoints to avoid the prior Mintlify editor parsing problem.
- Existing social image assets are reused rather than generating unapproved new artwork. Note that existing image text may still be in English; localized OG artwork is a future creative task.

## What this initial localization includes

| Page | English | Spanish | Status |
| --- | --- | --- | --- |
| Home | `/` | `/es/` | New Spanish visual page |
| Services overview | `/services` | `/es/services` | New Spanish visual overview |
| Portfolio | `/portfolio` | `/es/portfolio` | New Spanish portfolio |
| WebReady terms | `/gama-web-ready-bundle` | `/es/gama-web-ready-bundle` | Merged; complete Spanish guide |
| Automation details | `/automation-workflow-design` | `/es/automation-workflow-design` | **Translated in current PR; preview/review required** |
| IT details | `/it-services` | — | **Translation pending** |
| Governance details | `/governance-funding-systems` | — | **Translation pending** |
| About | `/background` | — | **Translation pending** |
| Contact | `/contact` | — | **Translation pending** |

**Important:** This is a **partial bilingual launch foundation**. Spanish Home and Services now route WebReady and Automation visitors to complete Spanish guides. IT, Governance, About, and Contact still lead to English pages; the Spanish pages explain this distinction. The Spanish menu intentionally exposes only translated pages. It must not be described as fully translated until all remaining public routes and policy terms are localized.

## Translation principles

- Don't change package price amounts, guarantees, domain conditions, support windows, ownership conditions, or professional advisory exclusions when translating.
- Preserve brand names: GAMA Works, WebReady, Atlas, Kokonut Network, Kokonut Intelligence.
- Prefer natural terms: *automatización de procesos*, *servicios de TI*, *gobernanza*, *financiación*, *portafolio*, *proyecto a medida*.
- Translate buttons, accessibility labels, SEO titles/descriptions, internal links, and alt text alongside body copy.
- Keep project status and founder relationship qualifications explicit; no implied client projects or performance claims.
- For the remaining detailed service pages, translate **all** original commercial, operational and professional boundaries and FAQs rather than using abbreviated cards.
- Language switcher should provide a route to the corresponding page where translated. For pages not yet translated, avoid misleading route mapping.

## Preview acceptance criteria

- [ ] Mintlify docs.json schema accepts `navigation.languages` with `tabs` nested under `en` and `es`.
- [ ] Spanish language chooser displays correctly and English routes remain unchanged.
- [ ] `/es/`, `/es/services`, and `/es/portfolio` render, open in Mintlify dashboard editor, and resolve the imported JSX snippet.
- [ ] Spanish typography does not clip and service graphics remain legible at 1440, 1024, 768, 390, and 320 px.
- [ ] Check keyboard navigation, heading hierarchy, contrast, and focus states against WCAG 2.2 AA.
- [ ] Verify all Spanish internal URLs, English details links, booking links and email behavior.
- [ ] Verify Spanish title/description metadata, canonical behavior, language alternates/hreflang, and social previews as actually rendered.
- [ ] Check native interface strings such as search, breadcrumbs, and language selector.
- [ ] Confirm no content inadvertently copied into the Spanish language tree in English without an explicit disclaimer.
- [ ] Review regional Spanish copy with a native editor before declaring fully localized.
- [ ] Run Mintlify CLI broken-link checking and inspect build output.

## Next implementation increment

1. **WebReady is merged; Automation is translated in this review branch.** Complete IT Services and Governance & Funding next.
2. Localize About and Contact, including their calls to action and project-intake descriptions.
3. Create localized social-sharing assets if desired.
4. Audit language-specific SEO and test the full bilingual conversion flow end to end.


## WebReady full-guide translation audit (previously merged)

- Complete Spanish version: `snippets/service-content/webready-es.mdx`. All major original sections and 13 FAQs have Spanish counterparts.
- Public entrypoint: `es/gama-web-ready-bundle.mdx`; visual intro: `snippets/gama-webready-es.jsx`.
- Preserve published prices, booking destinations, 30-day monthly conditional money-back guarantee, 30-day annual conditional free trial, eligible first-year standard domain, 45-minute discovery session, up-to-7-day delivery target conditional on onboarding during the first 72 hours, 90-day covered support, initial 1–24-hour response goal, 10 GB per inbox, and 12-month source-file eligibility conditions and exclusions.
- Do not imply an unconditional refund or delivery time, an ownership transfer before completion of the qualifying period, or that a trial and guarantee are the same protection.
- The Spanish marketing page should be reviewed against the applicable service agreement; it does not replace the agreement.

## Automation & Workflow Design localization audit (current PR)

- Public route: `/es/automation-workflow-design`; MDX entrypoint: `es/automation-workflow-design.mdx`.
- Full Spanish guide: `snippets/service-content/automation-es.mdx`; visual component: `snippets/gama-automation-es.jsx`.
- Translate all original section headings, six use-case groups, seven engagement steps, measurable outcomes, risk/AI boundaries, four engagement modes, and seven FAQs.
- Maintain explicit **human-in-the-loop** controls for money, privacy, governance and consequential decisions; permissions, logs, fallback paths and escalation remain central.
- Retain custom scoping; there is **no fixed price, guaranteed business outcome, or unlimited AI autonomy** in this offer.
- Keep the original booking URL `https://cal.com/wasabi/gama` and link to English-only Contact with a transparent note until its translation is ready.
- Verify mobile diagram text, source-level contrast plus browser WCAG 2.2 AA checks, translated metadata and all in-language internal links before merging.
