import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-(--color-beige) z-199 sticky flex justify-between items-center px-6 py-4 border-b border-b-(--color-raven)">
      <Link href="/" className ="flex flex-col">
        <span className="font-sans font-medium text-base leading-none">Portfolio of</span>
        <span className="font-serif font-medium text-3xl leading-none tracking-[-1px]">Dwyane Sido</span>
      </Link>
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
       <path stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 24h36M6 12h36M6 36h36"/>
      </svg>
      <nav className="hidden lg:block">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}