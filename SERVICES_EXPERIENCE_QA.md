# GAMA Works · Services Experience Refactor (Phase 2)

**Status:** Source implementation is on a review branch. Preview rendering and Mintlify editor validation are required before merging.

## Purpose

Give the GAMA Works Services experience the same editorial quality as the custom-mode Home and Portfolio pages while retaining every original offer detail, qualification, operational boundary, FAQ, and price.

## Files

| Public route | Thin MDX page | Full, unchanged original content | New visual component |
| --- | --- | --- | --- |
| `/services` | `services.mdx` | `snippets/service-content/services.mdx` | `GamaServicesOverview` |
| `/gama-web-ready-bundle` | `gama-web-ready-bundle.mdx` | `snippets/service-content/webready.mdx` | `GamaServiceExperience kind="webready"` |
| `/automation-workflow-design` | `automation-workflow-design.mdx` | `snippets/service-content/automation.mdx` | `GamaServiceExperience kind="automation"` |
| `/it-services` | `it-services.mdx` | `snippets/service-content/it.mdx` | `GamaServiceExperience kind="it"` |
| `/governance-funding-systems` | `governance-funding-systems.mdx` | `snippets/service-content/governance.mdx` | `GamaServiceExperience kind="governance"` |

The illustrations and layouts are defined in `snippets/gama-services.jsx`, with responsive CSS appended to root `style.css`.

**Why the split?** The first visual homepage implementation used deeply nested JSX directly in `index.mdx`, which caused a Mintlify dashboard editor parse error. Moving it to a JSX snippet fixed that issue. This phase uses the corrected pattern from the start: each public page contains only a small JSX import/usage and its original rich content is preserved as a reusable MDX snippet.

## Existing commercial content kept intact

- **WebReady:** $29.99/month; $299.98/year; monthly conditional 30-day money-back guarantee; annual conditional 30-day free trial; eligible first-year standard domain; 90-day complementary covered support; onboarding, ownership, exclusions, response targets, and full FAQ.
- **Automation:** discovery-led, custom-scoped workflow work; human review and AI-use boundaries.
- **IT Services:** assessments, applications, integrations, hosting, migrations, technical support, scope exclusions.
- **Governance & Funding:** health checks, grants operations, decision processes, scope-defined pricing, conflict-of-interest and accountability concerns, no implied legal/tax/investment/fiduciary advice.
- **Services overview:** four offerings, engagement models, what is/not included, and no unverified outcome promises.

Content migration is **lossless**: the body of each original main-branch page is copied without edits into its imported `.mdx` snippet. Title, SEO description, keywords, and OG/Twitter image metadata are preserved; page `mode` becomes `custom` to enable the landing-page design.

## Pre-merge acceptance checks

- [ ] Mintlify PR preview builds with no import or JSX compilation errors.
- [ ] All five pages open in the Mintlify dashboard without parse errors.
- [ ] Each page's rich original MDX content (cards, tabs, accordion groups, tables, lists) renders beneath the new visual experience.
- [ ] Custom `style.css` is loaded in the preview and only changes pages inside `.gama-services`.
- [ ] Test desktop 1440px / 1024px and mobile 768px / 390px / 320px; verify no overflow, crowding, or tiny text.
- [ ] All CTA buttons and service route links work; the “service details” anchor scrolls correctly.
- [ ] Confirm WebReady published rates, trial/guarantee qualifications, domain terms, ownership boundaries, and support qualifications are unchanged.
- [ ] Confirm human-in-the-loop and governance risk boundaries remain intact.
- [ ] Verify keyboard focus, meaningful headings, contrast, and screen-reader labels for CSS art.
- [ ] Verify Home and Portfolio appearance is unchanged.
- [ ] Confirm OG images and SEO descriptions resolve for all service routes.
- [ ] Check light/dark browser appearance and reduced-motion preference.

## Future phases

1. Add optional interactive service finder if it improves conversion and accessibility beyond the static service cards.
2. Expand verified Portfolio cases with screenshots, role attribution, and evidence.
3. Implement native English/Spanish Mintlify languages, retaining existing English URLs and adding Spanish translations of every public page, including the commercial details. Do not silently change offer terms during translation.

## Architecture boundary

The primary GAMA Works agency site stays on **Mintlify**. Specialized application experiences may use Next.js or other fit-for-purpose frameworks on subdomains. `atlas.gama.works` is an independent e-commerce OS initiative, not a dependency of the Services redesign.
