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
  const mailto = `mailto:${CONTACT_EMAIL}?subject=Adaptive%20Tutoring.ai%20Demo`;

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta
          name="description"
          content="Personalised tutoring with adaptive quizzes, instant feedback and targeted practice in Maths, English and Science."
        />
      </Head>

      {/* HERO */}
      <section className="hero" style={{ padding: '28px 0' }}>
        <header className="container" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <div
            style={{
              width: 44,
              height: 44,
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(135deg,var(--primary),var(--accent))',
              color: '#fff',
              fontWeight: 800,
              borderRadius: 12,
              boxShadow: '0 6px 18px rgba(37,99,235,.35)',
            }}
          >
            A
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, margin: 0 }}>{APP_NAME}</h1>
        </header>

        <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1.2fr 1fr', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 24, margin: '6px 0' }}>Personalised tutoring programmes for ages 8–15</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.7, maxWidth: 720 }}>
              Adaptive quizzes + instant feedback + bite-sized videos. We time each question,
              spot weak topics, and guide students step-by-step until mastery in
              <strong> Maths</strong>, <strong> English</strong> and <strong> Science</strong>.
            </p>

            <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={startLink} className="btn btn-primary" aria-label="Take a Quiz">
                Take a Quiz
              </a>
              <a href={startLink} className="btn btn-secondary" aria-label="Start practising">
                Start practising
              </a>
              <a href={DEMO_URL} target="_blank" rel="noreferrer" className="btn btn-ghost" aria-label="Book a demo">
                Book a demo
              </a>
            </div>

            <div className="chips" style={{ marginTop: 14 }}>
              <span className="chip">Maths</span>
              <span className="chip">English</span>
              <span className="chip">Science</span>
              <span className="chip">Ages 8–15</span>
            </div>
          </div>

          <div className="card" aria-hidden="true">
            <p style={{ margin: 0, fontWeight: 700 }}>Instant feedback</p>
            <p style={{ marginTop: 6, color: 'var(--muted)', fontSize: 14 }}>
              Correct answer, short explanation, and a learning video on every question.
            </p>
            <div
              style={{
                background: 'linear-gradient(180deg,rgba(139,92,246,.35),rgba(37,99,235,.2))',
                borderRadius: 12,
                height: 120,
                marginTop: 10,
              }}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container" style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>How it works</h3>
        <div className="grid-4">
          <Step n={1} title="Quick diagnostic" text="A short, timed set per subject finds level and topic gaps." />
          <Step n={2} title="Adaptive plan" text="We prioritise weak areas and use scaffolded hints to build mastery." />
          <Step n={3} title="Practice & feedback" text="Each MCQ shows the answer, a brief explanation, and a video." />
          <Step n={4} title="Progress tracking" text="We track accuracy & timing to know when to move on." />
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="container" style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>What we offer</h3>
        <div className="grid-3">
          <Offer
            title="Personalised programmes"
            bullets={[
              'Tailored per subject and age (8–15)',
              'Targets weak topics first',
              'Weekly plan with smart review',
            ]}
          />
          <Offer
            title="Adaptive practice"
            bullets={[
              'Timed questions with per-item timers',
              'Difficulty adjusts from your answers',
              'Hints + learning videos when needed',
            ]}
          />
          <Offer
            title="Clear progress"
            bullets={[
              'Topic accuracy & speed dashboards',
              'Parent/teacher-friendly summaries',
              'Exportable reports on request',
            ]}
          />
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="container" style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Why we’re different from a standard tutor</h3>
        <div className="grid-2" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
          <DiffCard
            title="Always-on, bite-sized practice"
            points={['Short daily sets keep momentum', 'No waiting a week for next help', 'Instant corrections prevent fossilised errors']}
          />
          <DiffCard
            title="Data-driven, objective progress"
            points={['Per-question timing to track fluency', 'Pinpoint weak sub-skills (e.g. fractions vs decimals)', 'Move on only when secure']}
          />
        </div>
      </section>

      {/* WHAT THE SYSTEM DOES */}
      <section className="container" style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>What the system does for you</h3>
        <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--muted)', lineHeight: 1.8 }}>
          <li>Runs <strong>time checks</strong> per question to build fluency, not just accuracy.</li>
          <li>Detects <strong>weak topics</strong> automatically and assigns staged practice.</li>
          <li>Provides <strong>step-by-step hints</strong> and a <strong>learning video</strong> for tricky items.</li>
          <li>Re-tests after learning to confirm mastery before moving on.</li>
          <li>Summarises <strong>accuracy, speed, and topic coverage</strong> for parents/teachers.</li>
        </ul>
      </section>

      {/* CTA ROW */}
      <section className="container" style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href={startLink} className="btn btn-primary">Take a Quiz</a>
        <a href={startLink} className="btn btn-secondary">Try a practice set</a>
        <a href={DEMO_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">Book a live demo</a>
        <a href={mailto} className="btn btn-ghost">Email us</a>
      </section>

      {/* BOOK A DEMO FOOTER */}
      <footer className="container" style={{ marginTop: 40 }}>
        <div className="card" style={{ display: 'grid', gap: 12 }}>
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>Book a demo</h4>
          <p style={{ margin: 0, color: 'var(--muted)' }}>
            See the dashboard, try the adaptive quiz flow, and get recommendations for your child or class.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={DEMO_URL} target="_blank" rel="noreferrer" className="btn btn-primary">Schedule on Calendly</a>
            <a href={mailto} className="btn btn-ghost">Email {CONTACT_EMAIL}</a>
          </div>
        </div>
        <div style={{ height: 24 }} />
      </footer>
    </>
  );
}

/* ---------- Small presentational helpers ---------- */
function Step({ n, title, text }) {
  return (
    <div className="card">
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: 'var(--primary)',
          color: '#fff',
          display: 'grid',
          placeItems: 'center',
          fontWeight: 800,
          marginBottom: 8,
        }}
      >
        {n}
      </div>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ color: 'var(--muted)', marginTop: 6, fontSize: 14 }}>{text}</div>
    </div>
  );
}

function Offer({ title, bullets }) {
  return (
    <div className="card">
      <div style={{ fontWeight: 700 }}>{title}</div>
      <ul style={{ margin: '8px 0 0 18px', color: 'var(--muted)', lineHeight: 1.8 }}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function DiffCard({ title, points }) {
  return (
    <div className="card">
      <div style={{ fontWeight: 700 }}>{title}</div>
      <ul style={{ margin: '8px 0 0 18px', color: 'var(--muted)', lineHeight: 1.8 }}>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
