// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_APP_NAME: 'Adaptive Tutoring.ai',
    NEXT_PUBLIC_APP_DESCRIPTION:
      'Adaptive Tutoring.ai – personalised learning in Maths, English and Science.',
  },
  async redirects() {
    return []; // ⛔️ no automatic redirect from "/" to "/quiz"
  },
};

module.exports = nextConfig;
