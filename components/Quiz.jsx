// components/Quiz.jsx
import { useEffect, useState } from 'react';

function cls(...a){ return a.filter(Boolean).join(' '); }

export default function Quiz({ set }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(() => set.questions[0]?.timeLimitSeconds ?? 30);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  const q = set.questions[index];

  useEffect(() => {
    setSecondsLeft(q?.timeLimitSeconds ?? 30);
    setSelected(null);
    setShowAnswer(false);
  }, [index]);

  useEffect(() => {
    if (showAnswer || secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft(s => Math.max(0, s - 1)), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft, showAnswer]);

  useEffect(() => {
    if (secondsLeft === 0 && !showAnswer) handleReveal();
  }, [secondsLeft]);

  if (!q) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold">No questions found</h2>
        <p className="mt-2 text-sm text-gray-600">Add items to this set to start the quiz.</p>
      </div>
    );
  }

  const progress = (index / set.questions.length) * 100;

  function handleReveal() {
    if (showAnswer) return;
    const correct = selected === q.answerIndex;
    setShowAnswer(true);
    if (correct) setScore(s => s + 1);
    setHistory(h => [...h, { id: q.id, correct, time: (q.timeLimitSeconds ?? 30) - secondsLeft }]);
  }

  function handleNext() {
    if (index + 1 < set.questions.length) setIndex(i => i + 1);
    else setShowAnswer(true);
  }

  const finished = index >= set.questions.length - 1 && showAnswer;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">{set.subject} · Age {set.age}</h1>
          <div className="text-sm text-gray-600">{index + 1} / {set.questions.length}</div>
        </div>
        <div className="h-2 rounded bg-gray-200 mt-2">
          <div className="h-full rounded bg-blue-500 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {!finished && (
        <>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-medium">{q.prompt}</p>
            <div className="px-3 py-1 rounded-full text-sm bg-gray-100">⏱ {secondsLeft}s</div>
          </div>

          <ul className="space-y-2">
            {q.options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => !showAnswer && setSelected(i)}
                  className={cls(
                    'w-full text-left p-3 rounded-xl border transition',
                    selected === i && !showAnswer && 'border-blue-500 ring-2 ring-blue-300',
                    showAnswer && i === q.answerIndex && 'border-green-500 bg-green-50',
                    showAnswer && selected === i && i !== q.answerIndex && 'border-red-500 bg-red-50',
                    !showAnswer && 'hover:bg-gray-50'
                  )}
                >
                  <span className="mr-2 font-semibold">{String.fromCharCode(65 + i)}.</span> {opt}
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
              <button onClick={handleNext} className="px-4 py-2 rounded-xl bg-blue-600 text-white shadow">
                {index + 1 < set.questions.length ? 'Next' : 'Finish'}
              </button>
            )}
          </div>

          {showAnswer && (
            <div className="mt-4 p-4 rounded-xl bg-gray-50 border">
              <p className="font-semibold">
                ✅ Correct answer: {String.fromCharCode(65 + q.answerIndex)}. {q.options[q.answerIndex]}
              </p>
              <p className="text-sm text-gray-700 mt-1">{q.explanation}</p>
              {q.videoUrl && (
                <a href={q.videoUrl} target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm underline">
                  📺 Watch: Learning video
                </a>
              )}
            </div>
          )}
        </>
      )}

      {finished && <Summary subject={set.subject} age={set.age} score={score} total={set.questions.length} history={history} />}
    </div>
  );
}

function Summary({ subject, age, score, total, history }) {
  const avg = history.length ? Math.round(history.reduce((a, b) => a + b.time, 0) / history.length) : 0;
  const accuracy = total ? Math.round((score / total) * 100) : 0;
  return (
    <div className="p-6 rounded-2xl bg-white shadow">
      <h2 className="text-2xl font-bold">Finished! 🎉</h2>
      <p className="mt-2">{subject} · Age {age}</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-green-50 border">
          <div className="text-3xl font-bold">{score}/{total}</div>
          <div className="text-sm text-green-700">Score</div>
        </div>
        <div className="p-4 rounded-xl bg-blue-50 border">
          <div className="text-3xl font-bold">{accuracy}%</div>
          <div className="text-sm text-blue-700">Accuracy</div>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-xl bg-gray-50 border">
        <div className="text-sm text-gray-700">Avg. time per question: <span className="font-semibold">{avg}s</span></div>
      </div>
    </div>
  );
}
