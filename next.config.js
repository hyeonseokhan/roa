/** @type {import('next').NextConfig} */
const { homepage } = require('./package.json');
const { NODE_ENV } = process.env;

const basePath =
    NODE_ENV === 'prod' && homepage
        ? new URL(homepage).pathname.replace(/\/$/, '') || ''
        : '';

console.log(`[Next.js Config] basePath and assetPrefix are set to: '${basePath}'`);

module.exports = {
  basePath: basePath,
  output: 'export',
  distDir: 'docs',
};
