// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adaptive Tutoring.ai — Personalised practice & insights</title>
        <meta name="description" content="Timed MCQs with instant feedback, topic insights, and personalised video assignments for ages 8–15." />
      </Head>

      {/* Hero */}
      <section className="container" style={{ paddingTop: 24 }}>
        <div className="card" style={{ padding: 28 }}>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1.2fr .8fr' }}>
            <div>
              <div className="badge" style={{ marginBottom: 10, width: 44, height: 44, fontSize: 18 }}>A</div>
              <h1 style={{ margin: 0, fontSize: 44, lineHeight: 1.1 }}>
                Adaptive Tutoring.ai
              </h1>
              <p style={{ color: 'var(--muted)', marginTop: 10, fontSize: 18 }}>
                Personalised multiple-choice practice for <strong>Maths</strong>, <strong>English</strong>, and <strong>Science</strong> (ages 8–15).
                Every question shows the correct answer, a short explanation, and a learning video.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }}>
                <a href="/quiz" className="btn btn-primary">Take a Quiz</a>
                <a href="#demo" className="btn btn-ghost">Book a Demo</a>
              </div>
              <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span className="btn-chip">Timed questions</span>
                <span className="btn-chip">Instant feedback</span>
                <span className="btn-chip">Topic insights</span>
                <span className="btn-chip">Parent/teacher dashboards</span>
              </div>
            </div>

            <div className="card" style={{ alignSelf: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: 8 }}>Quick Start</h3>
              <p style={{ color: 'var(--muted)', marginTop: 0 }}>Jump straight in:</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <a className="btn btn-primary" href="/play?subject=Maths&age=10">Maths 10</a>
                <a className="btn btn-primary" href="/play?subject=English&age=12">English 12</a>
                <a className="btn btn-primary" href="/play?subject=Science&age=15">Science 15</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container">
        <div className="grid">
          <div className="card">
            <div className="kbd">1</div>
            <h3 style={{ marginTop: 8 }}>Pick subject & age</h3>
            <p style={{ color: 'var(--muted)' }}>
              Choose Maths, English, or Science for ages 8–15. Questions match typical UK KS2–GCSE coverage.
            </p>
          </div>
          <div className="card">
            <div className="kbd">2</div>
            <h3 style={{ marginTop: 8 }}>Timed MCQs + feedback</h3>
            <p style={{ color: 'var(--muted)' }}>
              Each question is timed. See the correct answer, a short explanation, and an optional learning video.
            </p>
          </div>
          <div className="card">
            <div className="kbd">3</div>
            <h3 style={{ marginTop: 8 }}>Insights & next steps</h3>
            <p style={{ color: 'var(--muted)' }}>
              We track accuracy and speed by topic to spot weak areas and assemble personal revision playlists.
            </p>
          </div>
          <div className="card">
            <div className="kbd">4</div>
            <h3 style={{ marginTop: 8 }}>Shareable dashboards</h3>
            <p style={{ color: 'var(--muted)' }}>
              Students get a progress dashboard; parents/teachers get a read-only link to monitor improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Why we’re different */}
      <section className="container">
        <div className="card" style={{ padding: 22 }}>
          <h2 style={{ marginTop: 0 }}>Why Adaptive Tutoring.ai is different</h2>
          <div className="grid" style={{ marginTop: 6 }}>
            <div className="card">
              <h4 style={{ marginTop: 0 }}>Data-driven practice</h4>
              <p style={{ color: 'var(--muted)' }}>
                Not just “right or wrong”. We measure <strong>speed</strong> and <strong>accuracy</strong> per topic,
                so practice time goes where it matters most.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0 }}>Targeted videos</h4>
              <p style={{ color: 'var(--muted)' }}>
                Each question links a short, child-friendly video (BBC, Khan Academy, etc.) matched to the topic.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0 }}>No friction</h4>
              <p style={{ color: 'var(--muted)' }}>
                One-click quick starts, clean UI, and mobile-first design. Ideal for short daily practice.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0 }}>Parent/teacher friendly</h4>
              <p style={{ color: 'var(--muted)' }}>
                Share a secure link to track progress — no logins required for viewers.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <a href="/quiz" className="btn btn-primary">Start practising</a>
            <a href="#demo" className="btn btn-ghost" style={{ marginLeft: 8 }}>Book a demo</a>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="container">
        <div className="grid">
          <SubjectCard
            title="Maths"
            bullets={['Arithmetic & fractions', 'Area, shape & angles', 'Data & reasoning']}
            link="/quiz"
          />
          <SubjectCard
            title="English"
            bullets={['Vocabulary & synonyms', 'Grammar & punctuation', 'Reading comprehension']}
            link="/quiz"
          />
          <SubjectCard
            title="Science"
            bullets={['Forces, electricity, space', 'States of matter', 'Plants & human body']}
            link="/quiz"
          />
        </div>
      </section>

      {/* Book a demo */}
      <section id="demo" className="container" style={{ paddingBottom: 40 }}>
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Book a demo</h2>
          <p style={{ color: 'var(--muted)' }}>
            Want to see the dashboards, topics, and assignment workflow in action?
            Book a 15-minute walkthrough — we’ll tailor it for parents, tutors, or schools.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="mailto:hello@adaptivetutoring.ai?subject=Demo%20request">
              Email to book
            </a>
            <a className="btn btn-ghost" href="/quiz">Try a quiz first</a>
          </div>
        </div>
      </section>
    </>
  );
}

function SubjectCard({ title, bullets, link }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <span className="kbd">Ages 8–15</span>
      </div>
      <ul style={{ margin: '8px 0 0', paddingLeft: 18
