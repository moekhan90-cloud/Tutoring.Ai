// pages/api/available.js
// Reports which ages/subjects are available + question counts

import { AGE8_QUESTION_SETS }  from '../../data/questions-age8';
import { AGE9_QUESTION_SETS }  from '../../data/questions-age9';
import { AGE10_QUESTION_SETS } from '../../data/questions-age10';
import { AGE11_QUESTION_SETS } from '../../data/questions-age11';
import { AGE12_QUESTION_SETS } from '../../data/questions-age12';
import { AGE13_QUESTION_SETS } from '../../data/questions-age13';
import { AGE14_QUESTION_SETS } from '../../data/questions-age14';
import { AGE15_QUESTION_SETS } from '../../data/questions-age15';

const SAFE = a => Array.isArray(a) ? a : [];

const ALL = [
  ...SAFE(AGE8_QUESTION_SETS),
  ...SAFE(AGE9_QUESTION_SETS),
  ...SAFE(AGE10_QUESTION_SETS),
  ...SAFE(AGE11_QUESTION_SETS),
  ...SAFE(AGE12_QUESTION_SETS),
  ...SAFE(AGE13_QUESTION_SETS),
  ...SAFE(AGE14_QUESTION_SETS),
  ...SAFE(AGE15_QUESTION_SETS),
];

function buildIndex() {
  const subjectsByAge = {};            // { '12': ['Maths','English','Science'] }
  const counts = {};                   // { '12-Maths': 20, ... }
  const totalsByAge = {};              // { '12': 60, ... }
  const totalsBySubject = {};          // { 'Maths': 160, ... }

  for (const set of ALL) {
    if (!set || typeof set !== 'object') continue;
    const { age, subject, questions } = set;
    if (age == null || !subject) continue;

    const key = `${age}-${subject}`;
    const n = Array.isArray(questions) ? questions.length : 0;

    if (!subjectsByAge[age]) subjectsByAge[age] = [];
    if (!subjectsByAge[age].includes(subject)) subjectsByAge[age].push(subject);

    counts[key] = (counts[key] || 0) + n;
    totalsByAge[age] = (totalsByAge[age] || 0) + n;
    totalsBySubject[subject] = (totalsBySubject[subject] || 0) + n;
  }

  // sort subject lists for predictable output
  for (const age of Object.keys(subjectsByAge)) {
    subjectsByAge[age].sort();
  }

  return { subjectsByAge, counts, totalsByAge, totalsBySubject, totalSets: ALL.length };
}

export default function handler(req, res) {
  try {
    const info = buildIndex();
    res.status(200).json({
      ok: true,
      ...info,
      hint: "If a subject is missing for an age, check /data/questions-age{AGE}.js exports."
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
}
