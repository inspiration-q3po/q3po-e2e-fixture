const fs = require("fs");
const path = require("path");

const css = fs.readFileSync(path.join(__dirname, "site", "theme.css"), "utf8");
const accent = /--accent:\s*(#[0-9a-fA-F]{6});/.exec(css);
if (!accent) {
  console.error("site/theme.css must declare --accent as a 6-digit hex color, e.g. --accent: #3366cc;");
  process.exit(1);
}
const opens = (css.match(/\{/g) || []).length;
const closes = (css.match(/\}/g) || []).length;
if (opens !== closes) {
  console.error(`site/theme.css has ${opens} "{" but ${closes} "}"`);
  process.exit(1);
}
console.log(`ok: --accent is ${accent[1]}`);
