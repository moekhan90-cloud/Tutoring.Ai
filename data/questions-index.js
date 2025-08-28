// data/questions-index.js
import { AGE8_QUESTION_SETS } from './questions-age8';
import { AGE9_QUESTION_SETS } from './questions-age9'; // add more imports as you create them

export const ALL_QUESTION_SETS = [
  ...AGE8_QUESTION_SETS,
  ...AGE9_QUESTION_SETS,
  // add ...AGE10_QUESTION_SETS etc. later
];
