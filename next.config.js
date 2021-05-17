const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  future: {
    webpack5: true,
  },
  images: {
  loader: 'cloudinary',
  path: 'http://res.cloudinary.com/ssz'
  },
  assetPrefix: ghPages ? '/SSZ-SimpleSerialize' : ''

}
