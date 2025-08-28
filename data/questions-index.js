// data/questions-index.js
// Aggregates all age question sets (8–15)

import { AGE8_QUESTION_SETS } from './questions-age8.js';
import { AGE9_QUESTION_SETS } from './questions-age9.js';
import { AGE10_QUESTION_SETS } from './questions-age10.js';
import { AGE11_QUESTION_SETS } from './questions-age11.js';
import { AGE12_QUESTION_SETS } from './questions-age12.js';
import { AGE13_QUESTION_SETS } from './questions-age13.js';
import { AGE14_QUESTION_SETS } from './questions-age14.js';
import { AGE15_QUESTION_SETS } from './questions-age15.js';

const def = (x) => (Array.isArray(x) ? x : []);

export const ALL_QUESTION_SETS = [
  ...def(AGE8_QUESTION_SETS),
  ...def(AGE9_QUESTION_SETS),
  ...def(AGE10_QUESTION_SETS),
  ...def(AGE11_QUESTION_SETS),
  ...def(AGE12_QUESTION_SETS),
  ...def(AGE13_QUESTION_SETS),
  ...def(AGE14_QUESTION_SETS),
  ...def(AGE15_QUESTION_SETS),
];

// ---------- Helpers ----------
/** Find a set by age + subject */
export const getQuestionSet = (age, subject) =>
  ALL_QUESTION_SETS.find(
    (s) => s.age === Number(age) && s.subject === subject
  );

/** All ages that have at least one subject populated */
export const getAges = () =>
  [...new Set(ALL_QUESTION_SETS.map((s) => s.age))].sort((a, b) => a - b);

/** Subjects available for a given age */
export const getSubjectsForAge = (age) =>
  [
    ...new Set(
      ALL_QUESTION_SETS.filter((s) => s.age === Number(age)).map(
        (s) => s.subject
      )
    ),
  ];
