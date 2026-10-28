<p align="center">
  <img src="./images/w.png" alt="GAMA Works" width="96" />
</p>

<h1 align="center">GAMA Works</h1>

<p align="center">
  <strong>Practical digital systems for businesses that want to operate better, grow with less friction, and own more of their infrastructure.</strong>
</p>

<p align="center">
  GAMA Works is a digital agency helping businesses build smarter automations, streamlined workflows, websites, and digital systems that improve efficiency and create long-term value.
</p>

<p align="center">
  <a href="https://gama.works/">Website</a> ·
  <a href="mailto:hello@gama.works">Email</a> ·
  <a href="https://cal.com/wasabi/gama">Book a Meeting</a>
</p>

---

## What GAMA Works Does

GAMA Works helps founders, solopreneurs, small businesses, organizations, and emerging digital ventures turn operational problems into practical systems.

The work sits across three connected areas:

- **Digital infrastructure** — websites, hosting, domains, business email, deployment, and technical operations.
- **Automation & workflows** — reducing repetitive work, connecting tools, improving internal processes, and building systems that create more value from existing resources.
- **Strategy & coordination** — governance, grants, funding systems, public goods, ecosystem operations, and technology-enabled organizational design.

The goal is not technology for its own sake. The goal is to build systems that are useful, understandable, maintainable, and aligned with how the organization actually works.

---

## Services

| Service | What it helps you do | Learn more |
| --- | --- | --- |
| **IT Services** | Build and maintain custom applications, infrastructure, migrations, integrations, business email, and broader technical systems. | [Explore IT Services](./it-services.mdx) |
| **GAMA WebReady Bundle** | Launch a professional web presence with website or blog design, business email, hosting, backups, support, and a clear path to ownership without a large upfront design fee. | [Explore WebReady](./gama-web-ready-bundle.mdx) |
| **Automation & Workflow Design** | Reduce manual work, connect business processes, improve operational visibility, and create systems that scale with the organization. | [Explore Automation & Workflow Design](./automation-workflow-design.mdx) |
| **Governance & Funding Systems** | Design accountable governance, build and operate grants programs, develop funding frameworks, and provide fractional ecosystem operations and advisory. | [Explore Governance & Funding](./governance-funding-systems.mdx) |

---

## Who We Work With

GAMA Works is especially suited for teams that need experienced, hands-on execution without unnecessary technical complexity.

Typical clients and collaborators include:

- Solopreneurs and independent professionals
- Small and medium-sized businesses
- Founders and startups
- Local and professional-service businesses
- Nonprofits and mission-driven organizations
- DAOs, protocols, funds, and Web3 ecosystems
- Public-goods and regenerative-finance initiatives
- Teams that need fractional technical, operational, or systems support

---

## How We Approach the Work

### Start with the real problem

Technology should solve an operational, commercial, or coordination problem. We first clarify what is blocking growth, creating friction, wasting time, or reducing trust.

### Keep complexity proportional

Small organizations should not need enterprise complexity to operate professionally. We favor practical systems that can evolve as the organization grows.

### Build for ownership

Where possible, clients should understand what they are using, retain control of their business assets, and have a clear path to ownership and portability.

### Optimize for long-term value

A useful system should do more than work on launch day. It should reduce recurring friction, improve reliability, create leverage, and remain maintainable over time.

### Support the human operating the system

Good infrastructure is not only code. Documentation, onboarding, support, workflows, incentives, and decision-making all shape whether a system succeeds in practice.

---

## Documentation

This repository powers the GAMA Works documentation and service pages using [Mintlify](https://mintlify.com/).

### Main Pages

- [Home](./index.mdx) — business-first overview, audience fit, service pathways, and discovery calls.
- [Services](./services.mdx) — compare WebReady, Automation, IT Services, and Governance & Funding Systems.
- [Portfolio](./portfolio.mdx) — selected independent products, founder-led initiatives, open-source platforms, and in-house work.
- [About GAMA Works](./background.mdx) — mission, vision, service philosophy, founder story, relevant experience, and how we work.
- [IT Services](./it-services.mdx) — custom applications, infrastructure, hosting, migrations, integrations, business email, and ongoing technical support.
- [GAMA WebReady Bundle](./gama-web-ready-bundle.mdx) — the evergreen web-presence bundle for solopreneurs and small businesses.
- [Automation & Workflow Design](./automation-workflow-design.mdx) — process mapping, workflow automation, tool integration, AI-assisted workflows, dashboards, and documentation.
- [Governance & Funding Systems](./governance-funding-systems.mdx) — governance operations, grants programs, ecosystem design, and strategic advisory.
- [Contact](./contact.mdx) — centralized inquiry hub, service routing, project intake guidance, booking, and existing-client support.

Site settings and the **Home → Services → Portfolio → About → Contact** navigation are defined in [`docs.json`](./docs.json). The Services tab includes WebReady, Automation & Workflow Design, IT Services, and Governance & Funding Systems. The responsive visual system for the custom-mode Home and Portfolio pages is in [`style.css`](./style.css). The page inventory, URL decisions, and post-merge QA checklist live in [`SITE_REFACTOR_AUDIT.md`](./SITE_REFACTOR_AUDIT.md).

---

## About the Founder

GAMA Works is informed by roughly two decades of hands-on experience across IT infrastructure, internet-native businesses, digital systems, entrepreneurship, governance, and ecosystem operations.

The founder's technical path began with an IT company launched in **2006**, providing VoIP services to small and medium-sized businesses and growing to approximately **100 paying customers** and **7 regional distributors**.

Since 2021, that operating experience has expanded into Web3 governance, grants, public goods, regenerative finance, and ecosystem coordination — including work across Gitcoin, Octant, Polygon, Kokonut Network, and other public-goods initiatives.

The common thread is systems thinking: understanding how technology, operations, incentives, funding, and people fit together to produce durable outcomes.

[Read the full background →](./background.mdx)

---

## Local Development

### Prerequisites

- Node.js
- npm
- Mintlify CLI

Install the Mintlify CLI:

```bash
npm i -g mint
```

From the repository root, where `docs.json` is located, start the local development server:

```bash
mint dev
```

Then open:

```text
http://localhost:3000
```

If your local environment is out of date, run:

```bash
mint update
```

---

## Publishing

The documentation is connected to Mintlify through GitHub. Changes pushed to the default branch are deployed automatically through the configured Mintlify integration.

Before publishing, verify:

- Navigation paths in `docs.json`
- Internal links
- Mobile readability
- Metadata titles and descriptions
- Contact and booking links
- Any pricing, guarantees, availability, or campaign-specific terms that may change over time

---

## Contact GAMA Works

Have a business problem, workflow bottleneck, website need, automation idea, or ecosystem challenge?

- **Website:** [https://gama.works/](https://gama.works/)
- **Email:** [hello@gama.works](mailto:hello@gama.works)
- **Meeting:** [https://cal.com/wasabi/gama](https://cal.com/wasabi/gama)
- **Contact page:** [contact.mdx](./contact.mdx)

> Bring the problem. We can help design the system around it.

---

## License

See [`LICENSE`](./LICENSE) for repository licensing terms.
