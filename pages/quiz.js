// pages/quiz.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// ✅ Load the Quiz component only in the browser
const Quiz = dynamic(
  () => import('../components/Quiz.jsx').then((m) => m.default ?? m.Quiz),
  { ssr: false }
);

const SUBJECTS = ['Maths', 'English', 'Science'];

export default function QuizPage() {
  const router = useRouter();
  const [setData, setSetData] = useState(null); // the QuestionSet for this page
  const [ready, setReady] = useState(false);

  // Wait for router, then load data and pick the set on the client
  useEffect(() => {
    if (!router.isReady) return;

    const ageParam = typeof router.query.age === 'string' ? router.query.age : undefined;
    const subjectParam =
      typeof router.query.subject === 'string' ? router.query.subject : undefined;

    const age = ageParam ? parseInt(ageParam, 10) : 8;
    const subject = SUBJECTS.includes(String(subjectParam))
      ? String(subjectParam)
      : 'Maths';

    // ✅ Import the data helper on the client to avoid any SSR import hiccups
    import('../data/questions-index.js')
      .then(({ getQuestionSet }) => {
        const set = getQuestionSet(age, subject);
        setSetData(set ?? null);
      })
      .finally(() => setReady(true));
  }, [router.isReady, router.query.age, router.query.subject]);

  // Until router + data are ready, render nothing to avoid hydration issues
  if (!ready) return null;

  if (!setData) {
    // Friendly empty state with a few quick links
    const qs = (a, s) => `/quiz?age=${a}&subject=${encodeURIComponent(s)}`;
    return (
      <main style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
        <h1 style={{ fontSize: 20, fontWeight: 600 }}>No questions found</h1>
        <p style={{ marginTop: 8 }}>
          We couldn’t find questions for that selection.
        </p>
        <p style={{ marginTop: 8 }}>
          Try:{' '}
          <a href={qs(8, 'Maths')}>Age 8 · Maths</a> ·{' '}
          <a href={qs(10, 'English')}>Age 10 · English</a> ·{' '}
          <a href={qs(15, 'Science')}>Age 15 · Science</a>
        </p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
      <Quiz set={setData} />
    </main>
  );
}
