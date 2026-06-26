import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mark Dorn — a collaborative, detail-driven Senior Product Designer.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-col items-start gap-6">
        <div
          className="h-28 w-28 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600"
          aria-hidden
        />
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      </div>

      <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed opacity-85">
        <p>
          I&apos;m Mark Dorn, a collaborative and detail-driven Senior Product
          Designer who simplifies complex problems into intuitive, user-first
          solutions.
        </p>
        {/* Placeholder bio — replace with your own story, experience, and approach. */}
        <p>
          I partner closely with product managers, engineers, and researchers to
          turn ambiguous problems into clear, usable products. My work spans
          end-to-end product design, design sprints, and responsive web design.
        </p>
        <p>
          I care about the details that make an experience feel effortless: clear
          information architecture, considered interaction design, and interfaces
          that respect the people who use them.
        </p>
      </div>

      <section className="mt-12 border-t border-black/10 pt-8 dark:border-white/10">
        <h2 className="text-sm font-semibold uppercase tracking-wide opacity-60">
          Get in touch
        </h2>
        <p className="mt-3 text-lg opacity-85">
          Interested in working together?{" "}
          <a
            href="mailto:markdorndesign@gmail.com"
            className="underline underline-offset-4 transition hover:opacity-70"
          >
            Send me an email
          </a>{" "}
          or take a look at my{" "}
          <Link
            href="/work"
            className="underline underline-offset-4 transition hover:opacity-70"
          >
            work
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
