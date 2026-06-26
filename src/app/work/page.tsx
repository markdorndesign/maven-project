import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design case studies by Mark Dorn, Senior Product Designer.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12 flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
        <p className="max-w-2xl text-lg opacity-70">
          A selection of case studies spanning product design, design sprints,
          and responsive web design.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
