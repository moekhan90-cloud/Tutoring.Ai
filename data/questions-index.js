// data/questions-index.js
// Central index for all question sets (ages 8–15, subjects: Maths, English, Science)

import { AGE8_QUESTION_SETS }  from './questions-age8';
import { AGE9_QUESTION_SETS }  from './questions-age9';
import { AGE10_QUESTION_SETS } from './questions-age10';
import { AGE11_QUESTION_SETS } from './questions-age11';
import { AGE12_QUESTION_SETS } from './questions-age12';
import { AGE13_QUESTION_SETS } from './questions-age13';
import { AGE14_QUESTION_SETS } from './questions-age14';
import { AGE15_QUESTION_SETS } from './questions-age15';

// Canonical keys used in your data files
export const SUBJECTS = ['Maths', 'English', 'Science'];
export const AGES = [8, 9, 10, 11, 12, 13, 14, 15];

// Some UIs may pass “Mathematics”; normalise here
function normaliseSubject(s) {
  if (!s) return 'Maths';
  const val = String(s).trim().toLowerCase();
  if (val === 'mathematics') return 'Maths';
  const found = SUBJECTS.find(k => k.toLowerCase() === val);
  return found || 'Maths';
}

// Merge everything into one flat array
export const ALL_QUESTION_SETS = [
  ...(AGE8_QUESTION_SETS  || []),
  ...(AGE9_QUESTION_SETS  || []),
  ...(AGE10_QUESTION_SETS || []),
  ...(AGE11_QUESTION_SETS || []),
  ...(AGE12_QUESTION_SETS || []),
  ...(AGE13_QUESTION_SETS || []),
  ...(AGE14_QUESTION_SETS || []),
  ...(AGE15_QUESTION_SETS || [])
].map(set => ({
  // Defensive tidy-up to avoid odd shapes
  age: Number(set.age),
  subject: normaliseSubject(set.subject),
  questions: Array.isArray(set.questions) ? set.questions : []
}));

/**
 * Fetch a specific set by age + subject.
 * Returns an object { age, subject, questions[] }.
 * If not found, returns an empty set (so the UI can show a friendly “no questions” card).
 */
export function getQuestionSet(age, subject) {
  const subj = normaliseSubject(subject);
  const targetAge = Number(age);
  const found = ALL_QUESTION_SETS.find(s => s.age === targetAge && s.subject === subj);
  if (!found) {
    if (typeof window !== 'undefined') {
      // Client-only warning (won't spam server logs)
      console.warn(`[questions-index] No set for age=${targetAge}, subject=${subj}`);
    }
    return { age: targetAge, subject: subj, questions: [] };
  }
  return found;
}

/**
 * Convenience: what subjects exist for each age?
 * Example: AVAILABLE['12'] -> ['Maths','English','Science']
 */
export const AVAILABLE = (() => {
  const byAge = {};
  for (const s of ALL_QUESTION_SETS) {
    if (!byAge[s.age]) byAge[s.age] = new Set();
    if (s.questions && s.questions.length) byAge[s.age].add(s.subject);
  }
  // Convert Set -> array
  return Object.fromEntries(
    Object.entries(byAge).map(([age, set]) => [age, Array.from(set).sort()])
  );
})();

/**
 * Convenience: all sets for a given age.
 */
export function getSetsForAge(age) {
  const targetAge = Number(age);
  return ALL_QUESTION_SETS.filter(s => s.age === targetAge && s.questions.length > 0);
}

/**
 * Convenience: all ages where a subject exists.
 */
export function getAgesForSubject(subject) {
  const subj = normaliseSubject(subject);
  const ages = new Set();
  for (const s of ALL_QUESTION_SETS) {
    if (s.subject === subj && s.questions.length > 0) ages.add(s.age);
  }
  return Array.from(ages).sort((a,b)=>a-b);
}
