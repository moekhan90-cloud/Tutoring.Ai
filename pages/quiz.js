// pages/quiz.js
import { useRouter } from 'next/router';

// ⬅️ import the component directly (no dynamic import needed in Pages Router)
import Quiz from '../components/Quiz.jsx';

// ⬅️ import your data helpers (explicit .js)
import { getQuestionSet } from '../data/questions-index.js';

const SUBJECTS = ['Maths', 'English', 'Science'];

export default function QuizPage() {
  const router = useRouter();

  // router.query is empty on first render; guard for that
  const { age: ageParam, subject: subjectParam } = router.query ?? {};

  const age =
    typeof ageParam === 'string' ? parseInt(ageParam, 10) : 8;

  const subject = SUBJECTS.includes(String(subjectParam))
    ? String(subjectParam)
    : 'Maths';

  // If router isn't ready yet, avoid rendering to prevent hydration mismatch
  if (!router.isReady) return null;

  const set = getQuestionSet(age, subject);

  if (!set) {
    return (
      <main style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
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
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
      <Quiz set={set} />
    </main>
  );
}
