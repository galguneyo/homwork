# Workday ↔ SAP SuccessFactors — Functional & SKU Crosswalk

The standing symmetry spine. **Keep row order stable across runs** so consecutive
briefings diff cleanly.

Mapping caveat: the two vendors do not decompose HR the same way. Where a
Workday capability sits *inside* a bundled SKU and the SAP equivalent is a
*separately licensed* module, the row is marked `⚠ 비대칭` — this is a
commercial fact, not a functional one, and it is usually the single most
consequential line in a licensing conversation.

## A. Packaging logic (read before the module table)

| | Workday | SAP SuccessFactors |
|---|---|---|
| Core commercial unit | **Workday HCM** — one bundled SKU | **Employee Central** — base, then à la carte |
| What rides inside core | Absence, organisation management, and basic talent — incl. compensation, goal management, performance management, succession — per UpperEdge's comparison | Little beyond core HR; even Onboarding is a separate purchase |
| Buyer flexibility | Bundle cannot be broken apart | Subscribe module by module, phased to need |
| Consequence for phasing | Pay for talent capability from day 1 whether deployed or not | Defer talent spend; pay integration/consistency cost instead |
| AI commercial model | **Flex Credits** — explicit consumption credits, purchasable from Workday Rising 2025 | Joule agents delivered within the release; separate AI-unit exposure **미확인** |

Sources: [UpperEdge — SuccessFactors v Workday](https://upperedge.com/sap/cloud-hcm-competitive-landscape-successfactors-v-workday/) (T3) ·
[Futurum — Workday Rising 2025](https://futurumgroup.com/insights/workday-rising-2025-ai-agents-data-cloud-and-flex-credits-unveiled/) (T3) ·
[Workday Newsroom, 2025-09-16](https://newsroom.workday.com/2025-09-16-Workday-Illuminate-TM-Expands-with-New-AI-Agents-for-HR,-Finance,-and-Industry) (T1)

> `[가설]` Any three-year TCO model for a Workday-side decision needs a separate
> **variable AI-consumption line**; the SAP side needs a **module-count growth
> line**. Modelling both vendors with one flat PEPM understates Workday's upside
> variance and SAP's scope creep. Disconfirming test: ask each vendor to quote a
> 3-year ceiling for AI consumption and for full-suite module activation.

## B. Functional area map

| # | 기능영역 (Functional area) | Workday SKU / module | SAP SuccessFactors SKU / module | 비고 |
|---|---|---|---|---|
| 1 | 핵심 인사 (Core HR) | Workday HCM (Core HCM) | Employee Central (EC) | 대칭 |
| 2 | 급여 (Payroll) | Workday Payroll (native: US/CA/UK/FR ±) · Workday Payroll provided by Strada · Global Payroll Cloud partners | Employee Central Payroll (ECP) | ⚠ 비대칭 — 한국 로컬라이제이션 격차 |
| 3 | 근태·부재 (Time & Absence) | Workday Time Tracking · Absence · Scheduling | Time Management (Time Tracking / Time Off) | 대칭 |
| 4 | 채용 (Recruiting) | Workday Recruiting (+HiredScore) · VNDLY (contingent) | SF Recruiting → **SmartRecruiters** (SAP 인수 완료) | ⚠ 전략 전환 진행 중 |
| 5 | 온보딩 (Onboarding) | Workday Onboarding (HCM 번들 내) | SF Onboarding (별도 SKU) | ⚠ 비대칭 (번들 vs 별도) |
| 6 | 학습 (Learning) | Workday Learning (+Sana) | SF Learning (LMS) | 대칭 |
| 7 | 성과·목표 (Performance & Goals) | Workday Talent & Performance (번들 내) | SF Performance & Goals (별도 SKU) | ⚠ 비대칭 |
| 8 | 승계·경력개발 (Succession & Career Dev.) | Workday Succession · Career Hub · Talent Marketplace | SF Succession & Development · Opportunity Marketplace | 대칭 |
| 9 | 스킬 (Skills) | Workday Skills Cloud | Talent Intelligence Hub (Attributes Library · Growth Portfolio · Job Profile Builder) | 대칭, 설계 철학 상이 |
| 10 | 보상 (Compensation) | Workday Compensation · Advanced Compensation (번들 내) | SF Compensation · Variable Pay (각각 별도 SKU) | ⚠ 비대칭 |
| 11 | 복리후생 (Benefits) | Workday Benefits | EC Global Benefits | 대칭 |
| 12 | 인력분석 (Analytics) | Workday People Analytics · Prism Analytics · Adaptive Planning | SF People Analytics · Workforce Analytics (SAC) | 대칭 |
| 13 | 직원경험·HR서비스 (EX / HR Service) | Workday Help · Journeys · Workday Assistant | SF Work Zone · HR Service Delivery | 대칭 |
| 14 | AI 에이전트 (AI agents) | Workday Illuminate · Agent System of Record · Workday Build (Flowise) | Joule · Joule agents · Joule Studio | ⚠ 거버넌스 모델 상이 |
| 15 | 확장·통합 (Platform / Extensibility) | Workday Extend · Integrations · Workday Marketplace | SAP BTP · Extension Center · SAP Build · SAP Store | 대칭 |
| 16 | 강제변경·폐기 (Mandatory & deprecation) | 자동 적용 기능 (opt-out 불가) · 주간 서비스 업데이트 | End-of-maintenance / delete 날짜 고지 방식 | ⚠ 운영 모델 상이 |

## C. Row 16 is the money row

Workday's forced-change mechanism is *"automatically available features land in
your tenant the moment the release goes live, whether you asked for them or
not"* (partner-reported, [Zeneesha](https://zeneesha.com/workday-2026-r2-the-complete-release-guide/), T2).
SAP's is a **dated deletion notice** published months ahead.

Consulting consequence: Workday risk is concentrated in the **regression-test
window**; SAP risk is concentrated in the **remediation backlog before a named
date**. These need different governance, different budget shapes, and different
client conversations. Do not describe them with the same words.
