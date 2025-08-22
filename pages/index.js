import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setReply("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || "Request failed");
      }
      const data = await res.json();
      setReply(data.reply);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: "0 16px", fontFamily: "system-ui, sans-serif" }}>
      <h1>📘 Tutoring AI</h1>
      <p>Ask any question. The tutor will explain step by step.</p>
      <form onSubmit={sendMessage} style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g., Explain Pythagoras' theorem"
          style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
          required
        />
        <button type="submit" disabled={loading} style={{ padding: "10px 16px", borderRadius: 8 }}>
          {loading ? "Thinking..." : "Send"}
        </button>
      </form>

      {error && <p style={{ color: "crimson", marginTop: 16 }}>Error: {error}</p>}
      {reply && (
        <section style={{ marginTop: 24, background: "#fafafa", padding: 16, borderRadius: 12, whiteSpace: "pre-wrap" }}>
          <strong>AI:</strong> {reply}
        </section>
      )}
      <footer style={{ marginTop: 40, color: "#666" }}>Powered by Next.js • Remember to set <code>OPENAI_API_KEY</code> on Vercel.</footer>
    </main>
  );
}
