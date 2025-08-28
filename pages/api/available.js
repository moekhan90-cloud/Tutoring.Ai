// pages/api/available.js
import { AGE8_QUESTION_SETS } from '../../data/questions-age8';
import { AGE9_QUESTION_SETS } from '../../data/questions-age9';
import { AGE10_QUESTION_SETS } from '../../data/questions-age10';
import { AGE11_QUESTION_SETS } from '../../data/questions-age11';
import { AGE12_QUESTION_SETS } from '../../data/questions-age12';
import { AGE13_QUESTION_SETS } from '../../data/questions-age13';
import { AGE14_QUESTION_SETS } from '../../data/questions-age14';
import { AGE15_QUESTION_SETS } from '../../data/questions-age15';

const ALL = [
  ...AGE8_QUESTION_SETS,
  ...AGE9_QUESTION_SETS,
  ...AGE10_QUESTION_SETS,
  ...AGE11_QUESTION_SETS,
  ...AGE12_QUESTION_SETS,
  ...AGE13_QUESTION_SETS,
  ...AGE14_QUESTION_SETS,
  ...AGE15_QUESTION_SETS
];

export default function handler(req, res) {
  const summary = {};
  ALL.forEach(set => {
    const key = `${set.age}-${set.subject}`;
    summary[key] = set.questions.length;
  });

  res.status(200).json({
    counts: summary,
    available: Object.keys(summary).reduce((acc, key) => {
      const [age, subject] = key.split('-');
      if (!acc[age]) acc[age] = [];
      acc[age].push(subject);
      return acc;
    }, {})
  });
}
