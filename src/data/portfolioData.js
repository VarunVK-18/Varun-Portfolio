/**
 * Portfolio Data Template
 * Prepared to easily paste and map your resume details.
 * Contains placeholders strictly without emojis - uses Lucide icon keys instead!
 */

export const personalInfo = {
  name: "Varun",
  role: "Software Engineer & Full Stack Developer",
  tagline: "Architecting scalable web applications with performance and clean code in mind.",
  location: "Bangalore, India",
  email: "varun.dev@example.com",
  status: "Available for Opportunities",
  resumeUrl: "#resume",
  bio: [
    "I am a passionate software engineer focused on building robust, high-performance web applications and intuitive digital experiences.",
    "Specialized in React, modern JavaScript, and clean frontend architecture, I bridge the gap between design systems and reliable engineering.",
  ],
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Email", url: "mailto:varun.dev@example.com", icon: "Mail" },
    { name: "Resume", url: "#resume", icon: "FileText" },
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "100%", label: "Code Quality Focus" },
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "State Management", "Responsive UI"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express.js", "RESTful APIs", "PostgreSQL", "MongoDB", "Authentication"],
  },
  {
    category: "Architecture & Tools",
    skills: ["Git & GitHub", "Vite / Webpack", "Docker", "CI/CD Pipelines", "Jest / Testing", "Performance Optimization"],
  },
];

export const experienceData = [
  {
    role: "Full Stack Engineer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    location: "Bangalore, India",
    description: "Led development of core client dashboard, reducing load times by 40% and implementing scalable reusable component libraries.",
    highlights: [
      "Engineered high-frequency real-time data feeds with optimized React re-renders",
      "Collaborated with cross-functional teams to deliver enterprise features on schedule",
      "Mentored junior engineers and instituted code review best practices",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Solutions Studio",
    period: "2021 - 2023",
    location: "Remote",
    description: "Built performant web interfaces for client SaaS platforms and customer-facing web applications.",
    highlights: [
      "Built responsive design systems complying with strict accessibility standards",
      "Migrated legacy monolithic frontend codebase to modular React architecture",
      "Integrated analytics and automated end-to-end testing workflows",
    ],
    technologies: ["JavaScript", "React", "CSS Modules", "REST APIs", "Git"],
  },
];

export const projectsData = [
  {
    title: "Enterprise SaaS Dashboard",
    description: "A high-performance analytics interface featuring real-time telemetry, data filtering, and modular widget architecture.",
    tags: ["React", "TypeScript", "Vite", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Collaborative Workspace Platform",
    description: "Clean team workspace application supporting document co-editing, project tracking boards, and role-based permissions.",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Developer Toolkit & CLI Companion",
    description: "An intuitive developer utility for inspecting network traffic, generating mockup payloads, and optimizing web bundles.",
    tags: ["JavaScript", "HTML5", "CSS3", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    title: "Minimalist E-Commerce Experience",
    description: "Ultra-fast headless commerce storefront with dynamic cart state, instantaneous checkout flow, and zero layout shift.",
    tags: ["React", "CSS Architecture", "Stripe API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
];

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
