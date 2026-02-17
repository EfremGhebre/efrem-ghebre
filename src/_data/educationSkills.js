const fs = require("fs/promises");
const path = require("path");

const sourcePath = path.join(__dirname, "..", "merits", "education-skills.json");

module.exports = async () => {
  const raw = await fs.readFile(sourcePath, "utf8");
  const data = JSON.parse(raw);

  return {
    education: data.Utbildning || [],
    courses: data.Kurser || []
  };
};
