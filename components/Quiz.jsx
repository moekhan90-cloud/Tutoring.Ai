// components/Quiz.jsx
'use client';

import React, { useEffect, useState } from 'react';

function cls(...a) {
  return a.filter(Boolean).join(' ');
}

export default function Quiz({ set }) {
  // Guard: if the page passed nothing in, show a friendly message
  if (!set || !set.questions || set.questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-xl font-semibold">No questions found</h2>
        <p className="mt-2 text-sm text-gray-600">
          We couldn’t find any questions for this selection.
        </p>
      </div>
    );
  }

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null); // number | null
  const [showAnswer, setShowAnswer] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(
    set.questions[0]?.timeLimitSeconds ?? 30
  );
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]); // {id, correct, time}[]

  const q = set.questions[index];

  // Reset state on question change
  useEffect(() => {
    setSecondsLeft(q?.timeLimitSeconds ?? 30);
    setSelected(null);
    setShowAnswer(false);
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  // Countdown timer (paused while answer is shown)
  useEffect(() => {
    if (showAnswer) return;
    if (secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft, showAnswer]);

  // Auto-reveal when time runs out
  useEffect(() => {
    if (secondsLeft === 0 && !showAnswer) {
      handleReveal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  const progress =
    set.questions.length > 0 ? (index / set.questions.length) * 100 : 0;

  function handleSelect(i) {
    if (showAnswer) return;
    setSelected(i);
  }

  function handleReveal() {
    if (showAnswer) return;
    const correct = selected === q.answerIndex;
    setShowAnswer(true);
    if (correct) setScore((s) => s + 1);
    const spent = (q.timeLimitSeconds ?? 30) - secondsLeft;
    setHistory((h) => [...h, { id: q.id, correct, time: spent }]);
  }

  function handleNext() {
    if (index + 1 < set.questions.length) {
      setIndex((i) => i + 1);
    } else {
      setShowAnswer(true);
    }
  }

  const finished = index >= set.questions.length - 1 && showAnswer;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            {set.subject} · Age {set.age}
          </h1>
          <div className="text-sm text-gray-600">
            {Math.min(index + 1, set.questions.length)} / {set.questions.length}
          </div>
        </div>
        <div className="h-2 rounded bg-gray-200 mt-2">
          <div
            className="h-full rounded bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {!finished && q && (
        <>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-medium">{q.prompt}</p>
            <div className="px-3 py-1 rounded-full text-sm bg-gray-100">
              ⏱ {secondsLeft}s
            </div>
          </div>

          <ul className="space-y-2">
            {q.options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(i)}
                  className={cls(
                    'w-full text-left p-3 rounded-xl border transition',
                    !showAnswer && 'hover:bg-gray-50',
                    selected === i && !showAnswer && 'border-blue-500 ring-2 ring-blue-300',
                    showAnswer && i === q.answerIndex && 'border-green-500 bg-green-50',
                    showAnswer &&
                      selected === i &&
                      i !== q.answerIndex &&
                      'border-red-500 bg-red-50'
                  )}
                >
                  <span className="mr-2 font-semibold">
                    {String.fromCharCode(65 + i)}.
                  </span>{' '}
                  {opt}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex gap-2">
            {!showAnswer ? (
              <button
                onClick={handleReveal}
                disabled={selected === null && secondsLeft > 0}
                className="px-4 py-2 rounded-xl bg-blue-600 disabled:opacity-40 text-white shadow"
              >
                Check answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white shadow"
              >
                {index + 1 < set.questions.length ? 'Next' : 'Finish'}
              </button>
            )}
          </div>

          {showAnswer && (
            <div className="mt-4 p-4 rounded-xl bg-gray-50 border">
              <p className="font-semibold">
                ✅ Correct answer: {String.fromCharCode(65 + q.answerIndex)}.{' '}
                {q.options[q.answerIndex]}
              </p>
              <p className="text-sm text-gray-700 mt-1">{q.explanation}</p>
              {q.videoUrl && (
                <a
                  href={q.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm underline"
                >
                  📺 Watch: Learning video
                </a>
              )}
            </div>
          )}
        </>
      )}

      {finished && (
        <Summary
          subject={set.subject}
          age={set.age}
          score={score}
          total={set.questions.length}
          history={history}
        />
      )}
    </div>
  );
}

function Summary({ subject, age, score, total, history }) {
  const avg =
    history.length > 0
      ? Math.round(history.reduce((a, b) => a + b.time, 0) / history.length)
      : 0;
  const accuracy = total ? Math.round((score / total) * 100) : 0;

  return (
    <div className="p-6 rounded-2xl bg-white shadow">
      <h2 className="text-2xl font-bold">Finished! 🎉</h2>
      <p className="mt-2">
        {subject} · Age {age}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-green-50 border">
          <div className="text-3xl font-bold">
            {score}/{total}
          </div>
          <div className="text-sm text-green-700">Score</div>
        </div>
        <div className="p-4 rounded-xl bg-blue-50 border">
          <div className="text-3xl font-bold">{accuracy}%</div>
          <div className="text-sm text-blue-700">Accuracy</div>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-xl bg-gray-50 border">
        <div className="text-sm text-gray-700">
          Avg. time per question: <span className="font-semibold">{avg}s</span>
        </div>
      </div>
    </div>
  );
}
