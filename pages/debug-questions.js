// pages/debug-questions.js
import { getQuestionSet } from "../data/questions-index";

export default function DebugQuestionsPage() {
  // Load some sample ages + subjects
  const ages = [8, 10, 12, 15];
  const subjects = ["Maths", "English", "Science"];

  const debugData = {};

  ages.forEach((age) => {
    subjects.forEach((subject) => {
      debugData[`${subject} Age ${age}`] = getQuestionSet(age, subject);
    });
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Debug Questions</h1>
      <pre style={{ whiteSpace: "pre-wrap", fontSize: "14px" }}>
        {JSON.stringify(debugData, null, 2)}
      </pre>
    </div>
  );
}
