// pages/quiz.js
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getQuestionSet } from '../data/questions-index'
import Quiz from '../components/Quiz'

// Internal keys in your data + nice labels for the UI
const SUBJECTS = [
  { key: 'Maths',   label: 'Mathematics' },
  { key: 'English', label: 'English' },
  { key: 'Science', label: 'Science' }
];
const AGES = [8, 9, 10, 11, 12, 13, 14, 15];

export default function QuizPage() {
  const router = useRouter();
  const ageParam = router.query.age;
  const subjectParam = router.query.subject;

  // Normalise subject to your internal key
  const subjectKey = (() => {
    if (typeof subjectParam !== 'string') return 'Maths';
    const found = SUBJECTS.find(
      s => s.key.toLowerCase() === subjectParam.toLowerCase()
        || s.label.toLowerCase() === subjectParam.toLowerCase()
    );
    return found ? found.key : 'Maths';
  })();

  const age = typeof ageParam === 'string' ? parseInt(ageParam, 10) : 10;

  const set = getQuestionSet(age, subjectKey);

  return (
    <>
      <Head><title>Start a Quiz • Adaptive Tutoring.ai</title></Head>
      <div className="container" style={{maxWidth: 860, margin: '0 auto', padding: 16}}>
        <h1 style={{fontSize: 36, fontWeight: 800, margin: '8px 0 12px'}}>Start a Quiz</h1>
        <p style={{color: '#60646c', marginBottom: 16}}>
          Pick a subject and age. Each question is timed with a stopwatch;
          you’ll get a summary of speed, accuracy, and topics to review.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const chosenSubject = f.get('subject');
            const chosenAge = f.get('age');
            router.push(`/quiz?subject=${encodeURIComponent(chosenSubject)}&age=${encodeURIComponent(chosenAge)}`);
          }}
          style={{display:'flex', gap: 12, alignItems:'center', flexWrap:'wrap', marginBottom: 16}}
        >
          <label>Subject</label>
          <select name="subject" defaultValue={subjectKey} className="input">
            {SUBJECTS.map(s => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </select>

          <label>Age</label>
          <select name="age" defaultValue={age} className="input">
            {AGES.map(a => <option key={a} value={a}>{a}</option>)}
          </select>

          <button className="btn btn-primary" type="submit">Start quiz</button>
        </form>

        <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', marginBottom: 20}}>
          {SUBJECTS.map(s => (
            <div key={s.key} className="card">
              <div style={{fontWeight:700}}>{s.label}</div>
              <div style={{display:'flex', gap:10, marginTop:10, flexWrap:'wrap'}}>
                {[8,10,12,15].map(a => (
                  <a
                    key={a}
                    className="btn btn-chip"
                    href={`/quiz?subject=${encodeURIComponent(s.key)}&age=${a}`}
                  >
                    Age {a}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {(!set || !set.questions || set.questions.length === 0) ? (
          <div className="card">
            <h3 style={{marginTop:0}}>No questions found</h3>
            <p style={{color:'#60646c'}}>
              We couldn’t find a set for <b>{SUBJECTS.find(s=>s.key===subjectKey)?.label}</b> at age <b>{age}</b>.
              Make sure the age file exports that subject and that it’s imported in <code>data/questions-index.js</code>.
            </p>
          </div>
        ) : (
          <Quiz set={set} />
        )}
      </div>

      <style jsx global>{`
        .input { padding:8px 10px; border:1px solid #e3e5e8; border-radius:10px; }
        .btn { padding:10px 14px; border-radius:12px; border:1px solid #e3e5e8; background:#fff; }
        .btn-primary { background:#2563eb; color:#fff; border-color:#2563eb; }
        .btn-chip { background:#eef2ff; border-color:#c7d2fe; }
        .card { border:1px solid #e3e5e8; border-radius:16px; padding:14px; background:#fff; }
      `}</style>
    </>
  );
}
