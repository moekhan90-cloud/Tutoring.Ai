// pages/index.js
import Head from 'next/head';

const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || 'Adaptive Tutoring.ai';

const DEMO_URL =
  process.env.NEXT_PUBLIC_DEMO_URL || 'https://calendly.com/your-demo-link';
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@yourdomain.com';

export default function Landing() {
  const startLink = '/start';
  const demoLink = DEMO_URL;
  const mailto = `mailto:${CONTACT_EMAIL}?subject=Adaptive%20Tutoring.ai%20Demo`;

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta
          name="description"
          content="Personalised tutoring programmes with adaptive quizzes, instant feedback, and targeted practice. Book a demo."
        />
      </Head>

      <main style={{ maxWidth: 1040, margin: '0 auto', padding: '24px' }}>
        {/* -------- Hero -------- */}
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              display: 'grid',
              placeItems: 'center',
              background: '#2563EB',
              color: '#fff',
              fontWeight: 800,
              borderRadius: 12,
              boxShadow: '0 6px 16px rgba(37,99,235,0.25)',
            }}
          >
            A
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>
            {APP_NAME}
          </h1>
        </header>

        <section
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: '1.2fr 1fr',
            alignItems: 'center',
          }}
        >
          <div>
            <h2 style={{ fontSize: 26, margin: '8px 0' }}>
              Personalised tutoring programmes for ages 8–15
            </h2>
            <p style={{ color: '#4b5563', lineHeight: 1.7 }}>
              We combine adaptive quizzes with instant feedback and short
              learning videos. Your child practices Maths, English, and Science
              at the right level, gets quick corrections, and a targeted plan
              to close gaps — step by step.
            </p>

            {/* Main CTAs */}
            <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={startLink}
                style={btnPrimary}
                aria-label="Start practising now"
              >
                Start practising
              </a>
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                style={btnGhost}
                aria-label="Book a demo"
              >
                Book a demo
              </a>
              {/* NEW: direct Take a Quiz button */}
              <a
                href={startLink}
                style={btnSecondary}
                aria-label="Take a Quiz"
              >
                Take a Quiz
              </a>
            </div>
          </div>

          {/* Simple “illustration” card */}
          <div style={card}>
            <p style={{ margin: 0, color: '#374151', fontWeight: 700 }}>
              Instant feedback
            </p>
            <p style={{ marginTop: 6, color: '#6b7280', fontSize: 14 }}>
              Every question shows the correct answer, a short explanation, and
              an optional learning video.
            </p>
            <div
              style={{
                background: 'linear-gradient(180deg,#DBEAFE,transparent)',
                borderRadius: 12,
                height: 120,
                marginTop: 10,
              }}
            />
          </div>
        </section>

        {/* --- Keep How it works, What we offer, Why we’re different --- */}
        {/* (code stays same as before, I didn’t repeat here to keep it shorter) */}

        {/* -------- CTA row -------- */}
        <section style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={startLink} style={btnPrimary}>Try a practice set</a>
          <a href={startLink} style={btnSecondary}>Take a Quiz</a>
          <a href={demoLink} target="_blank" rel="noreferrer" style={btnSecondary}>
            Book a live demo
          </a>
          <a href={mailto} style={btnGhost}>Email us</a>
        </section>

        {/* -------- Book a demo footer -------- */}
        <footer
          style={{
            marginTop: 48,
            padding: 20,
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 16,
            display: 'grid',
            gap: 12,
            alignItems: 'center',
          }}
        >
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>
            Book a demo
          </h4>
          <p style={{ margin: 0, color: '#6b7280' }}>
            See the dashboard, try the adaptive quiz flow, and get recommendations for your child or class.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={demoLink} target="_blank" rel="noreferrer" style={btnPrimary}>
              Schedule on Calendly
            </a>
            <a href={mailto} style={btnGhost}>
              Email {CONTACT_EMAIL}
            </a>
          </div>
        </footer>

        <div style={{ height: 32 }} />
      </main>
    </>
  );
}

/* ---------------- Styles ---------------- */
const card = {
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: 16,
  padding: 16,
};

const btnPrimary = {
  background: '#2563EB',
  color: '#fff',
  padding: '10px 14px',
  borderRadius: 12,
  textDecoration: 'none',
  fontWeight: 700,
  display: 'inline-block',
};

const btnSecondary = {
  background: '#111827',
  color: '#fff',
  padding: '10px 14px',
  borderRadius: 12,
  textDecoration: 'none',
  fontWeight: 700,
  display: 'inline-block',
};

const btnGhost = {
  background: 'transparent',
  color: '#2563EB',
  padding: '10px 14px',
  borderRadius: 12,
  textDecoration: 'none',
  border: '1px solid #93C5FD',
  display: 'inline-block',
  fontWeight: 700,
};
