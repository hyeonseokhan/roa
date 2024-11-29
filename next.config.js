/** @type {import('next').NextConfig} */
const { name } = require('./package.json');
const { NODE_ENV } = process.env;

module.exports = {
  basePath: NODE_ENV === 'prod' && name ? '/' + name || '' : '',
  assetPrefix: NODE_ENV === 'prod' && name ? '/' + name || '' : '',
  trailingSlash: true,
  output: 'export',
  distDir: 'docs',
};