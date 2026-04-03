const fs = require("fs/promises");
const path = require("path");

const sourcePath = path.join(__dirname, "..", "merits", "work-experience.json");

module.exports = async () => {
  const raw = await fs.readFile(sourcePath, "utf8");
  const data = JSON.parse(raw);

  return {
    workExperienceSv: Array.isArray(data.workExperienceSv) ? data.workExperienceSv : [],
    workExperienceEn: Array.isArray(data.workExperienceEn) ? data.workExperienceEn : []
  };
};
