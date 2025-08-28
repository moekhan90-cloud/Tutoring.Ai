import { prisma } from '../../lib/prisma';
import { AccuracyOverTime, TopicMastery } from '../../components/ProgressCharts.jsx';

export async function getServerSideProps({ params }) {
  const user = await prisma.user.findUnique({
    where: { publicKey: params.key },
    select: {
      username: true, name: true,
      attempts: {
        orderBy: { createdAt: 'asc' },
        select: { id:true, createdAt:true, subject:true, age:true, score:true, total:true, avgTimeSec:true }
      }
    }
  });

  if (!user) return { notFound: true };

  // topic aggregation
  const attemptsFull = await prisma.attempt.findMany({
    where: { user: { publicKey: params.key } },
    orderBy: { createdAt: 'desc' },
    take: 50,
    include: { questionResults: true }
  });

  const topicMap = new Map();
  attemptsFull.forEach(a => a.questionResults.forEach(r=>{
    const k = r.topic || '—';
    const cur = topicMap.get(k) || { correct:0, total:0 };
    cur.total += 1; if (r.correct) cur.correct += 1;
    topicMap.set(k, cur);
  }));
  const topicStats = Array.from(topicMap.entries()).map(([topic,v])=>({
    topic, accuracy: v.total ? Math.round((v.correct/v.total)*100) : 0
  }));

  return { props: { user, topicStats } };
}

export default function Share({ user, topicStats }) {
  return (
    <main className="container" style={{ paddingTop: 24 }}>
      <h1 style={{ marginTop:0 }}>{user.name || user.username} — Progress</h1>
      <div className="card" style={{ marginTop:16 }}>
        <h3 style={{ marginTop:0 }}>Accuracy over time</h3>
        <AccuracyOverTime attempts={user.attempts} />
      </div>
      <div className="card" style={{ marginTop:16 }}>
        <h3 style={{ marginTop:0 }}>Topic mastery</h3>
        <TopicMastery topicStats={topicStats} />
      </div>
    </main>
  );
}
