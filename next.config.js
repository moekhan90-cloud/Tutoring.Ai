// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Public env vars (available in browser)
  env: {
    NEXT_PUBLIC_APP_NAME: 'Adaptive Tutoring.ai',
    NEXT_PUBLIC_APP_DESCRIPTION:
      'Adaptive Tutoring.ai – personalised learning in Maths, English and Science.',
  },
  // If you use the "@/..." alias elsewhere, uncomment paths by adding a jsconfig.json
  // (see note below).
};

module.exports = nextConfig;
