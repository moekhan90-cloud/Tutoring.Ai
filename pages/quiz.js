// pages/quiz.js
'use client';

import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// ✅ dynamic import so it only runs on the client,
// and it works whether Quiz is a default or named export.
const Quiz = dynamic(
  () => import('../components/Quiz.jsx').then((m) => m.default ?? m.Quiz),
  { ssr: false }
);

// ✅ import your aggregated questions (JS file)
import { getQuestionSet } from '../data/questions-index.js';

const SUBJECTS = ['Maths', 'English', 'Science'];

export default function QuizPage() {
  const router = useRouter();
  const { age: ageParam, subject: subjectParam } = router.query;

  const age =
    typeof ageParam === 'string' ? parseInt(ageParam, 10) : Number(ageParam ?? 8);

  const subject = SUBJECTS.includes(String(subjectParam))
    ? String(subjectParam)
    : 'Maths';

  const set = getQuestionSet(age, subject);

  return (
    <>
      <Head>
        <title>{`Quiz · Age ${age} · ${subject}`}</title>
        <meta
          name="description"
          content="Multiple-choice quizzes with instant feedback and learning videos."
        />
      </Head>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
        {!set ? (
          <div style={{ padding: 16 }}>
            <h1 style={{ fontSize: 20, fontWeight: 600 }}>No questions found</h1>
            <p style={{ marginTop: 8 }}>
              We couldn’t find a set for <strong>Age {age}</strong> ·{' '}
              <strong>{subject}</strong>.
            </p>
            <p style={{ marginTop: 8 }}>
              Try: <a href="/quiz?age=8&subject=Maths">Age 8 · Maths</a> ·{' '}
              <a href="/quiz?age=10&subject=English">Age 10 · English</a> ·{' '}
              <a href="/quiz?age=15&subject=Science">Age 15 · Science</a>
            </p>
          </div>
        ) : (
          <Quiz set={set} />
        )}
      </main>
    </>
  );
}
