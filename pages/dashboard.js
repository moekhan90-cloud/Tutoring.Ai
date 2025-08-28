// pages/dashboard.js
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { prisma } from '../lib/prisma';
import { AccuracyOverTime, TopicMastery } from '../components/ProgressCharts.jsx';

export async function getServerSideProps(ctx) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions).catch(() => null);
  if (!session) return { redirect: { destination: '/login', permanent: false } };

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      username: true, name: true, publicKey: true,
      attempts: {
        orderBy: { createdAt: 'asc' },
        select: { id: true, createdAt: true, subject: true, age: true, score: true, total: true, avgTimeSec: true }
      }
    }
  });

  // Aggregate topic accuracy from recent question results
  const recent = await prisma.attempt.findMany({
    where: { user: { email: session.user.email } },
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: { questionResults: { select: { topic: true, correct: true } } }
  });

  const topicMap = new Map();
  recent.forEach(a => a.questionResults.forEach(r => {
    const key = r.topic || '—';
    const cur = topicMap.get(key) || { correct: 0, total: 0 };
    cur.total += 1; if (r.correct) cur.correct += 1;
    topicMap.set(key, cur);
  }));
  const topicStats = Array.from(topicMap.entries()).map(([topic, v]) => ({
    topic, accuracy: v.total ? Math.round((v.correct / v.total) * 100) : 0
  }));

  return { props: { user, topicStats } };
}

export default function Dashboard({ user, topicStats }) {
  const avgAcc = user.attempts.length
    ? Math.round(user.attempts.reduce((a, b) => a + (b.score / b.total), 0) / user.attempts.length * 100)
    : 0;

  return (
    <main className="container" style={{ paddingTop: 24 }}>
      <h1 style={{ marginTop: 0 }}>Welcome, {user.name || user.username}</h1>

      <div className="card" style={{ marginTop: 12 }}>
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
          <Stat label="Attempts" value={user.attempts.length} />
          <Stat label="Avg accuracy" value={`${avgAcc}%`} />
          <Stat label="Share link" value={<a href={`/share/${user.publicKey}`}>Public dashboard</a>} />
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Accuracy over time</h3>
        <AccuracyOverTime attempts={user.attempts} />
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Topic mastery</h3>
        <TopicMastery topicStats={topicStats} />
      </div>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="card">
      <div style={{ fontSize: 14, color: 'var(--muted)' }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800 }}>{value}</div>
    </div>
  );
}
