// pages/login.js
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  async function onSubmit(e){
    e.preventDefault();
    const res = await signIn('credentials', { redirect: true, callbackUrl: '/dashboard', identifier, password });
    // NextAuth handles redirect; leaving here for completeness
  }

  return (
    <main className="container" style={{ maxWidth: 420 }}>
      <h1>Log in</h1>
      <form onSubmit={onSubmit} className="card" style={{ display:'grid', gap:12 }}>
        <input placeholder="Username or Email" value={identifier} onChange={e=>setIdentifier(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button className="btn btn-primary" type="submit">Log in</button>
        {err && <div style={{ color:'#ef4444' }}>{err}</div>}
      </form>
      <p style={{ marginTop:12 }}>No account? <a href="/signup">Sign up</a></p>
    </main>
  );
}
