// pages/api/submit-results.js

// ⚠️ Demo-only storage (resets on cold start / new deploy)
globalThis.__RESULTS__ = globalThis.__RESULTS__ || [];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // Basic shape check
    const {
      userId = 'guest',
      age,
      subject,
      score,
      totalQuestions,
      totalElapsedMs,
      history = [],
    } = payload || {};

    if (!age || !subject || typeof score !== 'number' || typeof totalQuestions !== 'number') {
      return res.status(400).json({ ok: false, error: 'Missing fields in payload' });
    }

    const record = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      userId,
      age: Number(age),
      subject,
      score,
      totalQuestions,
      totalElapsedMs: Number(totalElapsedMs || 0),
      accuracy: totalQuestions ? Math.round((score / totalQuestions) * 100) : 0,
      history: Array.isArray(history) ? history : [],
      createdAt: new Date().toISOString(),
    };

    globalThis.__RESULTS__.push(record);
    return res.status(200).json({ ok: true, record });
  } catch (err) {
    console.error('submit-results error', err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
}
