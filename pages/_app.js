
// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';

const NAME =
  process.env.NEXT_PUBLIC_APP_NAME || 'Adaptive Tutoring.ai';
const DESC =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'Adaptive Tutoring.ai – personalised learning in Maths, English and Science.';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{NAME}</title>
        <meta name="description" content={DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Simple site-wide navigation */}
      <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <nav
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <a href="/" style={{ fontWeight: 800, textDecoration: 'none', color: '#111827' }}>
            {NAME}
          </a>
          <a href="/quiz?age=10&subject=Maths" style={{ color: '#2563EB', textDecoration: 'none' }}>
            Try a Quiz
          </a>
        </nav>
      </div>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
