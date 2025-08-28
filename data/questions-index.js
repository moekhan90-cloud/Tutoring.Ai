// data/questions-index.js  (ESM only)

import { AGE8_QUESTION_SETS }  from './questions-age8.ts';  // you currently have TS for age 8
import { AGE9_QUESTION_SETS }  from './questions-age9.js';
import { AGE10_QUESTION_SETS } from './questions-age10.js';
import { AGE14_QUESTION_SETS } from './questions-age14.js';
import { AGE15_QUESTION_SETS } from './questions-age15.js';

// If any file is missing, default to []
const def = (x) => Array.isArray(x) ? x : [];

export const ALL_QUESTION_SETS = [
  ...def(AGE8_QUESTION_SETS),
  ...def(AGE9_QUESTION_SETS),
  ...def(AGE10_QUESTION_SETS),
  ...def(AGE14_QUESTION_SETS),
  ...def(AGE15_QUESTION_SETS),
];

export const getQuestionSet = (age, subject) =>
  ALL_QUESTION_SETS.find(s => s.age === Number(age) && s.subject === subject);

export const getAges = () =>
  [...new Set(ALL_QUESTION_SETS.map(s => s.age))].sort((a,b) => a-b);

export const getSubjectsForAge = (age) =>
  [...new Set(ALL_QUESTION_SETS.filter(s => s.age === Number(age)).map(s => s.subject))];
