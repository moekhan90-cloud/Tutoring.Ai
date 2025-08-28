// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css'; // keep if you already have Tailwind/global CSS

function MyApp({ Component, pageProps }) {
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Adaptive Tutoring.ai';
  const APP_DESC =
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    'Adaptive Tutoring.ai – personalised learning in Maths, English and Science.';

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Optional: Open Graph / Social */}
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESC} />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
