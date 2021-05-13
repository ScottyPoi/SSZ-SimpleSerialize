const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  future: {
    webpack5: true,
  },
  images: {
  loader: 'cloudinary'
  },
  assetPrefix: ghPages ? '/SSZ-SimpleSerialize' : ''

}
