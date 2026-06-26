import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-black/10 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
    >
      <div
        className={`aspect-[16/10] bg-gradient-to-br ${project.accent}`}
        aria-hidden
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm opacity-70">{project.summary}</p>
        <p className="mt-auto pt-2 text-xs uppercase tracking-wide opacity-60">
          {project.disciplines.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
