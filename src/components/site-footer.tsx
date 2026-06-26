import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm opacity-70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mark Dorn. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/work" className="transition hover:opacity-100">
            Work
          </Link>
          <Link href="/about" className="transition hover:opacity-100">
            About
          </Link>
          <a
            href="mailto:markdorndesign@gmail.com"
            className="transition hover:opacity-100"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
