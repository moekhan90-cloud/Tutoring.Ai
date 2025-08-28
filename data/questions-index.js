// data/questions-index.js
// Central index for all ages 8–15 and subjects Maths/English/Science.
// Safe against missing files, wrong subject strings, or empty question arrays.

import { AGE8_QUESTION_SETS  } from './questions-age8';
import { AGE9_QUESTION_SETS  } from './questions-age9';
import { AGE10_QUESTION_SETS } from './questions-age10';
import { AGE11_QUESTION_SETS } from './questions-age11';
import { AGE12_QUESTION_SETS } from './questions-age12';
import { AGE13_QUESTION_SETS } from './questions-age13';
import { AGE14_QUESTION_SETS } from './questions-age14';
import { AGE15_QUESTION_SETS } from './questions-age15';

// Canonical subject keys used by the data files:
export const SUBJECT_KEYS = ['Maths', 'English', 'Science'];
export const AGES = [8, 9, 10, 11, 12, 13, 14, 15];

// Normalise any UI labels to the internal keys
export function normaliseSubject(s) {
  if (!s) return 'Maths';
  const v = String(s).trim().toLowerCase();
  if (v === 'mathematics') return 'Maths';
  const hit = SUBJECT_KEYS.find(k => k.toLowerCase() === v);
  return hit || 'Maths';
}

// Defensive helper to make sure each imported bundle is an array
function safe(arr, label) {
  if (!Array.isArray(arr)) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[questions-index] Expected array from ${label}, got:`, arr);
      console.warn('→ Make sure that file exports:  export const ' + label + ' = [ ... ]');
    }
    return [];
  }
  return arr;
}

// Merge *all* ages into one flat array and tidy types
export const ALL_QUESTION_SETS = [
  ...safe(AGE8_QUESTION_SETS,  'AGE8_QUESTION_SETS'),
  ...safe(AGE9_QUESTION_SETS,  'AGE9_QUESTION_SETS'),
  ...safe(AGE10_QUESTION_SETS, 'AGE10_QUESTION_SETS'),
  ...safe(AGE11_QUESTION_SETS, 'AGE11_QUESTION_SETS'),
  ...safe(AGE12_QUESTION_SETS, 'AGE12_QUESTION_SETS'),
  ...safe(AGE13_QUESTION_SETS, 'AGE13_QUESTION_SETS'),
  ...safe(AGE14_QUESTION_SETS, 'AGE14_QUESTION_SETS'),
  ...safe(AGE15_QUESTION_SETS, 'AGE15_QUESTION_SETS'),
].map((set, i) => ({
  age: Number(set?.age),
  subject: normaliseSubject(set?.subject),
  questions: Array.isArray(set?.questions) ? set.questions : [],
  __index: i
}));

/**
 * Get a specific set by age + subject.
 * Returns { age, subject, questions[] }.
 * If not found, returns an empty set (so the UI can show a friendly message).
 */
export function getQuestionSet(age, subject) {
  const a = Number(age);
  const s = normaliseSubject(subject);
  const found = ALL_QUESTION_SETS.find(x => x.age === a && x.subject === s);
  if (!found) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[questions-index] No set for age=${a} subject=${s}.` +
        ' Check that data/questions-age' + a + '.js exports that subject and that it is imported here.');
    }
    return { age: a, subject: s, questions: [] };
  }
  return found;
}

/**
 * AVAILABLE: { [age]: ['Maths','English','Science'] } where sets exist with ≥1 question
 */
export const AVAILABLE = (() => {
  const map = {};
  for (const s of ALL_QUESTION_SETS) {
    if (!map[s.age]) map[s.age] = new Set();
    if (s.questions.length) map[s.age].add(s.subject);
  }
  return Object.fromEntries(Object.entries(map).map(([k, v]) => [k, Array.from(v).sort()]));
})();

/** Get all sets for a given age that actually have questions */
export function getSetsForAge(age) {
  const a = Number(age);
  return ALL_QUESTION_SETS.filter(s => s.age === a && s.questions.length > 0);
}

/** Get all ages that contain the given subject */
export function getAgesForSubject(subject) {
  const subj = normaliseSubject(subject);
  const ages = new Set();
  for (const s of ALL_QUESTION_SETS) {
    if (s.subject === subj && s.questions.length > 0) ages.add(s.age);
  }
  return Array.from(ages).sort((x,y)=>x-y);
}
