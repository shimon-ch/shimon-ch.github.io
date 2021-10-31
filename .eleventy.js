const prettier = require("prettier");
let prettierOptions;

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("formatHTML", async (content, outputPath) => {
    if (outputPath?.endsWith(".html")) {
      if (!prettierOptions) {
        prettierOptions = await prettier.resolveConfig("test.html", {
          editorconfig: true,
        });
      }

      return prettier.format(content, {
        ...prettierOptions,
        parser: "html",
      });
    }

    return content;
  });

  eleventyConfig.setBrowserSyncConfig({
    server: null, // override
    proxy: "localhost:3000",
    serveStatic: [
      {
        dir: "dist",
      },
    ],
    ui: false,
    ghostMode: false,
  });

  return {
    dir: {
      input: "src/site/pages",
      includes: "../includes",
      layouts: "../layouts",
      data: "../data",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
