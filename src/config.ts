// ============================================================================
// SITE CONFIG — the single file that drives the whole site.
// Edit YOUR details here (name, links, bio) and every section updates.
// TODO markers show the fields to fill in with your real info.
// ============================================================================

// Base path ('' at root locally, '/<repo>/' on GitHub Pages). Prefix internal
// absolute paths with this so they work on both.
const basePath = import.meta.env.BASE_URL;

export const site = {
  name: 'Your Name', // TODO: your full name
  terminal: 'you@devbox', // prompt shown in the hero terminal
  role: 'Cloud & DevOps Engineer',
  tagline: 'Second-year student building cloud infrastructure that actually deploys.',
  location: 'Your City, Your Country', // TODO
  timezone: 'Your TZ', // e.g. 'IST'
  availability: 'Open to internships & collabs · remote worldwide',
  email: 'you@example.com', // TODO
  github: 'https://github.com/your-username', // TODO
  linkedin: 'https://linkedin.com/in/your-username', // TODO
  resume: `${basePath}resume.pdf`, // drop your PDF at public/resume.pdf
  // Used for SEO + social cards
  description:
    `${'Your Name'} — second-year Cloud & DevOps engineer building cloud infrastructure, automation, and CI/CD pipelines.`,
};

// Ordered nav links (one-page anchors)
export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

// About-section paragraphs (keep honest, second-year voice)
export const about = [
  `I'm in my second year of a Computer Science degree, focused on Cloud Computing and DevOps. I realized early that writing code is only half the battle — getting it to run reliably in the real world is where the magic happens.`,
  `My approach is hands-on: I don't just read about Infrastructure-as-Code or containerization — I build small systems, break them on purpose, and fix them. I'm currently preparing for the GCP Associate Cloud Engineer certification, and this site deploys itself through a CI/CD pipeline.`,
];

// Project groups — the 3 theme groups (best work first)
export const projectGroups = [
  { key: 'cloud', label: 'Cloud & Infrastructure' },
  { key: 'ci-cd', label: 'Automation & CI/CD' },
  { key: 'exploratory', label: 'Exploratory Builds' },
] as const;

// Certifications
export const certifications = {
  // TODO: add each cert you PASS (not ones you're studying for):
  // earned: [
  //   { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: 2026, link: 'https://...' },
  // ],
  earned: [] as { name: string; issuer: string; year: number; link: string }[],
  pursuing: ['GCP Associate Cloud Engineer'], // currently working toward
};

export const socials = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Email', href: `mailto:${site.email}` },
];
