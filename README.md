# HCM Release Radar

Workday HCM과 SAP SuccessFactors의 **반기 릴리스를 추적·비교하는 나만의 에이전트**와, 그 첫 실행 산출물.

## 왜 에이전트인가

두 벤더는 모두 연 2회 릴리스하지만 **분기가 어긋나고, 문서 공개 정책이 반대이며, 패키징 논리도 반대**입니다. 반기마다 이 구조를 처음부터 재구성하면 비싼 작업(판단)이 싼 작업(수집)에 묻힙니다. 이 레포는 수집 절차·증거 규율·대칭 프레임을 고정해 두고, 매 반기 판단에만 집중하기 위한 것입니다.

## 구성

```
.claude/
  agents/hcm-release-radar.md              # 서브에이전트 정의 (Agent 툴로 호출)
  skills/hcm-release-radar/
    SKILL.md                               # 실행 절차 (/hcm-release-radar)
    references/
      evidence-protocol.md                 # 출처 티어 · 날조 방지 규칙 · 비대칭 규칙
      source-registry.md                   # 1차 출처 레지스트리 (SAP 9건 / Workday 7건)
      module-crosswalk.md                  # Workday↔SFSF 기능·SKU 대칭 스파인 (16행)
      output-template.md                   # 산출물 템플릿 (9개 섹션)
      korea-advisory-plays.md              # 한국 고객 활용안 작성 규칙
output/
  2026-09-16_workday-2026R2_vs_sfsf-2H2026.md   # 첫 실행 산출물
```

## 사용법

```
/hcm-release-radar                     # 스킬로 절차 실행
```
또는 서브에이전트로:
```
Agent(subagent_type="hcm-release-radar",
      prompt="2026H2 wave 갱신: SFSF 2H 2026 preview 반영")
```

## 설계 원칙

이 에이전트는 **제안서에 들어갈 사실을 만듭니다.** 따라서 기능을 하나 빠뜨리는 것보다 **없는 기능을 하나 지어내는 것이 치명적**입니다. 세 가지 규율로 이를 강제합니다.

1. **티어 태깅** — 모든 사실 라인에 출처 티어(T1 벤더 / T2 파트너 / T3 미디어)와 URL. 날짜는 T1 또는 독립 T2 2건 일치일 때만 단정.
2. **Tier-1-or-silence** — 근거가 없으면 벤더 마케팅 문구로 칸을 채우지 않고 `문서 비공개 / 미확인`으로 둡니다.
3. **비대칭 규칙** — Workday는 릴리스 노트가 로그인 게이트, SAP는 공개. **공개 자료의 양 차이를 제품력 차이로 서술하지 않습니다.** 매 산출물에 명시.

컨설턴트 해석은 전부 `[가설]`로 표시하고, **선행조건과 반증 테스트**를 함께 답니다. 가설을 벤더 주장으로 세탁하지 않기 위한 장치입니다.

## 첫 실행 요약 (2026-09-16)

- **Workday 2026R2** production 2026-09-19 (D-3) / **SFSF 2H 2026** preview 2026-10-12, production 2026-11-13
- **2026-11-13에 SAP 리스크 3건이 겹칩니다** — 2H production + Legacy Home Page 삭제 + Legacy People Profile 구성 API 삭제
- **SF Recruiting → SmartRecruiters** 전환 경로 개시 (sunset 일자 없음, 전환 창 3~5년)
- 스킬 철학이 정반대 — Workday Skills Cloud는 *"유지보수 없이 ML이 채운다"*, SAP TIH는 *"AI 추론 스킬도 승인 절차를 거친다"*
- 한국 고객 활용안 8건 + **미확인 항목 11건**을 명시

전문: [`output/2026-09-16_workday-2026R2_vs_sfsf-2H2026.md`](output/2026-09-16_workday-2026R2_vs_sfsf-2H2026.md)

## 알려진 제약

- 첫 실행 환경에서 egress 정책상 벤더 도메인 직접 열람(`WebFetch`)이 전부 차단되어, 모든 근거를 **검색 요약**으로 수집했습니다. 해당 라운드의 T1은 `T1*`로 강등 표기했습니다.
- 사용자의 실제 과거 대화 기록에는 접근할 수 없어, 한국 활용안의 고객 맥락은 워크스페이스에 영속화된 `cj-neo` 계열 스킬에서 **대용(proxy)**으로 도출했습니다. 산출물 §8에 명시되어 있습니다.
