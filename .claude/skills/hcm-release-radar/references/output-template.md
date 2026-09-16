# Output Template

File: `output/YYYY-MM-DD_<wave-slug>.md`

---

## 0. 한 장 요약 (Executive summary)

Five bullets maximum. Each one must be a *decision*, not a *fact*. If a bullet
survives with the vendor names swapped, delete it.

## 1. 방법론 및 신뢰도 (Methodology & confidence)

- Wave definition, research date, tools available/blocked.
- The §4 asymmetry statement from `evidence-protocol.md`, stated plainly.
- Tier downgrades applied this run.

## 2. 릴리스 캘린더 (Release calendar)

| Vendor | Documentation | Preview | Production | 비고 |
|---|---|---|---|---|

Follow with the **phase-gap reading**: what the out-of-phase calendar costs a
client running both.

## 3. 로드맵 특이사항 (Roadmap notables)

Numbered. Each one: what changed · why it is not obvious · what it forces the
client to decide · source + tier.

## 4. SKU / 패키징 대칭 (SKU & packaging symmetry)

From `module-crosswalk.md` §A. Mark `⚠ 비대칭` rows.

## 5. 기능영역별 대칭 비교 (Module-by-module)

One block per functional area, in crosswalk row order:

### N. 기능영역 (Functional area)

| | Workday `<wave>` | SAP SuccessFactors `<wave>` |
|---|---|---|
| Status | `SHIPPED`/`PLANNED`/`미확인` | |
| **EN (source wording)** | | |
| **KO (해설)** | | |
| Source | URL · Tier | URL · Tier |

KO is the consulting reading, not a translation.

## 6. 폐기·강제변경 일정 (Deprecations & forced changes)

| Date | Vendor | What | Impact | Source |
|---|---|---|---|---|

Sorted by date ascending. This table is the one clients screenshot.

## 7. 열람 가능한 자료 (Openable assets)

| Asset | Vendor | Type | Access | Link |
|---|---|---|---|---|

Mark each as 공개 / 로그인 필요 (S-User, Workday Community) / 등록 필요.
A link a client cannot open is worse than no link — it costs them a click and
their trust.

## 8. 한국 고객 활용 방안 (Korean adoption plays)

Per `korea-advisory-plays.md`. Every play labelled `[가설]`.

## 9. 미확인 항목 (Open gaps)

| Question | Why it matters | How to close it |
|---|---|---|

Never omit this section. An empty gap list means the research was not honest.
