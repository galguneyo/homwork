#!/usr/bin/env node
/**
 * Build the HCM Release Atlas dashboard.
 *
 * Injects data/*.json into dashboard/template.html and writes dashboard/index.html.
 * Run after every dataset update so the published page and the repo data never drift.
 *
 *   node scripts/build-dashboard.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, p), "utf8");

const timeline = JSON.parse(read("data/hcm-timeline-2021-2026.json"));
const insights = JSON.parse(read("data/insights-ko.json"));

// --- integrity checks: fail the build rather than publish a broken page ---
const problems = [];
const skuKeys = new Set(timeline.skus.map(s => s.key));
const ids = new Set();
for (const m of timeline.milestones) {
  if (ids.has(m.id)) problems.push(`duplicate milestone id: ${m.id}`);
  ids.add(m.id);
  for (const f of ["v", "wave", "date", "sku", "tier", "en", "ko", "src", "srcName", "label"]) {
    if (!m[f]) problems.push(`${m.id}: missing ${f}`);
  }
  if (!skuKeys.has(m.sku)) problems.push(`${m.id}: unknown sku "${m.sku}"`);
  if (!timeline.releaseWaves.some(w => w.v === m.v && w.year === +String(m.date).slice(0,4)))
    problems.push(`${m.id}: year ${String(m.date).slice(0,4)} has no release wave for ${m.v} — extend releaseWaves`);
  if (!["wd", "sf"].includes(m.v)) problems.push(`${m.id}: unknown vendor "${m.v}"`);
  if (!/^https?:\/\//.test(m.src || "")) problems.push(`${m.id}: source is not a URL`);
  const y = +String(m.date).slice(0, 4);
  // open-ended on purpose: the atlas keeps growing past 2026
  const maxYear = new Date().getUTCFullYear() + 2;
  if (!(y >= 2021 && y <= maxYear)) problems.push(`${m.id}: date ${m.date} outside 2021–${maxYear}`);
}
for (const i of insights.insights) {
  for (const e of i.evidence) {
    if (!ids.has(e)) problems.push(`insight ${i.n}: evidence "${e}" has no matching milestone`);
  }
}
if (problems.length) {
  console.error("Build failed — dataset problems:\n  " + problems.join("\n  "));
  process.exit(1);
}

let html = read("dashboard/template.html");
const before = html.length;
html = html
  .replace("/*__TIMELINE__*/null", JSON.stringify(timeline))
  .replace("/*__INSIGHTS__*/null", JSON.stringify(insights));
if (html.length === before) {
  console.error("Build failed — injection placeholders not found in template.");
  process.exit(1);
}

fs.writeFileSync(path.join(root, "dashboard/index.html"), html);
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`built dashboard/index.html — ${timeline.milestones.length} milestones, ` +
            `${insights.insights.length} insights, ${insights.practice.length} practice themes, ${kb} KB`);
