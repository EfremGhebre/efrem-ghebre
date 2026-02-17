const fs = require("fs/promises");
const path = require("path");

const sourcePath = path.join(__dirname, "..", "merits", "work-experience.json");

const splitDetails = (text) => {
  if (!text) return [];
  return text
    .split(" - ")
    .map((item) => item.replace(/^-+\s*/, "").trim())
    .filter(Boolean);
};

module.exports = async () => {
  const raw = await fs.readFile(sourcePath, "utf8");
  const data = JSON.parse(raw);
  const items = data.Arbetslivserfarenhet || [];

  return items.map((item) => ({
    title: item.title,
    date: item.date,
    company: item.company,
    details: splitDetails(item.description)
  }));
};
