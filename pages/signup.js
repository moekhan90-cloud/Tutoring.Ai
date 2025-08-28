// pages/signup.js
import { useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({ email:'', username:'', name:'', password:'' });
  const [msg, setMsg] = useState('');

  async function onSubmit(e){
    e.preventDefault();
    const r = await fetch('/api/auth/register', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify(form)
    });
    const data = await r.json();
    if (r.ok) setMsg('Account created! You can now log in.');
    else setMsg(data.error || 'Error');
  }

  return (
    <main className="container" style={{ maxWidth: 460 }}>
      <h1>Create your account</h1>
      <form onSubmit={onSubmit} className="card" style={{ display:'grid', gap:12 }}>
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <input placeholder="Username" value={form.username} onChange={e=>setForm({...form, username:e.target.value})}/>
        <input placeholder="Name (optional)" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        <input type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/>
        <button className="btn btn-primary" type="submit">Sign up</button>
        {msg && <div style={{ color:'#16a34a' }}>{msg}</div>}
      </form>
      <p style={{ marginTop:12 }}>Already have an account? <a href="/login">Log in</a></p>
    </main>
  );
}
