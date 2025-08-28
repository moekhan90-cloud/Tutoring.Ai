// pages/index.js
import Head from 'next/head';

const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || 'Adaptive Tutoring.ai';

export default function Home() {
  const link = (age, subject) => `/quiz?age=${age}&subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta
          name="description"
          content="Adaptive Tutoring.ai – personalised practice with instant feedback and learning videos."
        />
      </Head>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
        <header style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div
            style={{
              width: 44, height: 44, display: 'grid', placeItems: 'center',
              background: '#2563EB', color: '#fff', fontWeight: 700, borderRadius: 12,
              boxShadow: '0 6px 16px rgba(37,99,235,0.25)',
            }}
          >
            A
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>{APP_NAME}</h1>
        </header>

        <section style={{ marginBottom: 24 }}>
          <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
            Personalised multiple-choice practice for <strong>Maths</strong>, <strong>English</strong>, and <strong>Science</strong> (ages 8–15).
            Every question shows the correct answer, a short explanation, and a learning video.
          </p>
        </section>

        <section
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          }}
        >
          <Card title="Start Maths" subtitle="20 MCQs + feedback" links={[
            { href: link(8, 'Maths'), label: 'Age 8' },
            { href: link(10, 'Maths'), label: 'Age 10' },
            { href: link(15, 'Maths'), label: 'Age 15' },
          ]}/>
          <Card title="Start English" subtitle="Vocabulary, grammar, analysis" links={[
            { href: link(8, 'English'), label: 'Age 8' },
            { href: link(10, 'English'), label: 'Age 10' },
            { href: link(15, 'English'), label: 'Age 15' },
          ]}/>
          <Card title="Start Science" subtitle="KS2–GCSE concepts" links={[
            { href: link(8, 'Science'), label: 'Age 8' },
            { href: link(10, 'Science'), label: 'Age 10' },
            { href: link(15, 'Science'), label: 'Age 15' },
          ]}/>
        </section>
      </main>
    </>
  );
}

function Card({ title, subtitle, links }) {
  return (
    <div
      style={{
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 16,
        padding: 20,
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{title}</h2>
      <p style={{ color: '#6b7280', marginTop: 6 }}>{subtitle}</p>
      <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              background: '#2563EB',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: 12,
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
