// pages/quiz.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

const SUBJECTS = ['Maths','English','Science'];
const AGES = [8,9,10,11,12,13,14,15];

export default function QuizStart(){
  const router = useRouter();
  const [subject, setSubject] = useState('Maths');
  const [age, setAge] = useState(10);

  function go(){
    router.push(`/play?subject=${encodeURIComponent(subject)}&age=${age}`);
  }

  const quick = useMemo(() => ([
    { subject:'Maths', age: 10 },
    { subject:'English', age: 12 },
    { subject:'Science', age: 15 },
  ]),[]);

  return (
    <main className="container">
      <Head><title>Start a Quiz · Adaptive Tutoring.ai</title></Head>

      {/* Hero */}
      <div className="card" style={{ padding: 24, marginBottom: 16 }}>
        <div style={{ display:'grid', gap:10, gridTemplateColumns:'1.2fr .8fr' }}>
          <div>
            <h1 style={{ margin:0, fontSize: 42, lineHeight:1.1 }}>Start a <span style={{ color:'var(--accent)' }}>Quiz</span></h1>
            <p style={{ color:'var(--muted)', marginTop:10 }}>
              Pick a subject and age. Each question is timed; you’ll see the correct answer,
              a short explanation, and a learning video. We’ll track accuracy and time to
              personalise your next steps.
            </p>
            <div style={{ marginTop:12, display:'flex', gap:10, flexWrap:'wrap' }}>
              <span className="btn-chip">Timed questions</span>
              <span className="btn-chip">Instant feedback</span>
              <span className="btn-chip">Topic insights</span>
            </div>
          </div>

          <div className="card" style={{ alignSelf:'center' }}>
            <div>
              <label>Subject</label>
              <select value={subject} onChange={e=>setSubject(e.target.value)}>
                {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div style={{ marginTop:10 }}>
              <label>Age</label>
              <select value={age} onChange={e=>setAge(Number(e.target.value))}>
                {AGES.map(a => <option key={a} value={a}>Age {a}</option>)}
              </select>
            </div>
            <div style={{ marginTop:12 }}>
              <button className="btn btn-primary" onClick={go}>Start quiz</button>
            </div>
          </div>
        </div>
      </div>

      {/* Subject cards */}
      <div className="grid">
        {SUBJECTS.map((s,i)=>(
          <div className="card" key={s}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div style={{ fontWeight:800, fontSize:20 }}>{s}</div>
              <span className="kbd">Ages 8–15</span>
            </div>
            <p style={{ color:'var(--muted)', marginTop:6 }}>
              {s === 'Maths' && '20 MCQs with arithmetic, fractions, geometry, and data.'}
              {s === 'English' && 'Vocabulary, grammar, punctuation, and comprehension.'}
              {s === 'Science' && 'KS2–GCSE concepts: forces, plants, electricity, space.'}
            </p>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
              {[8,10,15].map(a => (
                <a key={a} className="btn btn-ghost" href={`/play?subject=${s}&age=${a}`}>
                  Age {a}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick start links */}
      <div className="card" style={{ marginTop:16 }}>
        <div style={{ fontWeight:800, marginBottom:8 }}>Quick start</div>
        <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
          {quick.map((q,i)=>(
            <a key={i} href={`/play?subject=${q.subject}&age=${q.age}`} className="btn btn-primary">
              {q.subject} {q.age}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
