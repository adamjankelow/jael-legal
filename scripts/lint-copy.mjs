import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["content", "src"];
const patterns = [
  { re: /\$\s?\d/, msg: "dollar amount" },
  { re: /₪/, msg: "shekel sign" },
  { re: /\bNIS\b/, msg: "NIS" },
  { re: /\bfees?\b/i, msg: "fee" },
  { re: /\bdiscounts?\s+(?:rate|fee|price|offer)/i, msg: "promotional discount" },
  { re: /\bguarante(?:e|ed|es)\b/i, msg: "guarantee" },
  { re: /\bbest\b/i, msg: "best" },
  { re: /\bpremier\b/i, msg: "premier" },
  { re: /\btestimonials?\b/i, msg: "testimonial" },
  { re: /\bworld-class\b/i, msg: "world-class" },
  { re: /\bleading\b/i, msg: "leading" },
  { re: /#1\b/, msg: "#1" },
  { re: /\bclients include\b/i, msg: "clients include" },
  { re: /\bour clients\b/i, msg: "our clients" },
  { re: /\btop-tier\b/i, msg: "top-tier" },
  { re: /\bunmatched\b/i, msg: "unmatched" },
  { re: /\bstarting from\b/i, msg: "starting from" },
  { re: /\bfree consultation\b/i, msg: "free consultation" },
];

function filesIn(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) out.push(...filesIn(path));
    else if (/\.(astro|ts|css|mjs|svg|yml)$/.test(entry)) out.push(path);
  }
  return out;
}

const problems = [];
for (const root of roots) {
  for (const file of filesIn(root)) {
    const text = readFileSync(file, "utf8");
    for (const { re, msg } of patterns) {
      if (re.test(text)) problems.push(`${file}: found “${msg}”`);
    }
  }
}

if (problems.length) {
  console.error("Copy lint failed. The public site cannot contain these:");
  for (const line of problems) console.error(`  ${line}`);
  process.exit(1);
}

console.log("Copy lint passed.");
