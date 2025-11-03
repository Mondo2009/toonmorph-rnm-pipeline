import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Build Animated Episodes with <span className="text-neonCyan drop-shadow-[0_0_12px_#00E5FF]">ToonMorph</span>
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Rick & Morty–style pipeline on Vercel. Write your script, load characters & backgrounds,
          and generate voiced scenes using open-source AI (Coqui TTS).
        </p>
        <div className="flex gap-4 justify-center">
          <Link className="tm-button" href="/create">Start Episode</Link>
          <Link className="tm-button" href="/dashboard">Dashboard</Link>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          { title: "Neon Visuals", desc: "Cinematic 2D composition with parallax backgrounds and portal effects."},
          { title: "AI Voices", desc: "Open-source TTS (Coqui). Toggle on/off, auto-sync with dialogue."},
          { title: "Ready for Scale", desc: "Supabase auth, Stripe $10/mo tier, 30-minute monthly cap."},
        ].map((c,i) => (
          <div key={i} className="card">
            <h3 className="font-bold text-xl mb-2">{c.title}</h3>
            <p className="text-white/80">{c.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
