const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

const withMDX = require("@next/mdx") ({
  extension: /\.mdx$/
});

module.exports = [
  withMDX(
  {
    output: ghPages ? "export" : undefined,
    pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
    images: {
      loader: "cloudinary",
      path: "http://res.cloudinary.com/ssz",
    },
    assetPrefix: ghPages ? "/SSZ-SimpleSerialize" : "",
  },
  )
];
