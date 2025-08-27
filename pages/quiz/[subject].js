// /pages/quiz/[subject].js
import { useState } from "react";
import questions from "@/data/questions";
import Quiz from "@/components/Quiz";

export default function SubjectQuiz({ subject, items }) {
  const [result, setResult] = useState(null);

  if (!items?.length) {
    return (
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">No questions</h1>
        <p className="text-gray-600 mt-2">We don't have questions for "{subject}" yet.</p>
      </div>
    );
  }

  return result ? <Results result={result} /> : (
    <Quiz subject={subject} items={items} onFinish={setResult} />
  );
}

export async function getServerSideProps({ params }) {
  const subject = params.subject?.toLowerCase() || "";
  const items = questions[subject] || [];
  return { props: { subject, items } };
}

function Results({ result }) {
  const { overall, topics, perQuestion, struggling } = result;
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="rounded-2xl p-6 shadow bg-white">
        <h1 className="text-2xl font-semibold mb-2">Your results</h1>
        <p className="text-gray-700">
          Score: <b>{overall.correct}/{overall.total}</b> ({overall.accuracy}%)
          &nbsp;•&nbsp; Avg time/question: <b>{overall.avgTime}s</b>
        </p>
        {struggling.length > 0 ? (
          <p className="mt-2">
            🔎 You may be struggling with: <b>{struggling.join(", ")}</b>.
          </p>
        ) : (
          <p className="mt-2">🚀 No clear weak spots — great job!</p>
        )}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl p-6 shadow bg-white">
        <h2 className="text-xl font-semibold mb-3">Per question</h2>
        <ul className="space-y-2">
          {perQuestion.map((r) => (
            <li key={r.id} className="flex justify-between border rounded-xl p-3">
              <span>#{r.id} • {r.topic}</span>
              <span>{r.correct ? "✅" : "❌"} • {r.time}s</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
