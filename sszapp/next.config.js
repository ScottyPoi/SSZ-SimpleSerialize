const images = require('remark-images')
const emoji = require('remark-emoji')
const toc = require('remark-toc');
const gfm = require('remark-gfm');
const slug = require('remark-slug')
const sass = require("sass");
const Fiber = require("fibers");

sass.render({
  file: "input.scss",
  importer: function(url, prev, done) {
    // ...
  },
  fiber: Fiber
}, function(err, result) {
  // ...
});



const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji, toc, gfm, slug]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
