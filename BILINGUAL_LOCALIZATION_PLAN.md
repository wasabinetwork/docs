# GAMA Works — Bilingual Launch Roadmap

**Phase:** Native Mintlify localization foundation, English + Spanish.
**Status:** Review branch; do not merge before a successful Mintlify preview.

## Product architecture

- **English:** all existing routes remain in place (no moves, no redirects, no renamed files).
- **Spanish:** `/es/`, `/es/services`, and `/es/portfolio`, each using native navigation under `navigation.languages`.
- The primary GAMA Works website stays on Mintlify. Atlas is an independent e-commerce OS initiative on its own subdomain.
- Spanish marketing copy uses neutral, readable Latin American Spanish suitable for Dominican businesses.
- All complex Spanish JSX is isolated in `snippets/gama-es.jsx` and rendered through minimal MDX entrypoints to avoid the prior Mintlify editor parsing problem.
- Existing social image assets are reused rather than generating unapproved new artwork. Note that existing image text may still be in English; localized OG artwork is a future creative task.

## What this initial localization includes

| Page | English | Spanish | Status |
| --- | --- | --- | --- |
| Home | `/` | `/es/` | New Spanish visual page |
| Services overview | `/services` | `/es/services` | New Spanish visual overview |
| Portfolio | `/portfolio` | `/es/portfolio` | New Spanish portfolio |
| WebReady terms | `/gama-web-ready-bundle` | — | **Translation pending** |
| Automation details | `/automation-workflow-design` | — | **Translation pending** |
| IT details | `/it-services` | — | **Translation pending** |
| Governance details | `/governance-funding-systems` | — | **Translation pending** |
| About | `/background` | — | **Translation pending** |
| Contact | `/contact` | — | **Translation pending** |

**Important:** This is a **partial bilingual launch foundation**. Spanish Home and Services route users to the existing English detailed service pages and Contact; both Spanish pages explicitly state that detailed commercial terms remain in English. The Spanish menu intentionally exposes only translated pages. It must not be described as fully translated until all remaining public routes and policy terms are localized.

## Translation principles

- Don't change package price amounts, guarantees, domain conditions, support windows, ownership conditions, or professional advisory exclusions when translating.
- Preserve brand names: GAMA Works, WebReady, Atlas, Kokonut Network, Kokonut Intelligence.
- Prefer natural terms: *automatización de procesos*, *servicios de TI*, *gobernanza*, *financiación*, *portafolio*, *proyecto a medida*.
- Translate buttons, accessibility labels, SEO titles/descriptions, internal links, and alt text alongside body copy.
- Keep project status and founder relationship qualifications explicit; no implied client projects or performance claims.
- For the remaining four detailed service pages, translate **all** original commercial/legal qualifications and FAQs rather than using abbreviated cards.
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

1. Fully translate the four detailed service pages, starting with **WebReady** (the most sensitive due to pricing, domain, trial, guarantee and ownership conditions).
2. Localize About and Contact, including their calls to action and project-intake descriptions.
3. Create localized social-sharing assets if desired.
4. Audit language-specific SEO and test the full bilingual conversion flow end to end.
