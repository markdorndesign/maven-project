import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Mark Dorn
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/work" className="opacity-70 transition hover:opacity-100">
            Work
          </Link>
          <Link href="/about" className="opacity-70 transition hover:opacity-100">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
