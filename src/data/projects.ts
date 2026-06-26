export type Project = {
  slug: string;
  title: string;
  disciplines: string[];
  year: string;
  /** One-line summary shown on cards. */
  summary: string;
  /** Tailwind gradient classes used as a placeholder thumbnail. */
  accent: string;
  /** Longer intro shown at the top of the case study. */
  overview: string;
  role: string;
  problem: string;
  /** Steps / highlights of the design process. */
  approach: string[];
  outcome: string;
};

// NOTE: Titles and disciplines mirror markdorndesign.com. The longer copy
// below is placeholder draft content — replace it with the real case studies.
export const projects: Project[] = [
  {
    slug: "snowflake-tealium-integration",
    title: "Snowflake-to-Tealium Integration",
    disciplines: ["Product Design"],
    year: "2024",
    summary:
      "Designed a guided flow for syncing Snowflake data warehouses into Tealium audiences.",
    accent: "from-sky-500 to-indigo-600",
    overview:
      "A guided integration that lets data teams connect a Snowflake warehouse to Tealium and map customer data into actionable audiences without engineering support.",
    role: "Senior Product Designer — discovery, interaction design, and high-fidelity UI.",
    problem:
      "Connecting a data warehouse to the customer data platform required manual engineering work and error-prone configuration, slowing teams down for weeks.",
    approach: [
      "Mapped the end-to-end connection journey with data engineers and product.",
      "Designed a step-by-step setup wizard with inline validation and clear error states.",
      "Prototyped and tested the field-mapping experience with target users.",
    ],
    outcome:
      "Reduced time-to-first-sync from weeks to under an hour and removed the engineering bottleneck for new connections.",
  },
  {
    slug: "moments-api",
    title: "Moments API",
    disciplines: ["Product Design"],
    year: "2023",
    summary:
      "Defined the developer experience and dashboard for a real-time customer Moments API.",
    accent: "from-amber-500 to-rose-600",
    overview:
      "An API and supporting dashboard that lets product teams trigger real-time, contextual customer experiences based on in-session behavior.",
    role: "Senior Product Designer — developer experience and dashboard design.",
    problem:
      "Teams had no consistent way to act on real-time signals, leading to fragmented, hard-to-maintain implementations.",
    approach: [
      "Partnered with engineering to shape an intuitive, well-documented API surface.",
      "Designed a dashboard to configure, monitor, and debug live moments.",
      "Created reference patterns so teams could adopt the API confidently.",
    ],
    outcome:
      "A coherent developer experience that made real-time personalization approachable for non-specialist teams.",
  },
  {
    slug: "code-free-event-tracking",
    title: "Code-Free Event Tracking System",
    disciplines: ["Product Design"],
    year: "2023",
    summary:
      "Built a visual, no-code interface for defining and managing analytics events.",
    accent: "from-emerald-500 to-teal-600",
    overview:
      "A point-and-click system that lets non-technical users define analytics events on their own site without writing or deploying code.",
    role: "Senior Product Designer — concept, interaction design, and validation.",
    problem:
      "Adding or changing event tracking depended on engineering release cycles, making analytics slow and brittle.",
    approach: [
      "Designed a visual selector for tagging on-page elements as tracked events.",
      "Created a management view for organizing, versioning, and auditing events.",
      "Validated the flow with marketers and analysts unfamiliar with code.",
    ],
    outcome:
      "Empowered non-technical teams to own their tracking, freeing engineering from routine analytics requests.",
  },
  {
    slug: "visitor-deletion-jobs",
    title: "Visitor Deletion Jobs",
    disciplines: ["Product Design"],
    year: "2022",
    summary:
      "Designed a compliant, auditable workflow for bulk visitor data deletion.",
    accent: "from-fuchsia-500 to-purple-600",
    overview:
      "A workflow for submitting, tracking, and verifying large-scale visitor data deletion requests to meet privacy and compliance obligations.",
    role: "Senior Product Designer — workflow design and compliance UX.",
    problem:
      "Honoring data deletion requests at scale was opaque and risky, with no clear way to confirm completion.",
    approach: [
      "Mapped legal and compliance requirements into a clear job lifecycle.",
      "Designed status tracking and audit trails for every deletion request.",
      "Built in confirmation and safeguards to prevent accidental data loss.",
    ],
    outcome:
      "A transparent, auditable deletion process that gave teams confidence in their compliance posture.",
  },
  {
    slug: "reveal-platform-redesign",
    title: "Reveal Platform Redesign",
    disciplines: ["Design Sprint", "Product Design"],
    year: "2022",
    summary:
      "Led a design sprint to reimagine the core analytics platform experience.",
    accent: "from-orange-500 to-red-600",
    overview:
      "A ground-up redesign of an analytics platform, kicked off with a focused design sprint to align the team on a bold new direction.",
    role: "Senior Product Designer — design sprint facilitation and product design.",
    problem:
      "The existing platform had grown cluttered and inconsistent, making everyday analysis harder than it needed to be.",
    approach: [
      "Facilitated a cross-functional design sprint to frame the problem and prototype.",
      "Established a refreshed information architecture and visual system.",
      "Iterated on high-fidelity designs informed by usability testing.",
    ],
    outcome:
      "A clearer, more consistent platform that streamlined the most common analysis tasks.",
  },
  {
    slug: "link-technology-website",
    title: "Link Technology Website",
    disciplines: ["UI/UX", "Interaction Design", "Responsive Web Design"],
    year: "2021",
    summary:
      "Designed a responsive marketing site with a focus on clarity and motion.",
    accent: "from-cyan-500 to-blue-600",
    overview:
      "A responsive marketing website that communicates a technology company's value through clean layout, considered typography, and purposeful motion.",
    role: "Designer — UI/UX, interaction design, and responsive layout.",
    problem:
      "The previous site failed to clearly communicate the product and looked dated on modern devices.",
    approach: [
      "Defined a responsive layout system and typographic hierarchy.",
      "Designed interaction and motion details to guide attention.",
      "Ensured a polished experience across mobile, tablet, and desktop.",
    ],
    outcome:
      "A modern, responsive site that presents the brand clearly across every screen size.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
