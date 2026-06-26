import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="flex flex-col items-start gap-6 py-20 sm:py-28">
        <div
          className="h-24 w-24 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600"
          aria-hidden
        />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hello! I&apos;m Mark Dorn
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed opacity-80">
          A collaborative and detail-driven Senior Product Designer who
          simplifies complex problems into intuitive, user-first solutions.
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            href="/work"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            View work
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-black/10 py-16 dark:border-white/10">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link
            href="/work"
            className="text-sm opacity-70 transition hover:opacity-100"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
