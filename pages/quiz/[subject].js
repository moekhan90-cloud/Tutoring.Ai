// pages/quiz/[subject].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// ✅ Relative path (no "@/..." alias)
const Quiz = dynamic(
  () => import('../../components/Quiz.jsx').then((m) => m.default ?? m.Quiz),
  { ssr: false }
);

// Valid subjects
const SUBJECTS = ['Maths', 'English', 'Science'];

export default function SubjectQuizPage() {
  const router = useRouter();
  const { subject: subjectParam, age: ageParam } = router.query;

  const [setData, setSetData] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    // Normalise params
    const subject = SUBJECTS.includes(String(subjectParam))
      ? String(subjectParam)
      : 'Maths';
    const age =
      typeof ageParam === 'string' ? parseInt(ageParam, 10) : 8;

    // ✅ Import data helper on the client and fetch the set
    import('../../data/questions-index.js')
      .then(({ getQuestionSet }) => {
        const set = getQuestionSet(age, subject);
        setSetData(set ?? null);
      })
      .finally(() => setReady(true));
  }, [router.isReady, subjectParam, ageParam]);

  if (!ready) return null;

  if (!setData) {
    const link = (a, s) => `/quiz/${encodeURIComponent(s)}?age=${a}`;
    return (
      <main style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
        <h1 style={{ fontSize: 20, fontWeight: 600 }}>No questions found</h1>
        <p style={{ marginTop: 8 }}>
          We couldn’t find a set for this selection.
        </p>
        <p style={{ marginTop: 8 }}>
          Try:{' '}
          <a href={link(8, 'Maths')}>Age 8 · Maths</a> ·{' '}
          <a href={link(10, 'English')}>Age 10 · English</a> ·{' '}
          <a href={link(15, 'Science')}>Age 15 · Science</a>
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
