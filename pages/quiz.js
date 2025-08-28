// pages/quiz.js
import { useRouter } from 'next/router';
import { ALL_QUESTION_SETS } from '../data/questions-index';
import Quiz from '../components/Quiz';

export default function QuizPage() {
  const router = useRouter();
  const age = parseInt(router.query.age, 10);
  const subject = router.query.subject;
  const set = ALL_QUESTION_SETS.find(s => s.age === age && s.subject === subject);

  if (!set) {
    return (
      <div style={{maxWidth: 720, margin: '2rem auto', padding: '1rem'}}>
        <h1 style={{fontSize: '1.5rem', fontWeight: 700}}>Set not found</h1>
        <p>Try <code>/quiz?age=8&subject=Maths</code> (or English/Science). Also ensure you added the JS data files.</p>
      </div>
    );
  }

  return <Quiz set={set} />;
}
