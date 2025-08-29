// components/Quiz.jsx
import { useEffect, useMemo, useState } from 'react';

function cls(...a) {
  return a.filter(Boolean).join(' ');
}

export default function Quiz({ set }) {
  // set = { age, subject, questions: [...] }
  const questions = set?.questions ?? [];

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // timing
  const [questionStartTs, setQuestionStartTs] = useState(() => Date.now());
  const [totalElapsedMs, setTotalElapsedMs] = useState(0);

  // scoring + history
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  const q = questions[index];

  // Reset per-question UI when index changes, and start a new timer
  useEffect(() => {
    setSelected(null);
    setShowAnswer(false);
    setQuestionStartTs(Date.now());
  }, [index]);

  // Handle answer selection
  function chooseOption(i) {
    if (showAnswer) return; // lock after revealing
    setSelected(i);
  }

  // Reveal answer + record timing for this question
  function reveal() {
    if (!q || showAnswer) return;

    const now = Date.now();
    const timeMs = now - questionStartTs;

    const correct = selected === q.answerIndex;
    if (correct) setScore(s => s + 1);

    setTotalElapsedMs(ms => ms + timeMs);

    // push into history
    setHistory(h => [
      ...h,
      {
        qid: q.id,
        prompt: q.prompt,
        topic: q.topic,
        selected,
        correctAnswer: q.answerIndex,
        correct,
        timeMs,
      },
    ]);

    setShowAnswer(true);
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex(i => i + 1);
    } else {
      // finished – optionally do something (analytics, API call, etc.)
      // For now we just keep the summary on screen.
    }
  }

  const finished = index >= questions.length;
  const percent = useMemo(() => {
    if (!questions.length) return 0;
    return Math.round((score / questions.length) * 100);
  }, [score, questions.length]);

  function fmt(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const ss = String(s % 60).padStart(2, '0');
    return `${m}:${ss}`;
  }

  if (!questions.length) {
    return (
      <div className="mx-auto max-w-2xl p-4 text-center">
        <h2 className="text-2xl font-semibold">No questions found</h2>
        <p className="text-gray-600 mt-2">
          We couldn’t find questions for <b>{set?.subject}</b> (age {set?.age}).<br />
          Please check your <code>data/questions-age{String(set?.age)}.js</code> file exports for that subject.
        </p>
      </div>
    );
  }

  // Finished summary
  if (finished) {
    return (
      <div className="mx-auto max-w-3xl p-4">
        <h2 className="text-3xl font-bold mb-2">Great work!</h2>
        <p className="text-gray-700">
          Subject: <b>{set.subject}</b> · Age: <b>{set.age}</b>
        </p>
        <p className="mt-2 text-lg">
          Score: <b>{score}</b> / {questions.length} ({percent}%)
        </p>
        <p className="text-lg">Total time: <b>{fmt(totalElapsedMs)}</b></p>

        <div className="mt-6 border rounded-lg divide-y">
          {history.map((h, i) => {
            const correct = h.correct;
            return (
              <div key={h.qid} className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Q{i + 1} · {h.topic}</div>
                    <div className="font-medium">{h.prompt}</div>
                    <div className="mt-1 text-sm">
                      Your answer: <b>{h.selected != null ? qOptionLabel(h.selected) : '—'}</b>{' '}
                      {correct ? (
                        <span className="ml-2 rounded bg-green-100 text-green-800 px-2 py-0.5 text-xs">Correct</span>
                      ) : (
                        <span className="ml-2 rounded bg-red-100 text-red-800 px-2 py-0.5 text-xs">Incorrect</span>
                      )}
                    </div>
                    {!correct && (
                      <div className="text-sm text-gray-600 mt-1">
                        Correct answer: <b>{qOptionLabel(h.correctAnswer)}</b>
                      </div>
                    )}
                  </div>
                  <div className="shrink-0 text-sm text-gray-700">
                    Time: <b>{fmt(h.timeMs)}</b>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Helper to show labels for options by index (used in summary)
  function qOptionLabel(i) {
    // We may not have access to original q here (we're in summary), but history stores indexes.
    // For labels in summary we don't need the exact text; if you prefer exact text,
    // also store `options` per history item above.
    return `Option ${i + 1}`;
  }

  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="mb-4">
        <div className="text-sm text-gray-500">
          {set.subject} · Age {set.age} · Question {index + 1} of {questions.length}
        </div>
        <h2 className="text-2xl font-semibold mt-1">{q.prompt}</h2>
        {q.topic && <div className="mt-1 text-gray-600 text-sm">Topic: {q.topic}</div>}
      </div>

      <div className="grid gap-3">
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          // Highlight after reveal
          const isCorrect = showAnswer && i === q.answerIndex;
          const isWrong   = showAnswer && isSelected && i !== q.answerIndex;

          return (
            <button
              key={i}
              onClick={() => chooseOption(i)}
              className={cls(
                'text-left rounded-lg border p-3 transition',
                isSelected && !showAnswer && 'border-blue-500 ring-2 ring-blue-200',
                isCorrect && 'border-green-600 bg-green-50',
                isWrong && 'border-red-600 bg-red-50',
                !isSelected && !showAnswer && 'hover:border-gray-400'
              )}
              disabled={showAnswer}
            >
              <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {!showAnswer ? (
          <button
            onClick={reveal}
            disabled={selected == null}
            className={cls(
              'rounded-lg px-4 py-2 text-white',
              selected == null ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            )}
          >
            Check answer
          </button>
        ) : (
          <button
            onClick={next}
            className="rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {index < questions.length - 1 ? 'Next question' : 'See results'}
          </button>
        )}

        {/* Timing info (informational only) */}
        <span className="text-sm text-gray-600 ml-auto">
          Total time so far: <b>{fmt(totalElapsedMs)}</b>
        </span>
      </div>

      {showAnswer && (
        <div className="mt-4 rounded-lg border bg-gray-50 p-3">
          <div className="font-medium">
            Correct answer: {String.fromCharCode(65 + q.answerIndex)} — {q.options[q.answerIndex]}
          </div>
          {q.explanation && <div className="text-gray-700 mt-1">{q.explanation}</div>}
          {q.videoUrl && (
            <a
              href={q.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              Watch a quick refresher
            </a>
          )}
        </div>
      )}
    </div>
  );
}
