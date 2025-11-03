import { useEffect, useRef, useState } from 'react';
import TextBubble from './TextBubble';

export default function ScenePlayer({ scene = {} }) {
  const audioRef = useRef(null);
  const [currentLine, setCurrentLine] = useState(0);
  const lines = scene.lines || [];

  useEffect(() => { setCurrentLine(0); }, [scene]);

  useEffect(() => {
    if (!lines.length) return;
    const line = lines[currentLine];
    if (!line) return;
    if (line.audioUrl) {
      audioRef.current.src = line.audioUrl;
      audioRef.current.onended = () =>
        setTimeout(() => setCurrentLine(i => Math.min(i+1, lines.length-1)), 300);
      audioRef.current.play().catch(() => {});
    } else {
      const t = setTimeout(() =>
        setCurrentLine(i => Math.min(i+1, lines.length-1)), 2500);
      return () => clearTimeout(t);
    }
  }, [currentLine, lines]);

  const line = lines[currentLine] || {};

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
      <img src={scene.background || '/assets/backgrounds/lab.jpg'} alt="bg"
           className="absolute inset-0 w-full h-full object-cover" />
      {scene.characters?.map((c, idx) => (
        <img key={idx} src={c.src} alt={c.name}
             className={`absolute bottom-0 ${idx === 0 ? 'left-6' : 'right-6'} w-1/3 drop-shadow-[0_0_25px_rgba(0,229,255,0.35)]`} />
      ))}
      <div className="absolute bottom-6 left-6 right-6">
        <TextBubble text={line.text} align={line.speaker === 'right' ? 'right' : 'left'} />
      </div>
      <audio ref={audioRef} />
    </div>
  );
}
