// pages/quiz.js
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { getQuestionSet } from '../data/questions-index.js';

// 👇 Load the client Quiz component only on the browser.
// Works whether Quiz is default export or named export.
const Quiz = dynamic(
  () => import('../components/Quiz.jsx').then(m => m.default ?? m.Quiz),
  { ssr: false }
);

const SUBJECTS = ['Maths', 'English', 'Science'];

export default function QuizPage() {
  const router = useRouter();

  // router.query is empty on first render during hydration — guard for that
  const ageParam = typeof router.query.age === 'string' ? router.query.age : undefined;
  const subjectParam = typeof router.query.subject === 'string' ? router.query.subject : undefined;

  const age = ageParam ? parseInt(ageParam, 10) : 8;
  const subject = SUBJECTS.includes(String(subjectParam)) ? String(subjectParam) : 'Maths';

  const set = getQuestionSet(age, subject);

  // While the query params are not ready yet, render nothing (prevents hydration mismatch)
  if (router.isReady === false) return null;

  if (!set) {
    return (
      <main style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
        <h1 style={{ fontSize: 20, fontWeight: 600 }}>No questions found</h1>
        <p style={{ marginTop: 8 }}>
          We couldn’t find a set for <strong>Age {age}</strong> · <strong>{subject}</strong>.
        </p>
        <p style={{ marginTop: 8 }}>
          Try: <a href="/quiz?age=8&subject=Maths">Age 8 · Maths</a> ·{' '}
          <a href="/quiz?age=10&subject=English">Age 10 · English</a> ·{' '}
          <a href="/quiz?age=15&subject=Science">Age 15 · Science</a>
        </p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
      <Quiz set={set} />
    </main>
  );
}
