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

---

## HCM Release Atlas (대시보드)

2021–2026년 두 벤더의 릴리스 이력을 SKU·기능영역 축으로 정렬한 인터랙티브 대시보드.

```
data/hcm-timeline-2021-2026.json   # 마일스톤 56건 (vendor, wave, date, sku, EN, KO, tier, source)
data/insights-ko.json              # 도출 인사이트 7건 + 한국 HR Practice Benefit/Consideration 7개 테마
dashboard/template.html            # 템플릿 (데이터 주입 자리 표시자 포함)
dashboard/index.html               # 빌드 산출물 — 발행 대상
scripts/build-dashboard.js         # 데이터 주입 + 무결성 검사
```

갱신 절차 — **JSON만 고치고 다시 빌드**하면 페이지와 데이터가 어긋나지 않습니다.

```bash
node scripts/build-dashboard.js
```

빌드 스크립트는 다음을 검사하고, 하나라도 걸리면 **발행 대신 실패**합니다.

- 마일스톤 ID 중복
- 필수 필드 누락 (`v` · `wave` · `date` · `sku` · `tier` · `en` · `ko` · `src` · `srcName` · `label`)
- 정의되지 않은 SKU 키 / 벤더 코드
- 출처가 URL 형식이 아닌 항목
- 2021–2026 창을 벗어난 일자
- 인사이트의 `evidence`가 가리키는 마일스톤 부재

### 대시보드가 담은 것

| 섹션 | 내용 |
|---|---|
| 01 릴리스 리듬 | 12개 반기 축에 두 벤더의 production 시점 배치. **속이 찬 표식 = 일자 확인, 속이 빈 표식 = 반기만 확인** |
| 02 시점 × SKU 매트릭스 | 14개 기능영역 × 6년. 항목 클릭 시 영어 원문 · 한글 해설 · SKU · 출처 표시. 벤더·태그·키워드 필터 |
| 03 인사이트 | 6년 이력에서 도출한 7건. 각 인사이트의 `근거` 버튼이 해당 마일스톤을 매트릭스에서 열어줌 |
| 04 한국 HR Practice | 7개 테마별 Benefit / Consideration |
| 05 방법론과 한계 | 출처 등급, 문서 접근성 비대칭 고지, 수집 환경 제약, 남은 공백 5건 |

### 데이터 규율

- **마일스톤 수는 벤더의 출시량이 아닙니다.** 두 벤더 모두 반기마다 250여 건을 내놓으며, 이 데이터셋은 구조·전략을 바꾼 변화만 선별 수록합니다. Workday 항목이 적은 것은 릴리스 노트가 Community 로그인 뒤에 있기 때문이며, 대시보드 §05에 이 점을 명시했습니다.
- 벤더 자체 주장 수치(예: Recruiting Agent의 70% · 55%)는 **주장치임을 본문에 표기**합니다.
- 출처가 충돌하는 값(예: ECP 지원 국가 수 50 / 53 / 60)은 **확정하지 않고 충돌 사실을 남깁니다**.
