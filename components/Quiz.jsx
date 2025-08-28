// components/Quiz.jsx
import { useEffect, useMemo, useRef, useState } from 'react';

function cls(...a){ return a.filter(Boolean).join(' '); }

export default function Quiz({ set }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Stopwatch state
  const [elapsed, setElapsed] = useState(0);       // seconds for current question
  const tickRef = useRef(null);
  const startRef = useRef(null);

  // Results
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]); // {id, correct, time}

  const q = set?.questions?.[index];

  // start stopwatch for each question
  useEffect(() => {
    if (!q) return;
    setElapsed(0);
    startRef.current = Date.now();
    clearInterval(tickRef.current);
    tickRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
    }, 250);
    setSelected(null);
    setShowAnswer(false);
    return () => clearInterval(tickRef.current);
  }, [index, q?.id]);

  // Reveal & record time
  function handleReveal(){
    if (showAnswer) return;
    const seconds = Math.max(0, Math.floor((Date.now() - startRef.current) / 1000));
    clearInterval(tickRef.current);
    const correct = selected === q.answerIndex;
    setShowAnswer(true);
    setScore(s => s + (correct ? 1 : 0));
    setHistory(h => [...h, { id: q.id, correct, time: seconds }]);
    setElapsed(seconds); // freeze display
  }

  function handleNext(){
    if (index + 1 < set.questions.length){
      setIndex(i => i + 1);
    } else {
      // finished — stop any timer just in case
      clearInterval(tickRef.current);
      setShowAnswer(true); // keep final state
    }
  }

  const finished = index >= (set?.questions?.length || 0) - 1 && showAnswer;

  const progressPct = useMemo(() => {
    const total = set?.questions?.length || 1;
    return Math.min(100, (index / total) * 100);
  }, [index, set?.questions?.length]);

  if (!q){
    return (
      <div className="container">
        <div className="card">
          <h2>No questions found</h2>
          <p>Add items to this set to start the quiz.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginBottom:12}}>
        <h1>{set.subject} · Age {set.age}</h1>
        <div style={{color:'var(--muted)'}}>{index+1} / {set.questions.length}</div>
      </header>

      <div className="progress" style={{marginBottom:16}}>
        <span style={{width: `${progressPct}%`}} />
      </div>

      {!finished && (
        <>
          <div className="card" style={{marginBottom:14}}>
            <div style={{display:'flex',justifyContent:'space-between', alignItems:'center', gap:12}}>
              <p style={{fontSize:18, fontWeight:600, margin:0}}>{q.prompt}</p>
              <div className="kbd">⏱ {elapsed}s</div>
            </div>
          </div>

          <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gap:10}}>
            {q.options.map((opt, i) => {
              const stateClass = showAnswer
                ? (i === q.answerIndex ? 'correct' : (selected === i ? 'wrong' : ''))
                : '';
              return (
                <li key={i}>
                  <button
                    className={cls('option', stateClass)}
                    onClick={() => !showAnswer && setSelected(i)}
                  >
                    <strong style={{marginRight:6}}>{String.fromCharCode(65+i)}.</strong> {opt}
                  </button>
                </li>
              );
            })}
          </ul>

          <div style={{display:'flex', gap:10, marginTop:14}}>
            {!showAnswer ? (
              <button
                className={cls('btn','btn-primary')}
                onClick={handleReveal}
                disabled={selected === null}
              >
                Check answer
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleNext}>
                {index + 1 < set.questions.length ? 'Next' : 'Finish'}
              </button>
            )}
            {!showAnswer && (
              <button className="btn btn-ghost" onClick={() => setSelected(null)}>
                Clear choice
              </button>
            )}
          </div>

          {showAnswer && (
            <div className="card" style={{marginTop:14}}>
              <p style={{margin:'0 0 6px 0'}}>
                ✅ Correct answer: <strong>{String.fromCharCode(65+q.answerIndex)}. {q.options[q.answerIndex]}</strong>
              </p>
              <p style={{margin:'0 0 8px 0', color:'var(--muted)'}}>{q.explanation}</p>
              <div style={{display:'flex', gap:12, alignItems:'center'}}>
                <span className="kbd">You took {elapsed}s</span>
                {q.topic && <span className="btn-chip">{q.topic}</span>}
                {q.videoUrl && (
                  <a className="btn btn-ghost" href={q.videoUrl} target="_blank" rel="noreferrer">📺 Learning video</a>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {finished && (
        <Summary set={set} score={score} history={history} />
      )}
    </div>
  );
}

function Summary({ set, score, history }){
  const total = set.questions.length;
  const totalTime = history.reduce((a,b)=>a+b.time,0);
  const avg = history.length ? Math.round(totalTime / history.length) : 0;
  const accuracy = Math.round((score / total) * 100);

  return (
    <div className="card">
      <h2 style={{marginTop:0}}>Finished! 🎉</h2>
      <p style={{marginTop:6, color:'var(--muted)'}}>{set.subject} · Age {set.age}</p>

      <div className="grid" style={{marginTop:14}}>
        <div className="card">
          <div style={{fontSize:28, fontWeight:800}}>{score}/{total}</div>
          <div style={{color:'var(--muted)'}}>Score</div>
        </div>
        <div className="card">
          <div style={{fontSize:28, fontWeight:800}}>{accuracy}%</div>
          <div style={{color:'var(--muted)'}}>Accuracy</div>
        </div>
        <div className="card">
          <div style={{fontSize:28, fontWeight:800}}>{avg}s</div>
          <div style={{color:'var(--muted)'}}>Avg time / question</div>
        </div>
        <div className="card">
          <div style={{fontSize:28, fontWeight:800}}>{totalTime}s</div>
          <div style={{color:'var(--muted)'}}>Total time</div>
        </div>
      </div>

      <div style={{marginTop:14}}>
        <h3 style={{marginTop:0}}>Per-question times</h3>
        <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gap:8}}>
          {history.map((h, i) => (
            <li key={h.id} className="option" style={{display:'flex', justifyContent:'space-between'}}>
              <span>Q{i+1} {h.correct ? '✅' : '❌'}</span>
              <span className="kbd">{h.time}s</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
