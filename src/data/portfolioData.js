/**
 * Portfolio Data
 * Tailored from Varun R's Resume
 * Strictly 0 emojis - Lucide / SVG icons only.
 */

export const personalInfo = {
  name: "Varun R",
  role: "App Developer & Full-Stack Engineer",
  tagline: "Specialized in Flutter, Dart, Node.js, MongoDB, and Angular. Building real-world mobile & web applications from concept to Google Play Store production.",
  location: "Salem, Tamil Nadu, India",
  email: "kumarvarun43255@gmail.com",
  phone: "+91 8072286963",
  status: "Open for Opportunities",
  resumeUrl: "#contact",
  bio: [
    "Information Technology graduate (B.Tech, 2025) and App Developer with hands-on industry experience building scalable cross-platform mobile apps and web platforms using Flutter, Dart, Node.js, MongoDB, Angular, and TypeScript.",
    "Experienced in end-to-end application engineering: designing intuitive modern UIs, integrating secure RESTful APIs, configuring Firebase and 2FA authentication, managing reactive state (Provider & Riverpod), and architecting real-world CRM and consumer applications published on the Google Play Store."
  ],
  education: {
    institution: "Mahendra College of Engineering",
    degree: "Bachelor of Technology in Information Technology",
    period: "2021 – 2025",
    location: "Salem, Tamil Nadu, India",
    grade: "CGPA: 7.29"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/VarunVK-18" },
    { name: "LinkedIn", url: "https://linkedin.com/in/varunkumar018" },
    { name: "Email", url: "mailto:kumarvarun43255@gmail.com" },
    { name: "Phone", url: "tel:+918072286963" },
  ],
  stats: [
    { value: "2", label: "Apps on Play Store" },
    { value: "5+", label: "Real-World Projects" },
    { value: "B.Tech", label: "IT Graduate (2025)" },
  ]
};

export const skillsData = [
  {
    category: "Mobile App Development",
    skills: ["Flutter", "Dart", "Provider", "Riverpod", "Android Studio", "Local Notifications", "SharedPreferences", "UI/UX Implementation"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "API Integration", "Google Gemini API", "Debugging", "Performance Tuning"],
  },
  {
    category: "Databases & Auth",
    skills: ["MongoDB", "MongoDB Compass", "Firebase Realtime DB", "Supabase", "Firebase Authentication", "Google Sign-In", "2FA / TOTP"],
  },
  {
    category: "Frontend & Web",
    skills: ["Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "React", "Responsive Design"],
  },
  {
    category: "Tools & Languages",
    skills: ["Git & GitHub", "Visual Studio Code", "Eclipse", "Java", "C", "C++"],
  },
];

export const experienceData = [
  {
    role: "App Developer Intern",
    company: "Softrate",
    period: "Apr 2026 – Present",
    location: "India",
    description: "Developing and maintaining production application modules using Flutter, Dart, Node.js, MongoDB, Angular, TypeScript, and Express.js across client projects.",
    highlights: [
      "Developed and integrated REST APIs using Node.js and Express.js, connecting application frontends with MongoDB for structured data management",
      "Contributed to MEAN-stack web application development using MongoDB, Express.js, Angular, and Node.js",
      "Implemented application features involving authentication, client data management, structured forms, document handling, and database operations",
      "Debugged application issues, resolved functional problems, and collaborated with the team throughout the implementation and testing lifecycle",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "MongoDB", "Angular", "TypeScript", "Express.js", "REST APIs"],
  },
  {
    role: "Flutter & Dart App Development Intern",
    company: "GR Soft Tech",
    period: "Oct 2024 – Nov 2024",
    location: "India",
    description: "Developed Flutter-based mobile application features using Dart and integrated Firebase Authentication for user login workflows.",
    highlights: [
      "Integrated Firebase Authentication for streamlined user login and registration workflows",
      "Implemented Provider state management to maintain reactive application state and improve UI responsiveness and code maintainability",
      "Enhanced application navigation, screen layouts, and UI interactions to deliver a smoother user experience",
    ],
    technologies: ["Flutter", "Dart", "Firebase Auth", "Provider", "UI/UX"],
  },
  {
    role: "Web Development Intern",
    company: "Alexza Tech",
    period: "Apr 2023 – May 2023",
    location: "India",
    description: "Developed responsive web pages and clean, consistent UI components optimized across multiple viewport sizes.",
    highlights: [
      "Developed responsive web pages using HTML and CSS with layouts optimized for different screen sizes",
      "Improved frontend structure, styling, and usability by implementing clean and consistent UI components",
    ],
    technologies: ["HTML5", "CSS3", "Responsive Layouts", "UI Design"],
  },
];

export const projectsData = [
  {
    title: "Startup Doctor – Company Registration & Compliance CRM",
    badge: "Play Store",
    description: "A comprehensive CRM application for managing company registration, incorporation, compliance, taxation, and licensing-related services with structured forms, document handling, and client workflows.",
    tags: ["Flutter", "Dart", "Node.js", "MongoDB", "REST APIs"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.wealthempires.startupdoctor",
    liveUrl: "https://play.google.com/store/apps/details?id=com.wealthempires.startupdoctor",
    featured: true,
  },
  {
    title: "AuthSoft – Open-Source Authenticator Application",
    badge: "Play Store",
    description: "A security-focused two-factor authentication (2FA/TOTP) authenticator application for generating secure time-based authentication codes, integrated with Node.js backend services and MongoDB.",
    tags: ["Flutter", "Dart", "2FA / TOTP", "Node.js", "MongoDB"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.softrate.authsoft",
    liveUrl: "https://play.google.com/store/apps/details?id=com.softrate.authsoft",
    featured: true,
  },
  {
    title: "Friendi_AI – AI Companion Chatbot Application",
    badge: "AI Mobile App",
    description: "AI-powered chatbot application with Firebase Email/Password and Google Sign-In, integrated with Google Gemini API for mathematical problem solving, coding assistance, dark mode UI, and local chat history.",
    tags: ["Flutter", "Dart", "Firebase", "Google Gemini API"],
    githubUrl: "https://github.com/VarunVK-18/Friendi_AI",
    liveUrl: "https://github.com/VarunVK-18/Friendi_AI",
    featured: true,
  },
  {
    title: "Mozhibu – Book Writing & Reading Web Application",
    badge: "Web Platform",
    description: "A full-featured web application for creating, publishing, reading, and managing books and written content. Built with Angular frontend, Node.js/Express backend, and MongoDB storage.",
    tags: ["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    featured: true,
  },
  {
    title: "StreakUp – Habit & Attendance Tracker",
    badge: "Mobile App",
    description: "Offline-first habit and attendance tracking application with Riverpod reactive state management, SharedPreferences local persistence, and local notification reminders.",
    tags: ["Flutter", "Dart", "Riverpod", "SharedPreferences", "Local Notifications"],
    githubUrl: "https://github.com/VarunVK-18/StreakUP_App",
    liveUrl: "https://github.com/VarunVK-18/StreakUP_App",
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
