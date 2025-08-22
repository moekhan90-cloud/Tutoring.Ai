export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ error: "Missing message" });
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "Missing OPENAI_API_KEY on server" });
    }

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a patient step-by-step tutoring assistant. Explain concepts clearly, ask clarifying questions when useful, and show workings for math." },
          { role: "user", content: String(message) }
        ]
      })
    });

    if (!r.ok) {
      const t = await r.text();
      return res.status(500).json({ error: "Upstream error", detail: t });
    }
    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content ?? "I couldn't generate a reply.";
    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
}
