// pages/index.js
import Head from 'next/head';

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Adaptive Tutoring.ai';

export default function Home() {
  const link = (age, subject) => `/quiz?age=${age}&subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <main
        className="min-h-screen"
        style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}
      >
        <header
          className="py-8"
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <div
            className="rounded-xl"
            style={{
              width: 44,
              height: 44,
              background: '#2563EB',
              display: 'grid',
              placeItems: 'center',
              color: 'white',
              fontWeight: 700,
              borderRadius: 12,
              boxShadow: '0 6px 16px rgba(37,99,235,0.25)',
            }}
          >
            A
          </div>
          <h1 className="text-3xl font-bold">{APP_NAME}</h1>
        </header>

        <section style={{ marginTop: 8 }}>
          <p className="text-gray-600" style={{ marginBottom: 16 }}>
            Personalised practice in <strong>Maths</strong>, <strong>English</strong> and{' '}
            <strong>Science</strong> for ages 8–15. Multiple-choice, instant feedback, and
            a learning video for each question.
          </p>

          <div
            className="grid gap-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            }}
          >
            <Card
              title="Start Maths"
              subtitle="Pick an age · 20 questions"
              links={[
                { href: link(8, 'Maths'), label: 'Age 8' },
                { href: link(10, 'Maths'), label: 'Age 10' },
                { href: link(15, 'Maths'), label: 'Age 15' },
              ]}
            />
            <Card
              title="Start English"
              subtitle="Pick an age · 20 questions"
              links={[
                { href: link(8, 'English'), label: 'Age 8' },
                { href: link(10, 'English'), label: 'Age 10' },
                { href: link(15, 'English'), label: 'Age 15' },
              ]}
            />
            <Card
              title="Start Science"
              subtitle="Pick an age · 20 questions"
              links={[
                { href: link(8, 'Science'), label: 'Age 8' },
                { href: link(10, 'Science'), label: 'Age 10' },
                { href: link(15, 'Science'), label: 'Age 15' },
              ]}
            />
          </div>
        </section>
      </main>
    </>
  );
}

function Card({ title, subtitle, links }) {
  return (
    <div
      className="rounded-2xl border p-5 hover:shadow-md transition"
      style={{
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 16,
        padding: 20,
      }}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-600" style={{ marginTop: 6 }}>
        {subtitle}
      </p>
      <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-3 py-2 rounded-xl bg-blue-600 text-white text-sm"
            style={{
              background: '#2563EB',
              color: 'white',
              padding: '8px 12px',
              borderRadius: 12,
              textDecoration: 'none',
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
