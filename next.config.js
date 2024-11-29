/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const { homepage } = require('./package.json');
const { NODE_ENV } = process.env;

module.exports = withImages({
  basePath:
    NODE_ENV === 'prod' && homepage
      ? new URL(homepage).pathname.replace(/\/$/, '') || ''
      : '',
  output: 'export',
  distDir: 'docs',
});