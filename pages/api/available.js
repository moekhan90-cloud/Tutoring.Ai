// pages/api/available.js
import { AVAILABLE, ALL_QUESTION_SETS } from '../../data/questions-index';

export default function handler(req, res) {
  res.status(200).json({
    counts: ALL_QUESTION_SETS.reduce((acc, s) => {
      const key = `${s.age}-${s.subject}`;
      acc[key] = s.questions.length;
      return acc;
    }, {}),
    available: AVAILABLE
  });
}
