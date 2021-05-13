
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  future: {
    webpack5: true,
  },
  images: {
  loader: 'cloudinary'
  },
  assetPrefix: !debug ? '/SSZ-SimpleSerialize' : '',

}
