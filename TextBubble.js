export default function TextBubble({ text = '', align = 'left' }) {
  return (
    <div className={`max-w-xl ${align === 'right' ? 'ml-auto text-right' : ''}`}>
      <div className="inline-block bg-white/10 border border-white/15 rounded-2xl px-4 py-2 shadow-glowCyan">
        <p className="leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
