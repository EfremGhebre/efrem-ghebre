module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/resume/cv.css");
  eleventyConfig.addPassthroughCopy("src/resume/my_pic.jpg");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    },
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
