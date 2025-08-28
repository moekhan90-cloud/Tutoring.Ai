// components/Quiz.jsx
import { useEffect, useRef, useState } from 'react';

/**
 * Expects prop `set` with shape:
 * {
 *   age: number,
 *   subject: 'Maths' | 'English' | 'Science',
 *   questions: [{
 *     id: string,
 *     prompt: string,
 *     options: string[],         // length 5
 *     answerIndex: number,       // 0..4
 *     explanation: string,
 *     videoUrl?: string,
 *     topic?: string,
 *     timeLimitSeconds?: number  // optional per-question override
 *   }]
 * }
 */

function cls(...a) {
  return a.filter(Boolean).join(' ');
}

export default function Quiz({ set, onFinish }) {
  const total = set?.questions?.length ?? 0;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);          // number | null
  const [showAnswer, setShowAnswer] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(() => set?.questions?.[0]?.timeLimitSeconds ?? 30);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);              // { id, topic, correct, time }
  const postedRef = useRef(false);

  const q = set?.questions?.[index];
  const finished = index >= total - 1 && showAnswer;

  // Reset state when moving to a new question
  useEffect(() => {
    if (!q) return;
    setSecondsLeft(q.timeLimitSeconds ?? 30);
    setSelected(null);
    setShowAnswer(false);
  }, [index, q?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Timer tick
  useEffect(() => {
    if (!q) return;
    if (showAnswer) return;           // pause while showing answer
    if (secondsLeft <= 0) {
      handleReveal();                 // auto-reveal on timeout
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, showAnswer, q?.id]);

  // Auto-save attempt when finished (requires logged-in user; otherwise 401 is fine)
  useEffect(() => {
    if (!finished || postedRef.current) return;
    postedRef.current = true;

    const avg = history.length
      ? Math.round(history.reduce((a, b) => a + b.time, 0) / history.length)
      : 0;

    const payload = {
      age: set.age,
      subject: set.subject,
      score,
      total,
      avgTimeSec: avg,
      results: history.map((h) => ({
        id: h.id,
        topic: h.topic ?? null,
        correct: !!h.correct,
        time: h.time ?? 0
      }))
    };

    (async () => {
      try {
        const res = await fetch('/api/results/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        // 401 (not logged in) and other non-2xx responses are tolerated silently
      } catch {
        // network error – ignore silently
      } finally {
        if (typeof onFinish === 'function') onFinish(payload);
      }
    })();
  }, [finished]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!q) {
    return (
      <div className="container" style={{ paddingTop: 24 }}>
        <div className="card" role="status" aria-live="polite">
          <h2 style={{ margin: 0 }}>No questions found</h2>
          <p style={{ marginTop: 6, color: 'var(--muted)' }}>
            Add items to this set to start the quiz.
          </p>
          <a href="/start" className="btn btn-primary" style={{ marginTop: 10 }}>
            Pick a subject & age
          </a>
        </div>
      </div>
    );
  }

  const progress = total ? (index / total) * 100 : 0;

  function handleSelect(i) {
    if (showAnswer) return;
    setSelected(i);
  }

  function handleReveal() {
    if (showAnswer) return;
    const correct = selected === q.answerIndex;
    setShowAnswer(true);
    setScore((s) => (correct ? s + 1 : s));
    const spent = (q.timeLimitSeconds ?? 30) - Math.max(0, secondsLeft);
    setHistory((h) => [
      ...h,
      { id: q.id, topic: q.topic, correct, time: spent }
    ]);
  }

  function handleNext() {
    if (index + 1 < total) {
      setIndex((i) => i + 1);
    } else {
      setShowAnswer(true); // already finished; summary shows below
    }
  }

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      {/* Header & progress */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12
          }}
        >
          <div>
            <div style={{ fontSize: 14, color: 'var(--muted)' }}>
              {set.subject} · Age {set.age}
            </div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>
              {q.topic || 'Question'}
            </div>
          </div>
          <div className="kbd" aria-live="polite">⏱ {secondsLeft}s</div>
        </div>

        <div className="progress" style={{ marginTop: 12 }} aria-label="Progress">
          <span style={{ width: `${progress}%` }} />
        </div>

        <div style={{ marginTop: 12, fontWeight: 600 }}>
          {index + 1} / {total}
        </div>
      </div>

      {/* Question card */}
      {!(index >= total && showAnswer) && (
        <div className="card">
          <p style={{ fontSize: 18, marginTop: 0 }}>{q.prompt}</p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {q.options.map((opt, i) => {
              const pickedWrong = showAnswer && selected === i && i !== q.answerIndex;
              const isCorrect = showAnswer && i === q.answerIndex;
              const className = cls('option', isCorrect && 'correct', pickedWrong && 'wrong');
              const label = `${String.fromCharCode(65 + i)}. ${opt}`;
              return (
                <li key={i} style={{ marginTop: 8 }}>
                  <button
                    type="button"
                    onClick={() => handleSelect(i)}
                    className={className}
                    aria-pressed={selected === i}
                    aria-describedby={showAnswer ? `ex-${q.id}` : undefined}
                  >
                    <span className="kbd" style={{ marginRight: 8 }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {label.slice(3)}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Controls */}
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            {!showAnswer ? (
              <button
                type="button"
                onClick={handleReveal}
                disabled={selected === null && secondsLeft > 0}
                className={cls('btn', 'btn-primary')}
                style={{ opacity: selected === null && secondsLeft > 0 ? 0.6 : 1 }}
              >
                Check answer
              </button>
            ) : (
              <button type="button" onClick={handleNext} className={cls('btn', 'btn-primary')}>
                {index + 1 < total ? 'Next' : 'Finish'}
              </button>
            )}
          </div>

          {/* Solution / Explanation */}
          {showAnswer && (
            <div id={`ex-${q.id}`} className="card" style={{ marginTop: 12 }} aria-live="polite">
              <p style={{ margin: 0, fontWeight: 700 }}>
                ✅ Correct answer: {String.fromCharCode(65 + q.answerIndex)}. {q.options[q.answerIndex]}
              </p>
              <p style={{ marginTop: 6, color: 'var(--muted)' }}>{q.explanation}</p>
              {q.videoUrl && (
                <a
                  href={q.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ marginTop: 8 }}
                >
                  📺 Watch: Learning video
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Finished summary */}
      {finished && (
        <Summary
          subject={set.subject}
          age={set.age}
          score={score}
          total={total}
          history={history}
        />
      )}
    </div>
  );
}

function Summary({ subject, age, score, total, history }) {
  const avg = history.length
    ? Math.round(history.reduce((a, b) => a + b.time, 0) / history.length)
    : 0;
  const accuracy = total ? Math.round((score / total) * 100) : 0;

  return (
    <div className="card" style={{ padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 22, fontWeight: 800 }}>Finished! 🎉</h2>
      <p style={{ marginTop: 4, color: 'var(--muted)' }}>
        {subject} · Age {age}
      </p>

      <div
        style={{
          display: 'grid',
          gap: 12,
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          marginTop: 12
        }}
      >
        <Stat label="Score" value={`${score}/${total}`} accent />
        <Stat label="Accuracy" value={`${accuracy}%`} />
        <Stat label="Avg. time / question" value={`${avg}s`} />
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a href="/start" className="btn btn-primary">Try another set</a>
        <a href="/" className="btn btn-ghost">Back to home</a>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }) {
  return (
    <div className="card" style={{ border: accent ? '2px solid var(--primary-100)' : undefined }}>
      <div style={{ fontSize: 24, fontWeight: 800 }}>{value}</div>
      <div style={{ color: 'var(--muted)', fontSize: 14 }}>{label}</div>
    </div>
  );
}
