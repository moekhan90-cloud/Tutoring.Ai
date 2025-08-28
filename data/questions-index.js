// data/questions-index.js

// Import every age file you have.
// These files should each export an array named like AGE8_QUESTION_SETS, AGE9_QUESTION_SETS, etc.
// If you don’t have some ages yet, leave the import commented out or create a minimal file.

import { AGE8_QUESTION_SETS } from './questions-age8';
import { AGE9_QUESTION_SETS } from './questions-age9';
import { AGE10_QUESTION_SETS } from './questions-age10';
import { AGE11_QUESTION_SETS } from './questions-age11';
import { AGE12_QUESTION_SETS } from './questions-age12';
import { AGE13_QUESTION_SETS } from './questions-age13';
import { AGE14_QUESTION_SETS } from './questions-age14';
import { AGE15_QUESTION_SETS } from './questions-age15'; // we created this earlier

// Merge everything into one array
export const ALL_QUESTION_SETS = [
  ...(AGE8_QUESTION_SETS || []),
  ...(AGE9_QUESTION_SETS || []),
  ...(AGE10_QUESTION_SETS || []),
  ...(AGE11_QUESTION_SETS || []),
  ...(AGE12_QUESTION_SETS || []),
  ...(AGE13_QUESTION_SETS || []),
  ...(AGE14_QUESTION_SETS || []),
  ...(AGE15_QUESTION_SETS || [])
];

// Helper to fetch a specific set by age + subject.
export function getQuestionSet(age, subject) {
  const set = ALL_QUESTION_SETS.find(
    s => String(s.age) === String(age) && s.subject === subject
  );
  if (!set) {
    console.warn(`[questions-index] No set for age=${age}, subject=${subject}`);
    return { age: Number(age), subject, questions: [] };
  }
  if (!Array.isArray(set.questions)) {
    console.warn(`[questions-index] questions is not an array for age=${age}, subject=${subject}`);
    return { age: Number(age), subject, questions: [] };
  }
  return set;
}

// Optional: expose available subjects/ages to build menus
export const AVAILABLE = (() => {
  const byAge = {};
  for (const s of ALL_QUESTION_SETS) {
    byAge[s.age] = byAge[s.age] || new Set();
    byAge[s.age].add(s.subject);
  }
  // convert Set to array for easier rendering
  return Object.fromEntries(
    Object.entries(byAge).map(([age, set]) => [age, Array.from(set)])
  );
})();
