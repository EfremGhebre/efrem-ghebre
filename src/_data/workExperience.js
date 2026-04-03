const fs = require("fs/promises");
const path = require("path");

const sourcePath = path.join(__dirname, "..", "merits", "work-experience.json");

// Backward-compatible parser:
// - Current format: { workExperienceSv: [...], workExperienceEn: [...] }
// - Previous format: { workExperience: [{ title, company, location, period, highlights: [] }, ...] }
// - Legacy format: { Arbetslivserfarenhet: [{ title, date, company, description }, ...] }
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

  // CURRENT format (prefer Swedish set for site timeline)
  if (Array.isArray(data.workExperienceSv)) {
    return data.workExperienceSv.map((item) => ({
      title: item.title ?? "",
      period: item.period ?? "",
      date: item.period ?? "",
      company: item.company ?? "",
      location: item.location ?? "",
      details: Array.isArray(item.highlights) ? item.highlights.filter(Boolean) : [],
    }));
  }

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
