---
name: hcm-release-radar
description: Produce a bilingual (English/Korean), module- and SKU-symmetric briefing on the current Workday HCM and SAP SuccessFactors release waves — what shipped, what is planned, what is being deprecated, which links a client can actually open, and how a Korean client should use it. Use when the user asks about Workday 2026R1/2026R2 (or later Rx), SAP SuccessFactors 1H/2H release, release notes, what's new, release calendar, preview vs production dates, deprecations or mandatory changes, HCM product roadmaps, or a Workday-vs-SuccessFactors comparison.
---

# HCM Release Radar

A repeatable research-and-writing procedure for tracking two vendors whose
release calendars never line up, and turning that into something a Korean
client will act on.

## Why this exists

Workday and SAP SuccessFactors both ship twice a year, but on opposite phases,
with opposite documentation policies and opposite packaging logic. A client
running both (or choosing between them) needs one artifact that puts the two
side by side without flattening the differences. Reconstructing that from
scratch every six months wastes the expensive part of the work — the judgment —
on the cheap part — the gathering.

## Step 0 — Establish the wave

Name the wave before researching: e.g. `2026H2 = Workday 2026R2 × SFSF 2H 2026`.
Pin both vendors' four dates (documentation, preview, production, and for SAP the
deprecation-effective date). Everything else hangs off this.

## Step 1 — Evidence discipline

Read `references/evidence-protocol.md` and apply it literally. The single most
important rule: **the Workday/SAP documentation-access asymmetry must never be
narrated as a product-quality difference.**

## Step 2 — Fill the crosswalk

`references/module-crosswalk.md` holds the standing Workday↔SuccessFactors
functional-area map and the SKU packaging contrast. Fill this run's findings
into it. Keep the row order stable across runs so consecutive briefings diff
cleanly — that diff is itself a deliverable for retainer clients.

## Step 3 — Research loop

Work `references/source-registry.md` top-down. For each functional area ask five
questions, in this order:

1. What **shipped** this wave? (vendor-authored source only)
2. What is **planned** for the next wave? (roadmap source, labelled as such)
3. What is being **deprecated or forced**, and on exactly what date?
4. Is there an **openable asset** — PDF, brochure, video, webinar replay — or is
   it login-gated?
5. What is the **Korea-specific** angle (localization, labour law, data residency,
   language)?

Question 3 is the one clients pay for. A deprecation date is a budget line; a
new feature is a nice-to-have.

## Step 4 — Write bilingual, not translated

Each substantive row carries English source wording **and** Korean. Korean is not
a translation of the English cell — it is the consulting reading of it. Use
quotation marks only for text you actually saw verbatim; otherwise present it as
source wording and say so.

## Step 5 — Korean adoption plays

Apply `references/korea-advisory-plays.md`. Each play needs: trigger feature,
Korean context, precondition, risk, and a disconfirming test. Plays are the
consultant's hypotheses. Mark them. Never launder a hypothesis into a vendor
claim.

## Step 6 — Ship

Write to `output/YYYY-MM-DD_<wave-slug>.md` using
`references/output-template.md`. Close with an explicit **미확인 항목** list —
what you could not verify and what it would take to verify it. A briefing with
an honest gap list outranks a complete-looking one.

## Failure modes this skill exists to prevent

| Failure | Guard |
|---|---|
| Inventing a plausible Workday feature name to balance a table | Tier-1-or-silence rule (protocol §2) |
| Presenting a roadmap item as shipped | `SHIPPED`/`PLANNED` column separation |
| Quoting a partner blog as if it were the vendor | Tier tags on every line |
| Treating third-party PEPM estimates as list price | Pricing lines carry `T3 · estimate` |
| Reading Workday's thinner public record as a weaker release | Step 1 asymmetry rule |
| Letting a Korean play drift into an unsourced product claim | Precondition + disconfirming test per play |
