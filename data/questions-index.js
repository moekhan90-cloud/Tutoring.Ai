// data/questions-index.js
// Central place to load question sets by age + subject

// ---- Import all ages (make sure these files exist) ----
import { AGE8_QUESTION_SETS }  from './questions-age8';
import { AGE9_QUESTION_SETS }  from './questions-age9';
import { AGE10_QUESTION_SETS } from './questions-age10';
import { AGE11_QUESTION_SETS } from './questions-age11';
import { AGE12_QUESTION_SETS } from './questions-age12';
import { AGE13_QUESTION_SETS } from './questions-age13';
import { AGE14_QUESTION_SETS } from './questions-age14';
import { AGE15_QUESTION_SETS } from './questions-age15';

// If you add a new age file, import it above and include it here.
const BY_AGE = {
  8:  AGE8_QUESTION_SETS,
  9:  AGE9_QUESTION_SETS,
  10: AGE10_QUESTION_SETS,
  11: AGE11_QUESTION_SETS,
  12: AGE12_QUESTION_SETS,
  13: AGE13_QUESTION_SETS,
  14: AGE14_QUESTION_SETS,
  15: AGE15_QUESTION_SETS,
};

// Supported subjects (exact labels used inside each age file)
export const SUBJECTS = ['Maths', 'English', 'Science'];

/**
 * Return one "set" object: { age, subject, questions: [...] }
 * Throws a clear error if the age/subject isn't available,
 * so you immediately see it in Vercel logs.
 */
export function getQuestionSet(age, subject) {
  const sets = BY_AGE[Number(age)];
  if (!sets) {
    throw new Error(`No question sets for age ${age}. Have you created data/questions-age${age}.js and exported AGE${age}_QUESTION_SETS?`);
  }

  // Find by subject — ensure exact match with 'Maths' | 'English' | 'Science'
  const set = sets.find(s => s.subject === subject);
  if (!set) {
    const availableSubjects = sets.map(s => s.subject).join(', ');
    throw new Error(`No "${subject}" questions for age ${age}. Available: [${availableSubjects}]`);
  }
  return set;
}

/** Handy helper for debugging pages/api/available etc. */
export function getAllAvailable() {
  const out = [];
  for (const age of Object.keys(BY_AGE)) {
    for (const s of BY_AGE[age]) {
      out.push({
        age: Number(age),
        subject: s.subject,
        count: Array.isArray(s.questions) ? s.questions.length : 0,
      });
    }
  }
  return out.sort((a, b) => a.age - b.age || a.subject.localeCompare(b.subject));
}
