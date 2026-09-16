# Korean Adoption Plays — Construction Rules

## Client context carried forward

Derived from the standing CJ Project NEO context skills available in this
workspace (`cj-neo`, `cj-neo-context`), which encode the user's prior
engagement work rather than any single conversation:

- **Architecture baseline**: SAP SuccessFactors **single instance**, SAP Japan
  (Tokyo) data centre assumption.
- **Scope**: CJ Group and affiliates; Schwan's (US) as a Level-2 sub-context with
  local practice, US law/CPRA, and ADP/UKG in play.
- **Design constructs**: universal band · single talent view · HR backbone ·
  operating-model standardisation.
- **Method**: divergence level and deployment priority kept as **independent
  axes**; two-stage determination (2단계 판정 절차).
- **Terminology v2**: 운영 영역 · 2단계 판정 절차 · 기준 정보 · SF 표준 기능.
- **Guardrails**: verified workshop numbers only; CJ decisions are client-owned;
  the consultant's posture is advisory / functional / architectural.

> When the user's own conversation history or project files are available,
> re-derive this section from them and note the source. The list above is a
> *proxy* built from persisted skill context, and must be labelled as such in
> any output.

## Play construction

Every play is five fields. A play missing any field is not shipped.

| Field | Rule |
|---|---|
| **트리거 기능** | The specific release item, with its status tag and source. No feature, no play. |
| **한국 맥락** | Korean labour law, 노무 practice, 개인정보보호법, language, or group-structure reason this matters *here* and not generically. |
| **선행조건** | What must already be true. Usually RBP design, 기준 정보 정비, or a completed 2단계 판정. |
| **리스크** | What breaks if the play is run without the precondition. |
| **반증 테스트** | The cheapest question or test that would prove the play wrong. |

## Standing Korea-specific lenses

1. **급여 로컬라이제이션** — ECP carries native Korean payroll; Workday does not
   and routes Korea through partners. For a Korean-HQ group this is usually
   decisive, and it should be stated as a *fact about coverage*, never as a
   verdict about product quality.
2. **데이터 국외이전** — a Tokyo DC assumption plus conversational AI over
   workforce data raises 개인정보보호법 cross-border transfer and consent-notice
   questions. Any AI-agent play inherits this precondition.
3. **단일 인스턴스 = 동시 영향** — on a single instance, a vendor deletion date
   hits every affiliate on the same day. Deprecation dates are therefore
   group-level governance events, not module-team tasks.
4. **근속 기반 인사제도** — Korean 연차/가산연차, 육아휴직, and 정년 rules turn
   tenure-calculation features into compliance features. Flag any release item
   touching tenure or absence accrual.
5. **계열사 divergence** — read every new configuration capability against
   whether it *reduces* divergence (good: 기준 정보 standardisation) or *enables*
   it (risky: per-affiliate templates that entrench local practice).

## Hard rules

- A play is a **hypothesis**, prefixed `[가설]`. It is never written in the voice
  of a vendor commitment.
- Never attach a workshop number, a percentage, or an affiliate count to a play
  unless it comes from the verified workshop baseline. Approximation is
  prohibited by the standing project guardrails.
- Schwan's plays separate **확인된 사실 / 작업 가설 / 확인 질문**.
- The client decides. Plays are framed as options with preconditions, not as
  recommendations to adopt on the vendor's schedule.
