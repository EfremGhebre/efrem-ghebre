require("dotenv").config();
const fs = require("fs/promises");
const path = require("path");

const cacheDir = path.join(__dirname, "..", "..", ".cache");
const cachePath = path.join(cacheDir, "github-repos.json");

const fetchJson = async (url) => {
  const headers = { Accept: "application/vnd.github+json" };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }

  return response.json();
};

const loadCache = async () => {
  try {
    const file = await fs.readFile(cachePath, "utf8");
    return JSON.parse(file);
  } catch (error) {
    return [];
  }
};

const saveCache = async (data) => {
  try {
    await fs.mkdir(cacheDir, { recursive: true });
    await fs.writeFile(cachePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    // Ignore cache write errors to avoid build failure.
  }
};

module.exports = async () => {
  const user = "EfremGhebre";
  const reposUrl = `https://api.github.com/users/${user}/repos?per_page=100`;

  try {
    const repos = await fetchJson(reposUrl);
    const sorted = repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

    const withLanguages = await Promise.all(
      sorted.map(async (repo) => {
        let languages = [];
        try {
          const languageData = await fetchJson(repo.languages_url);
          languages = Object.keys(languageData);
        } catch (error) {
          languages = repo.language ? [repo.language] : [];
        }

        return {
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          languages,
          stars: repo.stargazers_count ?? 0,
          forks: repo.forks_count ?? 0
        };
      })
    );

    await saveCache(withLanguages);
    return withLanguages;
  } catch (error) {
    return loadCache();
  }
};
