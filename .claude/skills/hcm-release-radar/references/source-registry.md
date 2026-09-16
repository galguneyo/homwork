# Source Registry

Work top-down. Tier meanings in `evidence-protocol.md`.

## SAP SuccessFactors

| # | Source | Tier | Access | Use for |
|---|---|---|---|---|
| S1 | [SAP SuccessFactors What's New Viewer](https://help.sap.com/whats-new/8fcf4960eea24f78b1d7613da406a885) | T1 | Open | Feature-level truth, per module, per wave |
| S2 | [Product Release & Road Map Information](https://pages.community.sap.com/topics/successfactors/product-release-road-map) | T1 | Open (webinars need S-User) | Calendar, roadmap webinar registration |
| S3 | [SAP News Center — release announcements](https://news.sap.com/) | T1 | Open | Official wave narrative and themes |
| S4 | SAP Community → *HCM blog posts **by SAP*** | T1 | Open | Per-module "What's New in …" posts |
| S5 | SAP Community → *HCM blog posts **by members*** | T3 | Open | Practitioner reading, early warnings |
| S6 | [SAP Help Portal — Release Information](https://help.sap.com/docs/successfactors-release-information/) | T1 | Open | Deprecation / deletion dates, API end-of-maintenance |
| S7 | [SAP Support KBAs](https://userapps.support.sap.com/sap/support/knowledge/) | T1 | Open | Deprecation KBAs (e.g. legacy home page) |
| S8 | [ECP supported countries](https://help.sap.com/docs/successfactors-employee-central-payroll/implementing-employee-central-payroll-based-on-sap-human-capital-management-for-sap-s-4hana/supported-countries-regions-for-employee-central-payroll) | T1 | Open | Localization coverage — settle country-count conflicts here |
| S9 | [SAP Roadmap Explorer](https://roadmaps.sap.com/) | T1 | Open | Forward-looking, per product |

## Workday

| # | Source | Tier | Access | Use for |
|---|---|---|---|---|
| W1 | Workday Community → Release Center / *What's New in Workday* | T1-gated | Customer login | The only feature-complete Workday record |
| W2 | [Feature Release Review Webinars](https://community-content.workday.com/en-us/public/feature-release/) | T1 | Open landing, gated content | Which of 30+ product areas got attention |
| W3 | [doc.workday.com](https://doc.workday.com/) | T1 | Open | Current behaviour of a feature (not the delta) |
| W4 | [Workday Newsroom](https://newsroom.workday.com/) | T1 | Open | Strategy, agents, acquisitions |
| W5 | [Workday datasheets (`workday.com/content/dam/…`)](https://www.workday.com/) | T1 | Open PDF | Product scope, downloadable for clients |
| W6 | [Workday Marketplace](https://marketplace.workday.com/) | T1 | Open | Agent/app availability and packaging |
| W7 | Partner release guides — Opkey, Avaap, Coreteam, Zeneesha, Invisors, Kainos | T2 | Open | Dates, readiness checklists, partner-reported features |

## Standing search patterns

```
"<vendor> <wave>" release highlights <module>
"<wave>" deprecation OR "end of maintenance" OR retirement <vendor>
<vendor> <wave> preview date production date schedule
<vendor> <module> Korea localization
```

## Access note (recorded 2026-09-16)

In the Claude Code remote environment used for the first run, the egress proxy
blocked direct `WebFetch` to `community.sap.com`, `help.sap.com`, `sap.com`,
`roadmaps.sap.com`, `workday.com`, `community-content.workday.com` and partner
domains. `WebSearch` was unaffected. If `WebFetch` returns `EGRESS_BLOCKED`,
fall back to `WebSearch` and **downgrade the tier by one**, because you are then
reading a search-engine paraphrase of a T1 page rather than the page itself.
Record that downgrade in the output's methodology note.
