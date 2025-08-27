// /components/Quiz.js
import { useEffect, useMemo, useRef, useState } from "react";

export default function Quiz({ subject, items, onFinish }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [times, setTimes] = useState([]);         // per-question seconds
  const [correct, setCorrect] = useState([]);     // per-question booleans
  const timerRef = useRef(null);

  const q = items[i];
  const isLast = i === items.length - 1;

  // start/continue timer
  useEffect(() => {
    timerRef.current && clearInterval(timerRef.current);
    setSeconds(0);
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timerRef.current);
  }, [i]);

  function submitCurrent() {
    // record time & correctness
    const thisCorrect = picked === q.answerIndex;
    setCorrect((arr) => [...arr, thisCorrect]);
    setTimes((arr) => [...arr, seconds]);
    setPicked(null);

    if (!isLast) {
      setI((x) => x + 1);
    } else {
      clearInterval(timerRef.current);
      const result = buildSummary(items, correct.concat(thisCorrect), times.concat(seconds));
      onFinish?.(result);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <header className="flex items-baseline justify-between">
        <h1 className="text-2xl font-semibold capitalize">{subject} quiz</h1>
        <div className="text-sm">Question {i + 1} / {items.length}</div>
      </header>

      <div className="rounded-2xl p-5 shadow bg-white">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-medium">{q.prompt}</p>
          <span className="text-sm px-3 py-1 rounded-full bg-gray-100">⏱ {seconds}s</span>
        </div>

        <ul className="space-y-2">
          {q.choices.map((c, idx) => (
            <li key={idx}>
              <button
                onClick={() => setPicked(idx)}
                className={`w-full text-left p-3 rounded-xl border hover:shadow 
                  ${picked === idx ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200"}`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between text-sm">
          <div>
            Target: {q.targetSeconds ?? 0}s • Topic: <span className="font-medium">{q.topic}</span>
          </div>
          <button
            disabled={picked === null}
            onClick={submitCurrent}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white disabled:opacity-50"
          >
            {isLast ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Build analytics: accuracy, avg time, and struggling topics */
function buildSummary(items, correct, times) {
  const total = items.length;
  const byTopic = {};

  items.forEach((q, idx) => {
    const t = q.topic || "misc";
    if (!byTopic[t]) byTopic[t] = { seen: 0, right: 0, time: 0, target: 0 };
    byTopic[t].seen += 1;
    byTopic[t].right += correct[idx] ? 1 : 0;
    byTopic[t].time += times[idx] ?? 0;
    byTopic[t].target += q.targetSeconds ?? 0;
  });

  const topics = Object.entries(byTopic).map(([topic, v]) => {
    const acc = v.right / v.seen;
    const avgTime = v.time / v.seen;
    const targetAvg = v.target / v.seen || 0;
    const slowFactor = targetAvg ? avgTime / targetAvg : 1;

    return {
      topic,
      seen: v.seen,
      accuracy: +(acc * 100).toFixed(1),
      avgTime: +avgTime.toFixed(1),
      targetAvg: +targetAvg.toFixed(1),
      slowFactor: +slowFactor.toFixed(2),
      struggling:
        acc < 0.7 || slowFactor > 1.5 // tweak thresholds if you want
    };
  });

  const overall = {
    correct: correct.filter(Boolean).length,
    total,
    accuracy: +((correct.filter(Boolean).length / total) * 100).toFixed(1),
    avgTime: +(times.reduce((a, b) => a + b, 0) / total).toFixed(1)
  };

  const struggling = topics.filter((t) => t.struggling).map((t) => t.topic);

  return { overall, topics, perQuestion: items.map((q, i) => ({
    id: q.id, topic: q.topic, correct: !!correct[i], time: times[i]
  })), struggling };
}
