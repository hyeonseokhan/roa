const pkg = require('./package.json');
const homepage = pkg.homepage;

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-url': {
      url: (asset) => {
        return `${homepage}${asset.url}`;
      },
    },
  },
};
