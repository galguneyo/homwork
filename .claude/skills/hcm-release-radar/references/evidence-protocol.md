# Evidence Protocol

Applies to every line of every HCM Release Radar output.

## §1 Source tiers

| Tier | What counts | Examples |
|---|---|---|
| **T1** | Vendor-authored, publicly addressable | `help.sap.com` What's New Viewer, `news.sap.com`, `sap.com` asset/document pages, SAP Community posts under *"blog posts by SAP"*, `doc.workday.com`, `newsroom.workday.com`, `workday.com` datasheets, `community-content.workday.com` |
| **T1-gated** | Vendor-authored but login-required | Workday Community release notes, Workday Success Plans webinars, SAP S-User roadmap webinars |
| **T2** | Implementation partner / SI | Zalaris, Effective People, Opkey, Avaap, Coreteam, Invisors, Delaware, Clarity, Lorenzo, Techbrainz, Zeneesha, Kainos, AMS |
| **T3** | Media, analyst, community member | SAP Community *"blog posts by members"*, CIO, TechTarget, Josh Bersin, Futurum, SAPinsider, pricing-benchmark sites |

Rules:
- A **date** may be asserted only from T1 or from two independent T2 sources agreeing.
- A **feature name** may be asserted only from T1 or T1-gated-via-T2-report, and when
  the latter, it is written as *"partner-reported"*.
- A **metric** (%, $, PEPM, country count) is always tagged with its tier and,
  when vendor-sourced, marked `vendor-stated`.
- Any conflict between sources is **reported as a conflict**, not resolved by
  picking the nicer number.

## §2 Tier-1-or-silence

If a functional area has no T1 or credible T2 evidence this run, the cell reads:

> `문서 비공개 / 미확인 — <what was searched>`

It does **not** read a generic vendor-marketing sentence. Filling a gap with
marketing copy is the most common way this deliverable goes wrong.

## §3 Status vocabulary

| Tag | Meaning |
|---|---|
| `SHIPPED` | In production for the named wave, per vendor source |
| `PREVIEW` | In preview tenant, production pending |
| `PLANNED` | Vendor roadmap item with a named target wave |
| `ANNOUNCED` | Publicly stated intent, no committed wave |
| `DEPRECATION` | End-of-maintenance or delete date is set |
| `미확인` | Searched, not found |

## §4 The asymmetry rule

Workday publishes feature-level release notes to authenticated customers; SAP
publishes a public What's New Viewer plus SAP-authored community posts. Therefore
**the public record on SAP is deeper than the public record on Workday, at every
wave, regardless of what the two vendors actually shipped.**

Every output must state this once, plainly, before any module table. Never write
a sentence of the form "SAP delivered more in this area than Workday" on the
basis of public-source volume alone.

## §5 Quotation

Use quotation marks only for text read verbatim from the source. Search-engine
summaries are paraphrase. Present them as *source wording*, not as quotes.

## §6 Hypothesis marking

Consultant-generated analysis (implications, Korean plays, TCO reasoning) is
prefixed `[가설]` or placed in an explicitly labelled advisory section, and
carries a precondition and a disconfirming test. It never appears inside a
vendor-fact table.
