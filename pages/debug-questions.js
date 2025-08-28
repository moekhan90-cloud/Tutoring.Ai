// pages/debug-questions.js
import { ALL_QUESTION_SETS, AVAILABLE, getAgesForSubject } from '../data/questions-index';

export default function DebugQuestions(){
  const counts = ALL_QUESTION_SETS.reduce((acc, s) => {
    const key = `${s.age}-${s.subject}`;
    acc[key] = (s.questions?.length || 0);
    return acc;
  }, {});

  return (
    <div style={{fontFamily:'ui-sans-serif', padding:20}}>
      <h1>Question Bank Debug</h1>
      <p>Total sets: <b>{ALL_QUESTION_SETS.length}</b></p>

      <h2>Available subjects by age</h2>
      <pre style={{background:'#111', color:'#0f0', padding:12, borderRadius:8}}>
{JSON.stringify(AVAILABLE, null, 2)}
      </pre>

      <h2>Counts per age–subject</h2>
      <pre style={{background:'#111', color:'#0ff', padding:12, borderRadius:8}}>
{JSON.stringify(counts, null, 2)}
      </pre>

      <h2>Ages per subject</h2>
      <ul>
        {['Maths','English','Science'].map(s => (
          <li key={s}><b>{s}:</b> {getAgesForSubject(s).join(', ') || 'none'}</li>
        ))}
      </ul>
      <p style={{opacity:.7}}>If English/Science show “none”, either the import path is wrong, the index isn’t spreading that age file, or the subject strings don’t match.</p>
    </div>
  );
}
