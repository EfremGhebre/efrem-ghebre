module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "."
    }
  };
};
