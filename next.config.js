const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,  // Adicione essa linha
  reactStrictMode: true,
}

module.exports = nextConfig;
