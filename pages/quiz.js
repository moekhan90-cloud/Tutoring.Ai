// pages/quiz.js
import Head from 'next/head';
import { useRouter } from 'next/router';

// Adjust this import path if your helper lives elsewhere
import { getQuestionSet } from '../data/questions-index';
import Quiz from '../components/Quiz';

// Display label vs internal value that matches your data files
const SUBJECTS = [
  { label: 'Mathematics', value: 'Maths' },
  { label: 'English', value: 'English' },
  { label: 'Science', value: 'Science' },
];

const AGES = [8, 9, 10, 11, 12, 13, 14, 15];

export default function QuizPage() {
  const router = useRouter();
  const { age: ageParam, subject: subjectParam } = router.query;

  // Normalise age
  const age = (() => {
    const n = Number(ageParam);
    return AGES.includes(n) ? n : 10;
  })();

  // Normalise subject (must be Maths | English | Science)
  const allowed = SUBJECTS.map(s => s.value);
  const subject = allowed.includes(String(subjectParam)) ? String(subjectParam) : 'Maths';

  // Build the question set
  const set = getQuestionSet(age, subject);

  function handleStart(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextAge = Number(form.get('age'));
    const nextSubject = String(form.get('subject')); // will be value ('Maths'|'English'|'Science')
    router.push({ pathname: '/quiz', query: { age: nextAge, subject: nextSubject } });
  }

  return (
    <>
      <Head>
        <title>Start a Quiz | Adaptive Tutoring.ai</title>
      </Head>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '24px' }}>
        <h1 style={{ fontSize: 42, marginBottom: 12 }}>Start a Quiz</h1>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 24 }}>
          Pick a subject and age. Each question is timed; you’ll get a summary of speed, accuracy, and topics you’re struggling with.
        </p>

        {/* Start form */}
        <form onSubmit={handleStart} style={{
          display: 'grid', gap: 16, padding: 16, borderRadius: 12,
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)'
        }}>
          <label style={{ display: 'grid', gap: 8 }}>
            <span>Subject</span>
            <select
              name="subject"
              defaultValue={subject}
              style={{ padding: '12px 14px', borderRadius: 10, background: '#0b1220', border: '1px solid #2a3553', color: 'white' }}
            >
              {SUBJECTS.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </label>

          <label style={{ display: 'grid', gap: 8 }}>
            <span>Age</span>
            <select
              name="age"
              defaultValue={age}
              style={{ padding: '12px 14px', borderRadius: 10, background: '#0b1220', border: '1px solid #2a3553', color: 'white' }}
            >
              {AGES.map(a => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </label>

          <button type="submit" style={{
            padding: '12px 16px', borderRadius: 10, border: '1px solid #3b82f6',
            background: '#2563eb', color: 'white', fontWeight: 600, cursor: 'pointer', width: 140
          }}>
            Start quiz
          </button>
        </form>

        {/* Quick start */}
        <p style={{ marginTop: 18, marginBottom: 8, fontSize: 16 }}>
          Quick start:&nbsp;
          <a href={`/quiz?age=10&subject=Maths`} style={{ color: '#22d3ee' }}>Maths 10</a>,&nbsp;
          <a href={`/quiz?age=12&subject=English`} style={{ color: '#22d3ee' }}>English 12</a>,&nbsp;
          <a href={`/quiz?age=15&subject=Science`} style={{ color: '#22d3ee' }}>Science 15</a>
        </p>

        {/* Render the actual quiz */}
        <div style={{ marginTop: 24 }}>
          <Quiz set={set} />
        </div>
      </main>
    </>
  );
}
