const fs = require("fs/promises");
const path = require("path");

const sourcePath = path.join(__dirname, "..", "merits", "work-experience.json");

// Backward-compatible parser:
// - New format: { workExperience: [{ title, company, location, period, highlights: [] }, ...] }
// - Old format: { Arbetslivserfarenhet: [{ title, date, company, description }, ...] }
const splitDetailsLegacy = (text) => {
  if (!text) return [];
  return text
    .split(" - ")
    .map((item) => item.replace(/^-+\s*/, "").trim())
    .filter(Boolean);
};

module.exports = async () => {
  const raw = await fs.readFile(sourcePath, "utf8");
  const data = JSON.parse(raw);

  // NEW format
  if (Array.isArray(data.workExperience)) {
    return data.workExperience.map((item) => ({
      title: item.title ?? "",
      period: item.period ?? "",
      date: item.period ?? "",
      company: item.company ?? "",
      location: item.location ?? "",
      details: Array.isArray(item.highlights) ? item.highlights.filter(Boolean) : [],
    }));
  }

  // OLD format fallback
  const items = Array.isArray(data.Arbetslivserfarenhet) ? data.Arbetslivserfarenhet : [];

  return items.map((item) => ({
    title: item.title ?? "",
    period: item.date ?? "",
    date: item.date ?? "",
    company: item.company ?? "",
    location: "", // old data stores location inside company string sometimes
    details: splitDetailsLegacy(item.description),
  }));
};
