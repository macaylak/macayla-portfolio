export type ProjectLink = { label: string; href: string };

export type ProjectImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type Project = {
  title: string;
  meta: string;        // short context line (what/where/stack)
  highlight: string;   // ONE punchy outcome / credibility marker
  description: string; // 1–2 sentences max
  bullets: string[];   // 2–4 tight bullets, no repetition
  tags: string[];      // keywords (don’t repeat highlight/meta)
  links?: ProjectLink[];
  images?: ProjectImage[];
};

export type ExperienceImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

// ✅ Added tags here
export type ExperienceItem = {
  role: string;
  org: string;
  timeframe: string;
  bullets: string[];
  tags?: string[];     // keywords (tools + environment + strengths)
  images?: ExperienceImage[];
};

export const projects: Project[] = [
  {
    title: "Emergency Department Simulation Framework",
    meta: "Capstone • Simulation",
    highlight: "🥉 3rd Place — 2025 Capstone Fair",
    description:
      "A simulation framework to explore patient flow, staff interactions, and resource constraints in emergency departments.",
    bullets: [
      "Designed agent behaviors and system rules to represent real ER workflows and constraints.",
      "Analyzed outputs to identify bottlenecks and compare operational scenarios for planning decisions.",
      "Worked on a multidisciplinary team and presented results to judges and attendees at the Capstone Fair.",
    ],
    // tags add signal NOT already in meta/highlight
    tags: ["Agent modeling", "Scenario analysis", "Bottleneck analysis", "Operational planning", "Healthcare systems"],
    links: [],
    images: [
      { src: "/images/projects/capstone.jpg", alt: "Capstone presentation photo", fit: "cover" },
      { src: "/images/projects/capstone2.jpg", alt: "Capstone team and poster", fit: "cover" },
    ],
  },
  {
    title: "Inclusive Fitness App for Athletes with Disabilities",
    meta: "Personal • Mobile app • In progress",
    highlight: "Accessibility-first design with real-world stakeholder input.",
    description:
      "A mobile app concept supporting adaptive training with personalization, clear guidance, and community-oriented features.",
    bullets: [
      "Designing onboarding and preferences to tailor training plans to ability, goals, and support needs.",
      "Building a reusable UI system so screens stay consistent and easy to extend.",
      "Defining features like coach/mentor matching and community spaces with a focus on clarity and safety.",
    ],
    tags: ["Personalization", "Design systems", "User research", "Information architecture", "Inclusive product design"],
    links: [],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "FSWEP Student Hire",
    org: "Global Affairs Canada (GAC) — Summit Management Office",
    timeframe: "2025",
    bullets: [
      "Supported planning and coordination for secure airport logistics during the 2025 G7 Summit.",
      "Worked in a high-trust environment under enhanced clearance, following strict processes and timelines.",
      "Collaborated across teams to keep operations organized, accurate, and on track under pressure.",
    ],
    tags: ["Operations", "Planning", "Coordination", "High-trust environment", "Clear communication"],
    images: [
      { src: "/images/experience/gac-g7-1.jpeg", alt: "G7 Summit logistics environment" },
      { src: "/images/experience/gac-g7-2.jpg", alt: "Airport operations during G7 summit" },
      { src: "/images/experience/gac-g7-3.jpeg", alt: "G7 Summit certificate" },
    ],
  },
  {
    role: "Data Analytics Intern",
    org: "Canadian Imperial Bank of Commerce (CIBC)",
    timeframe: "Internship",
    bullets: [
      "Automated reporting workflows using Alteryx and Power Automate to reduce manual effort and improve consistency.",
      "Built dashboards and summaries to support segmentation work and stakeholder decisions.",
      "Presented findings clearly to both technical and non-technical audiences.",
    ],
    tags: ["Alteryx", "Power Automate", "Power BI", "SQL", "Stakeholders"],
    images: [{ src: "/images/experience/cibc-1.jpg", alt: "Data analytics dashboard work", fit: "contain" }],
  },
  {
    role: "Parks Maintenance Worker",
    org: "City of Airdrie",
    timeframe: "Seasonal",
    bullets: [
      "Maintained public spaces in varying conditions with a focus on safety, cleanliness, and reliability.",
      "Operated equipment and supported daily planning to complete tasks efficiently across multiple sites.",
    ],
    tags: ["Field work", "Safety", "Equipment operation", "Independent work", "Public service"],
    images: [{ src: "/images/experience/parks-1.jpg", alt: "Maintaining city parks" }],
  },
  {
    role: "Kitty Corner Volunteer",
    org: "Animal Rescue Foundation (ARF) of Alberta",
    timeframe: "Volunteer",
    bullets: [
      "Managed daily care routines and supported adoption readiness through consistent, hands-on work.",
      "Followed care guidelines closely and communicated concerns to support animal health.",
    ],
    tags: ["Reliability", "Care routines", "Responsibility", "Consistency", "Compassion"],
    images: [{ src: "/images/experience/arf-1.jpg", alt: "Volunteering with rescue cats" }],
  },
];

export const skills = {
  "Engineering & Systems": [
    "Systems thinking",
    "Engineering economics",
    "Embedded & real-time concepts",
    "Operating systems",
    "Computer architecture",
    "Networking fundamentals",
  ],
  "Software & Data": [
    "Object-oriented design",
    "Data structures & algorithms",
    "Software architecture",
    "Testing & quality assurance",
    "SQL & relational databases",
    "Data analysis & automation",
  ],
  "Tools & Platforms": [
    "Python",
    "Java",
    "C/C++",
    "JavaScript / TypeScript",
    "Git & GitHub",
    "AWS",
    "Power BI",
    "Alteryx",
    "Power Automate",
  ],
  "UI & Product": [
    "Human-centered design",
    "Accessibility-minded UI",
    "Component-driven development",
    "Usability evaluation",
  ],
  "Professional": [
    "Planning & coordination",
    "Stakeholder communication",
    "Technical documentation",
    "Cross-team collaboration",
  ],
};