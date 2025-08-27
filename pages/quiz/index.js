// pages/quiz/index.js
import { useState } from "react";
import { useRouter } from "next/router";

const SUBJECTS = [
  { value: "math", label: "Mathematics" },
  { value: "english", label: "English" },
  { value: "science", label: "Science" },
];

const AGES = ["10", "11", "12", "13", "14", "15"];

export default function QuizStart() {
  const router = useRouter();
  const [subject, setSubject] = useState("math");
  const [age, setAge] = useState("10");
  const [error, setError] = useState("");

  function startQuiz(e) {
    e.preventDefault();
    if (!subject || !age) {
      setError("Please choose a subject and an age.");
      return;
    }
    router.push(`/quiz/${subject}?age=${age}`);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Start a Quiz</h1>
          <p className="text-gray-600 mt-2">
            Pick a subject and age. Each question is timed; you’ll get a summary of speed,
            accuracy, and topics you’re struggling with.
          </p>
        </header>

        <form
          onSubmit={startQuiz}
          className="rounded-2xl bg-white p-6 shadow space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3"
              >
                {SUBJECTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Age</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full rounded-xl border border-gray-300 p-3"
              >
                {AGES.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600">{error}</div>
          )}

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:brightness-110"
            >
              Start quiz
            </button>

            {/* Quick links for convenience */}
            <div className="text-sm text-gray-600">
              Quick start:&nbsp;
              <a
                className="underline hover:no-underline"
                href="/quiz/math?age=10"
              >
                Math 10
              </a>
              ,{" "}
              <a
                className="underline hover:no-underline"
                href="/quiz/english?age=12"
              >
                English 12
              </a>
              ,{" "}
              <a
                className="underline hover:no-underline"
                href="/quiz/science?age=15"
              >
                Science 15
              </a>
            </div>
          </div>
        </form>

        {/* Optional subject tiles */}
        <section className="mt-10 grid sm:grid-cols-3 gap-4">
          {SUBJECTS.map((s) => (
            <button
              key={s.value}
              onClick={() => router.push(`/quiz/${s.value}?age=${age}`)}
              className="rounded-2xl bg-white p-5 shadow text-left hover:shadow-md transition"
            >
              <div className="text-lg font-semibold">{s.label}</div>
              <div className="text-sm text-gray-600">Age {age}</div>
            </button>
          ))}
        </section>
      </div>
    </div>
  );
}
