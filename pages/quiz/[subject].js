// pages/quiz/[subject].js
import { useState } from "react";
import questions from "@/data/questions";
import Quiz from "@/components/Quiz";

export default function SubjectQuiz({ subject, age, items }) {
  const [result, setResult] = useState(null);

  if (!items?.length) {
    return (
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">No questions yet</h1>
        <p className="text-gray-600 mt-2">
          We don't have questions for <b>{subject}</b> at age <b>{age}</b> yet.
        </p>
        <p className="text-gray-600 mt-2">
          Try a different age using <code>?age=10</code> to <code>?age=15</code> in the URL.
        </p>
      </div>
    );
  }

  return result ? (
    <Results subject={subject} age={age} result={result} />
  ) : (
    <Quiz subject={subject} items={items} onFinish={setResult} />
  );
}

// ✅ Server-side: load subject + age, return items for this quiz
export async function getServerSideProps({ params, query }) {
  const subject = (params.subject || "").toLowerCase();
  const age = String(query.age || "10"); // default age 10 if none provided
  const items = questions[subject]?.[age] || [];
  return { props: { subject, age, items } };
}

// ────────────────────────────────────────────────────────────────────────────────
// Results UI (summaries + tables) — uses the summary object from Quiz.onFinish
function Results({ subject, age, result }) {
  const { overall, topics, perQuestion, struggling } = result;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="rounded-2xl p-6 shadow bg-white">
        <h1 className="text-2xl font-semibold mb-2 capitalize">
          {subject} • Age {age} — Results
        </h1>
        <p className="text-gray-700">
          Score: <b>{overall.correct}/{overall.total}</b> ({overall.accuracy}%) • Avg time:
          {" "}<b>{overall.avgTime}s</b>
        </p>
        {struggling?.length ? (
          <p className="mt-2">
            🔎 You may be struggling with: <b>{struggling.join(", ")}</b>.
          </p>
        ) : (
          <p className="mt-2">🚀 No obvious weak spots — great job!</p>
        )}
        <div className="mt-4">
          <a
            href={`/quiz/${subject}?age=${age}`}
            className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            Try again
          </a>
        </div>
      </div>

      <div className="rounded-2xl p-6 shadow bg-white">
        <h2 className="text-xl font-semibold mb-3">By topic</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Topic</th>
                <th>Seen</th>
                <th>Accuracy</th>
                <th>Avg Time (s)</th>
                <th>Target (s)</th>
                <th>Slow Factor</th>
              </tr>
            </thead>
            <tbody>
              {topics.map((t) => (
                <tr key={t.topic} className="border-b">
                  <td className="py-2">{t.topic}</td>
                  <td>{t.seen}</td>
                  <td>{t.accuracy}%</td>
                  <td>{t.avgTime}</td>
                  <td>{t.targetAvg}</td>
                  <td>{t.slowFactor}×</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl p-6 shadow bg-white">
        <h2 className="text-xl font-semibold mb-3">Per question</h2>
        <ul className="space-y-2">
          {perQuestion.map((r, idx) => (
            <li key={r.id} className="flex justify-between border rounded-xl p-3">
              <span>
                Q{idx + 1}: <b>{r.id}</b> • {r.topic}
              </span>
              <span>{r.correct ? "✅" : "❌"} • {r.time}s</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
