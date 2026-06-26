import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/work"
        className="text-sm opacity-70 transition hover:opacity-100"
      >
        ← Back to work
      </Link>

      <header className="mt-8 flex flex-col gap-4">
        <p className="text-xs uppercase tracking-wide opacity-60">
          {project.disciplines.join(" · ")} · {project.year}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="text-lg leading-relaxed opacity-80">{project.overview}</p>
      </header>

      <div
        className={`mt-10 aspect-[16/9] rounded-xl bg-gradient-to-br ${project.accent}`}
        aria-hidden
      />

      <div className="mt-12 flex flex-col gap-10">
        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide opacity-60">
            Role
          </h2>
          <p className="leading-relaxed opacity-90">{project.role}</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide opacity-60">
            The problem
          </h2>
          <p className="leading-relaxed opacity-90">{project.problem}</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide opacity-60">
            Approach
          </h2>
          <ul className="flex flex-col gap-2">
            {project.approach.map((step) => (
              <li key={step} className="flex gap-3 leading-relaxed opacity-90">
                <span aria-hidden className="opacity-50">
                  —
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide opacity-60">
            Outcome
          </h2>
          <p className="leading-relaxed opacity-90">{project.outcome}</p>
        </section>
      </div>
    </article>
  );
}
