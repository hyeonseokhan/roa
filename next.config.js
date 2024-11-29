/** @type {import('next').NextConfig} */
const { homepage } = require('./package.json');
const { NODE_ENV } = process.env;

module.exports = {
  basePath:
    NODE_ENV === 'prod' && homepage
      ? new URL(homepage).pathname.replace(/\/$/, '') || ''
      : '',
  output: 'export',
  distDir: 'docs',
};
