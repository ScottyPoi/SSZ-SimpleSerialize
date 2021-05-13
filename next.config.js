const images = require('remark-images')
const emoji = require('remark-emoji')
const toc = require('remark-toc');
const gfm = require('remark-gfm');
const slug = require('remark-slug')
const withWorkers = require('@zeit/next-workers')



const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji, toc, gfm, slug]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})

module.exports = {
  future: {
    webpack5: true,
  },
}

// module.exports = withWorkers(
// )