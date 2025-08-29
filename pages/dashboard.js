// pages/dashboard.js
import { useEffect, useMemo, useState } from 'react';

export default function DashboardPage() {
  const [userId, setUserId] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load once with local user (if you set one in login/signup)
  useEffect(() => {
    const uid = localStorage.getItem('demoUserId') || 'guest';
    setUserId(uid);
  }, []);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    fetch(`/api/results?userId=${encodeURIComponent(userId)}`)
      .then(r => r.json())
      .then(j => setData(j.results || []))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, [userId]);

  const summary = useMemo(() => {
    const totalRuns = data.length;
    const bySubject = {};
    let avgAcc = 0;
    let avgTime = 0;

    data.forEach(r => {
      avgAcc += r.accuracy;
      avgTime += r.totalElapsedMs;
      bySubject[r.subject] = bySubject[r.subject] || { runs: 0, correct: 0, total: 0, time: 0 };
      bySubject[r.subject].runs += 1;
      bySubject[r.subject].correct += r.score;
      bySubject[r.subject].total += r.totalQuestions;
      bySubject[r.subject].time += r.totalElapsedMs;
    });

    if (totalRuns) {
      avgAcc = Math.round(avgAcc / totalRuns);
      avgTime = Math.round(avgTime / totalRuns);
    }

    return { totalRuns, bySubject, avgAcc, avgTime };
  }, [data]);

  const fmt = (ms) => {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const ss = String(s % 60).padStart(2, '0');
    return `${m}:${ss}`;
  };

  return (
    <div style={{ maxWidth: 1000, margin: '20px auto', padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Learner Dashboard</h1>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
        <input
          value={userId}
          onChange={e => setUserId(e.target.value)}
          placeholder="User ID (e.g. student email or username)"
          style={{ padding: 8, border: '1px solid #ddd', borderRadius: 8, flex: 1 }}
        />
        <button
          onClick={() => {
            if (!userId) return;
            setLoading(true);
            fetch(`/api/results?userId=${encodeURIComponent(userId)}`)
              .then(r => r.json())
              .then(j => setData(j.results || []))
              .finally(() => setLoading(false));
          }}
          style={{ padding: '8px 14px', borderRadius: 8, background: '#2563eb', color: '#fff', border: 0 }}
        >
          Load
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 12,
        marginBottom: 16
      }}>
        <Card title="Total quiz runs" value={summary.totalRuns} />
        <Card title="Average accuracy" value={`${summary.avgAcc}%`} />
        <Card title="Average time per run" value={fmt(summary.avgTime)} />
      </div>

      <section style={{ marginTop: 8 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>By subject</h2>
        <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {Object.entries(summary.bySubject).map(([subj, s]) => {
            const acc = s.total ? Math.round((s.correct / s.total) * 100) : 0;
            return (
              <div key={subj} style={{ border: '1px solid #eee', borderRadius: 10, padding: 12 }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{subj}</div>
                <Bar label="Accuracy" percent={acc} />
                <div style={{ fontSize: 13, color: '#555', marginTop: 8 }}>
                  Runs: <b>{s.runs}</b> · Time: <b>{fmt(s.time)}</b>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Recent attempts</h2>
        {loading ? (
          <div>Loading…</div>
        ) : data.length === 0 ? (
          <div style={{ color: '#666' }}>No results yet.</div>
        ) : (
          <div style={{ border: '1px solid #eee', borderRadius: 10, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: '#fafafa' }}>
                <tr>
                  <Th>Date</Th>
                  <Th>Subject</Th>
                  <Th>Age</Th>
                  <Th>Score</Th>
                  <Th>Accuracy</Th>
                  <Th>Time</Th>
                </tr>
              </thead>
              <tbody>
                {data.map(r => (
                  <tr key={r.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                    <Td>{new Date(r.createdAt).toLocaleString()}</Td>
                    <Td>{r.subject}</Td>
                    <Td>{r.age}</Td>
                    <Td>{r.score}/{r.totalQuestions}</Td>
                    <Td>
                      <Bar compact percent={r.accuracy} />
                    </Td>
                    <Td>{fmt(r.totalElapsedMs)}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 10, padding: 12 }}>
      <div style={{ fontSize: 12, color: '#666' }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 800 }}>{value}</div>
    </div>
  );
}

function Bar({ percent = 0, label, compact }) {
  return (
    <div style={{ width: '100%' }}>
      {label && <div style={{ fontSize: 12, color: '#555' }}>{label}</div>}
      <div style={{ height: compact ? 8 : 10, background: '#eee', borderRadius: 999, overflow: 'hidden' }}>
        <div style={{ width: `${Math.min(100, Math.max(0, percent))}%`, height: '100%', background: '#10b981' }} />
      </div>
      {!compact && <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{percent}%</div>}
    </div>
  );
}

const Th = (p) => <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: 12, color: '#666' }} {...p} />;
const Td = (p) => <td style={{ padding: '10px 12px', fontSize: 14 }} {...p} />;
