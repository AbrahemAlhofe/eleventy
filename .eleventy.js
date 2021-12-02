const inspect = require("util").inspect
module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  eleventyConfig.addNunjucksFilter("category", (books, { index }) => books.filter(book => book.category === index));

  eleventyConfig.addPassthroughCopy("images/**/*.jpg");

};