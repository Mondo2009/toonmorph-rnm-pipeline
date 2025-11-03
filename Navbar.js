import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-2xl tracking-wide">
          <span className="text-neonCyan">Toon</span>
          <span className="text-neonViolet">Morph</span>
          <span className="ml-3 text-xs text-white/60">Rick & Morty Pipeline</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/create" className="tm-button text-sm">Start Episode</Link>
          <Link href="/dashboard" className="text-white/80 hover:text-white">Dashboard</Link>
          <Link href="/login" className="text-white/80 hover:text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
}
