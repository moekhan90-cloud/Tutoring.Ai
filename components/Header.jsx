// components/Header.jsx
export default function Header(){
  return (
    <header className="header">
      <div className="nav container" style={{ paddingTop:10, paddingBottom:10 }}>
        <div className="brand">
          <span className="badge">A</span>
          <span>Adaptive Tutoring.ai</span>
        </div>
        <div style={{ marginLeft:'auto', display:'flex', gap:14 }}>
          <a href="/">Home</a>
          <a href="/quiz">Try a Quiz</a>
          <a href="/login">Log in</a>
        </div>
      </div>
    </header>
  );
}
