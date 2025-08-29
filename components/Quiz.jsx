// components/Quiz.jsx
import { useEffect, useRef, useState } from 'react';

// tiny helper for class names
function cls(...a) {
  return a.filter(Boolean).join(' ');
}

/**
 * Props:
 *   set = {
 *     age: number,
 *     subject: 'Maths' | 'English' | 'Science' | string,
 *     questions: Array<{
 *       id: string,
 *       prompt: string,
 *       options: string[],
 *       answerIndex: number,
 *       explanation?: string,
 *       videoUrl?: string,
 *       topic?: string
 *     }>
 *   }
 *   onExit? = () => void
 */
export default function Quiz({ set, onExit }) {
  const questions = set?.questions ?? [];
  const total = questions.length;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [totalElapsedMs, setTotalElapsedMs] = useState(0);

  // time tracking
  const questionStartRef = useRef(Date.now());
  const quizStartRef = useRef(Date.now());
  const submittedRef = useRef(false);

  // start timers on first render and whenever the question changes
  useEffect(() => {
    quizStartRef.current = Date.now();
    questionStartRef.current = Date.now();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // when we move to a new question, reset selection and start timer
    setSelected(null);
    setShowAnswer(false);
    questionStartRef.current = Date.now();
  }, [index]);

  function checkAnswer() {
    if (selected == null || showAnswer) return;

    const q = questions[index];
    const correct = selected === q.answerIndex;
    const timeMs = Date.now() - questionStartRef.current;

    setScore(s => (correct ? s + 1 : s));
    setHistory(h => [
      ...h,
      {
        qid: q.id,
        topic: q.topic || '',
        selected,
        correctAnswer: q.answerIndex,
        correct,
        timeMs,
      },
    ]);
    setTotalElapsedMs(ms => ms + timeMs);
    setShowAnswer(true);
  }

  async function submitRunToServer() {
    if (submittedRef.current) return; // avoid double submit
    submittedRef.current = true;
    try {
      const payload = {
        userId: localStorage.getItem('demoUserId') || 'guest',
        age: set.age,
        subject: set.subject,
        score,
        totalQuestions: total,
        totalElapsedMs,
        history,
      };
      await fetch('/api/submit-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      // ok for demo
      console.error('submitRunToServer failed', e);
    }
  }

  function next() {
    if (!showAnswer) {
      // if user tries to skip, treat as checking with no selection
      if (selected == null) return;
      checkAnswer();
      return;
    }
    if (index < total - 1) {
      setIndex(i => i + 1);
    } else {
      // finished
      submitRunToServer();
      setIndex(total); // go to summary view
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setHistory([]);
    setTotalElapsedMs(0);
    submittedRef.current = false;
    quizStartRef.current = Date.now();
    questionStartRef.current = Date.now();
  }

  // finished view (index === total)
  if (index >= total) {
    const accuracy = total ? Math.round((score / total) * 100) : 0;
    const m = Math.floor(totalElapsedMs / 1000 / 60);
    const s = Math.floor((totalElapsedMs / 1000) % 60);

    return (
      <div style={wrap}>
        <header style={header}>
          <div style={badge}>{set.subject?.[0] || 'Q'}</div>
          <div>
            <div style={mutedSmall}>Summary</div>
            <h1 style={h1}>
              {set.subject} · Age {set.age}
            </h1>
          </div>
        </header>

        <div style={grid}>
          <Card title="Score" value={`${score} / ${total}`} />
          <Card title="Accuracy" value={`${accuracy}%`} />
          <Card title="Total time" value={`${m}:${String(s).padStart(2, '0')}`} />
        </div>

        <section style={{ marginTop: 18 }}>
          <h3 style={h3}>Attempt detail</h3>
          <div style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: '#fafafa' }}>
                <tr>
                  <Th>#</Th>
                  <Th>Topic</Th>
                  <Th>Correct</Th>
                  <Th>Time</Th>
                </tr>
              </thead>
              <tbody>
                {history.map((h, i) => {
                  const ms = h.timeMs || 0;
                  const mm = Math.floor(ms / 1000 / 60);
                  const ss = String(Math.floor((ms / 1000) % 60)).padStart(2, '0');
                  return (
                    <tr key={i} style={{ borderTop: '1px solid #f3f3f3' }}>
                      <Td>{i + 1}</Td>
                      <Td>{h.topic || '-'}</Td>
                      <Td>
                        <span
                          style={{
                            padding: '2px 8px',
                            borderRadius: 999,
                            background: h.correct ? '#dcfce7' : '#fee2e2',
                            color: h.correct ? '#065f46' : '#991b1b',
                            fontWeight: 600,
                            fontSize: 12,
                          }}
                        >
                          {h.correct ? 'Correct' : 'Wrong'}
                        </span>
                      </Td>
                      <Td>
                        {mm}:{ss}
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          <button style={btnPrimary} onClick={restart}>Try Again</button>
          <button style={btnGhost} onClick={() => (onExit ? onExit() : (window.location.href = '/'))}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // question view
  const q = questions[index];
  const isChecked = showAnswer;
  const isCorrect = isChecked && selected === q.answerIndex;

  return (
    <div style={wrap}>
      <header style={header}>
        <div style={badge}>{set.subject?.[0] || 'Q'}</div>
        <div>
          <div style={mutedSmall}>
            {set.subject} · Age {set.age}
          </div>
          <h1 style={h1}>Question {index + 1} / {total}</h1>
        </div>
      </header>

      <div style={cardBox}>
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 10 }}>{q.prompt}</div>

        <div style={{ display: 'grid', gap: 8 }}>
          {q.options.map((opt, i) => {
            const chosen = selected === i;
            const showCorrect = isChecked && i === q.answerIndex;
            const showWrong = isChecked && chosen && !showCorrect;
            return (
              <button
                key={i}
                onClick={() => !isChecked && setSelected(i)}
                className="quiz-opt"
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderRadius: 12,
                  border: '1px solid #e5e7eb',
                  background: chosen ? '#eef2ff' : '#fff',
                  outline: 'none',
                  cursor: isChecked ? 'default' : 'pointer',
                  ...(showCorrect ? { background: '#dcfce7', borderColor: '#86efac' } : {}),
                  ...(showWrong ? { background: '#fee2e2', borderColor: '#fecaca' } : {}),
                }}
                disabled={isChecked}
              >
                <span style={{ fontWeight: 600, marginRight: 8 }}>{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {!isChecked ? (
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <button
              style={{ ...btnPrimary, opacity: selected == null ? 0.6 : 1, cursor: selected == null ? 'not-allowed' : 'pointer' }}
              onClick={checkAnswer}
              disabled={selected == null}
            >
              Check answer
            </button>
            <button style={btnGhost} onClick={() => (onExit ? onExit() : (window.location.href = '/'))}>Quit</button>
          </div>
        ) : (
          <>
            <div style={{ marginTop: 14 }}>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: 999,
                  background: isCorrect ? '#dcfce7' : '#fee2e2',
                  color: isCorrect ? '#065f46' : '#991b1b',
                  fontWeight: 700,
                }}
              >
                {isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            </div>

            {q.explanation && (
              <div style={{ marginTop: 12, background: '#f8fafc', border: '1px solid #eef2f7', padding: 12, borderRadius: 10 }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Why?</div>
                <div style={{ color: '#374151' }}>{q.explanation}</div>
              </div>
            )}

            {q.videoUrl && (
              <div style={{ marginTop: 10 }}>
                <a href={q.videoUrl} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 700 }}>
                  Watch a short video →
                </a>
              </div>
            )}

            <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
              <button style={btnPrimary} onClick={next}>
                {index < total - 1 ? 'Next question' : 'See results'}
              </button>
              <button style={btnGhost} onClick={restart}>Restart</button>
            </div>
          </>
        )}
      </div>

      <footer style={{ marginTop: 12, color: '#6b7280', fontSize: 13 }}>
        Tip: your time per question is tracked automatically when you press “Check answer”.
      </footer>
    </div>
  );
}

/* ------------------------- UI helpers ------------------------- */

function Card({ title, value }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 12 }}>
      <div style={{ fontSize: 12, color: '#6b7280' }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 800 }}>{value}</div>
    </div>
  );
}

const Th = (p) => <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: 12, color: '#6b7280' }} {...p} />;
const Td = (p) => <td style={{ padding: '10px 12px', fontSize: 14 }} {...p} />;

const wrap = { maxWidth: 820, margin: '18px auto', padding: '0 14px 24px' };
const header = { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 };
const badge = {
  width: 42,
  height: 42,
  borderRadius: 10,
  background: '#1d4ed8',
  color: '#fff',
  fontWeight: 800,
  display: 'grid',
  placeItems: 'center',
  boxShadow: '0 8px 20px rgba(29,78,216,.25)',
};
const mutedSmall = { fontSize: 12, color: '#6b7280' };
const h1 = { fontSize: 24, lineHeight: 1.25, fontWeight: 800, margin: 0 };
const h3 = { fontSize: 18, fontWeight: 800, margin: '0 0 8px' };
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 10 };
const cardBox = { border: '1px solid #eee', borderRadius: 14, padding: 14, background: '#fff' };
const btnPrimary = {
  background: '#1d4ed8',
  color: '#fff',
  border: 'none',
  borderRadius: 10,
  padding: '10px 14px',
  fontWeight: 700,
};
const btnGhost = {
  background: '#fff',
  color: '#1f2937',
  border: '1px solid #e5e7eb',
  borderRadius: 10,
  padding: '10px 14px',
  fontWeight: 700,
  cursor: 'pointer',
};
