import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    setMessage('Demo: auth not wired yet');
  };

  const signUp = async (e) => {
    e.preventDefault();
    setMessage('Demo: auth not wired yet');
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="space-y-3">
        <input className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <div className="flex gap-3">
          <button className="tm-button" onClick={signIn}>Sign In</button>
          <button className="tm-button" onClick={signUp}>Sign Up</button>
        </div>
      </form>
      <p className="text-white/70">{message}</p>
    </div>
  );
}
