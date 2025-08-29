// components/SubjectQuizPage.jsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Quiz from './Quiz';
import { getQuestionSet } from '../data/questions-index';

const AGES = [8, 9, 10, 11, 12, 13, 14, 15];

function normalizeAge(a) {
  const n = Number(a);
  return AGES.includes(n) ? n : 10;
}

export default function SubjectQuizPage({ subject }) {
  const router = useRouter();
  const [age, setAge] = useState(normalizeAge(router.query.age));

  // keep URL in sync with selected age (subject fixed by the page)
  useEffect(() => {
    const qs = new URLSearchParams({ age: String(age) }).toString();
    router.replace(`?${qs}`, undefined, { shallow: true });
  }, [age]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = useMemo(() => {
    try {
      return getQuestionSet(age, subject); // subject is fixed per page
    } catch {
      return null;
    }
  }, [age, subject]);

  return (
    <>
      <Head>
        <title>{subject} – Age {age} | Adaptive Tutoring.ai</title>
      </Head>

      <main style={{ maxWidth: 920, margin: '0 auto', padding: '24px' }}>
        <h1 style={{ fontSize: 40, margin: '8px 0 16px' }}>
          {subject} — Start a Quiz
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.5, opacity: 0.9, marginBottom: 20 }}>
          Pick an age. Each question is timed; you’ll get a summary of speed,
          accuracy, and topics you’re struggling with.
        </p>

        <label style={{ display: 'block', marginBottom: 16 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>Age</div>
          <select
            value={age}
            onChange={(e) => setAge(normalizeAge(e.target.value))}
            style={{ width: '100%', padding: '12px', borderRadius: 10 }}
          >
            {AGES.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </label>

        {!set ? (
          <div
            style={{
              padding: 16,
              borderRadius: 12,
              background: '#fee2e2',
              color: '#991b1b',
              fontWeight: 600,
              marginTop: 8
            }}
          >
            No questions found for <em>{subject}</em> age <em>{age}</em>.  
            Check <code>/data/questions-age{age}.js</code> has a set with{" "}
            <code>subject: '{subject}'</code>.
          </div>
        ) : (
          <Quiz set={set} />
        )}
      </main>
    </>
  );
}
