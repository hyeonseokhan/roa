const pkg = require('./package.json'); // CommonJS 형식으로 가져오기
const homepage = pkg.homepage;

module.exports = {
  plugins: {
    tailwindcss: {}, // 문자열 형태로 설정
    autoprefixer: {},
    'postcss-url': {
      url: (asset) => {
        return `${homepage}${asset.url}`; // homepage를 사용해 URL 생성
      },
    },
  },
};
