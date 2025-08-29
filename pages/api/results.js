// pages/api/results.js

globalThis.__RESULTS__ = globalThis.__RESULTS__ || [];

export default function handler(req, res) {
  const { userId } = req.query || {};
  const all = globalThis.__RESULTS__;
  const data = userId ? all.filter(r => r.userId === userId) : all;
  // newest first
  data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  res.status(200).json({ ok: true, count: data.length, results: data });
}
