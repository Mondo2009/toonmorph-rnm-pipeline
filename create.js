import { useState } from 'react';
import ScenePlayer from '../components/ScenePlayer';

export default function Create() {
  const [script, setScript] = useState(`RICK: Morty, get in the portal!
MORTY: Aw jeez, Rick, again?
RICK: No time to explain!`);

  const [scene, setScene] = useState({
    background: '/assets/backgrounds/lab.jpg',
    characters: [
      { name: 'Rickish', src: '/assets/characters/rickish.png', side: 'left' },
      { name: 'Mortoid', src: '/assets/characters/mortoid.png', side: 'right' },
    ],
    lines: [],
  });

  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const renderScene = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/render', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ script, voiceEnabled })
      });
      const data = await res.json();
      setScene(s => ({ ...s, lines: data.lines }));
    } catch (e) {
      console.error(e);
      alert('Render failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Create Episode</h1>
        <textarea className="input h-64" value={script} onChange={(e)=>setScript(e.target.value)} />
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={voiceEnabled} onChange={(e)=>setVoiceEnabled(e.target.checked)} />
            <span>Enable AI Voice</span>
          </label>
          <button className="tm-button" onClick={renderScene} disabled={loading}>
            {loading ? 'Rendering…' : 'Render Scene'}
          </button>
        </div>
        <p className="text-white/60 text-sm">Tip: Write lines as <code>NAME: dialogue</code> per line.</p>
      </div>
      <div className="space-y-4">
        <ScenePlayer scene={scene} />
      </div>
    </div>
  );
}
