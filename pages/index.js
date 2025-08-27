// pages/index.js
import Link from "next/link";
import { useState } from "react";

const SUBJECTS = [
  { value: "math", label: "Mathematics" },
  { value: "english", label: "English" },
  { value: "science", label: "Science" },
];

const AGES = ["10", "11", "12", "13", "14", "15"];

export default function Home() {
  const [age, setAge] = useState("12"); // default quick-links age

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto p-6">
        <header className="text-center mt-12 mb-10 space-y-4">
          <h1 className="text-4xl font-bold">Tutoring AI</h1>
          <p className="text-lg text-gray-600">
            Practice timed questions in <b>Maths</b>, <b>English</b>, and <b>Science</b> for ages 10–15.
            Get instant feedback on accuracy, speed, and topics you’re struggling with.
          </p>

          <Link
            href="/quiz"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white text-lg hover:brightness-110 transition"
          >
            Start a Quiz
          </Link>
        </header>

        {/* Quick subject shortcuts */}
        <section className="rounded-2xl bg-white p-6 shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <h2 className="text-xl font-semibold">Quick start by subject</h2>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Age:</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="rounded-xl border border-gray-300 p-2"
              >
                {AGES.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {SUBJECTS.map((s) => (
              <Link
                key={s.value}
                href={`/quiz/${s.value}?age=${age}`}
                className="rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white p-5 shadow-sm hover:shadow transition"
              >
                <div className="text-lg font-semibold">{s.label}</div>
                <div className="text-sm text-gray-600">Age {age}</div>
                <div className="mt-3 text-sm text-blue-700 underline">Take quiz →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Extras */}
        <section className="mt-10 grid sm:grid-cols-3 gap-4">
          <Feature title="Timed questions" text="Each question is timed to track fluency and speed." />
          <Feature title="Topic insights" text="See accuracy and timing by topic to spot weak areas." />
          <Feature title="Ages 10–15" text="Appropriate content across Maths, English, and Science." />
        </section>
      </main>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <div className="text-base font-semibold">{title}</div>
      <p className="text-sm text-gray-600 mt-1">{text}</p>
    </div>
  );
}

