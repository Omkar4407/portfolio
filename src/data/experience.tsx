export type Education = {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  cgpa?: string;
  graduation?: string;
  highlights?: string[];
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export type TechnicalSkill = {
  category: string;
  skills: string[];
};

export const education: Education[] = [
  {
    institution: "St. Xavier's College",
    degree: "Bachelor of Science (B.Sc.)",
    field: "Information Technology",
    duration: "2024 - 2027",
    location: "Mumbai, India",
    cgpa: "9.02",
    graduation: "Expected March 2027",
    highlights: [
      "Consistently maintaining 9+ CGPA",
      "Focus on Full-Stack Development and Software Engineering",
      "Active participation in college tech fest (Malhar)",
      "Building production-ready applications alongside academics",
    ],
  },
];


export const technicalSkills: TechnicalSkill[] = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
      "GSAP",
      "Responsive Design",
      "Vite",
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      "Supabase",
      "PostgreSQL",
      "MySQL",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Supabase Edge Functions",
      "Row Level Security (RLS)",
      "Database Design & Normalization",
      "Authentication & Authorization",
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      "React Native",
      "Expo",
      "Flutter",
      "Dart",
      "Mapbox Integration",
      "Geolocation Services",
      "Camera Integration",
      "Mobile Authentication",
      "Cross-Platform Development",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Vercel",
      "Git & GitHub",
      "CI/CD Concepts",
      "Environment Variables",
      "Branch Management",
      "Production Debugging",
      "Deployment Optimization",
      "Performance Monitoring",
    ],
  },
  {
    category: "E-Commerce & CMS",
    skills: [
      "Shopify Storefront API",
      "Headless Commerce",
      "Sanity CMS",
      "Content Management",
      "Product Catalogs",
      "Payment Gateway Integration",
      "Shopping Cart Implementation",
    ],
  },
  {
    category: "AI & Data",
    skills: [
      "OpenCV",
      "Face Recognition",
      "Power BI",
      "AI Embeddings",
      "Semantic Search",
      "Vector Databases",
      "Python",
      "R (basics)",
      "Data Analysis",
      "Machine Learning (basics)",
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      "VS Code",
      "Figma",
      "Git Version Control",
      "PRD Documentation",
      "UI/UX Systems",
      "Design Systems",
      "API Integration",
      "Testing & Debugging",
      "Code Review",
      "Agile Workflow",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Freelance & Personal Projects",
    duration: "2023 - Present",
    location: "Mumbai, India",
    description: "Building production-ready web and mobile applications for clients and personal ventures, focusing on scalable architecture and modern development practices.",
    achievements: [
      "Developed 10+ production applications serving real users",
      "Built event ticketing platform handling concurrent bookings for college fest",
      "Created privacy-first AI application with end-to-end encryption",
      "Implemented payment gateways, email delivery, and QR systems",
      "Solved complex authentication, deployment, and production issues",
      "Maintained 9+ CGPA while building real-world applications",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "React Native",
    ],
  },
];

export const keyProjects = [
  {
    name: "DUMP - AI Memory Vault",
    type: "Privacy-First AI Application",
    impact: "Complete product with PRD, architecture, and implementation",
    technologies: ["Next.js", "React Native", "Supabase", "AI Embeddings", "E2E Encryption"],
  },
  {
    name: "Malhar Passes",
    type: "Event Ticketing SaaS",
    impact: "Production platform for college festival ticketing",
    technologies: ["Next.js", "Supabase", "QR Generation", "Payment Gateway", "Admin Dashboard"],
  },
  {
    name: "ReeStore",
    type: "E-Commerce Platform",
    impact: "Headless commerce with Shopify Storefront API",
    technologies: ["Next.js", "Shopify API", "TypeScript", "Tailwind"],
  },
  {
    name: "Bee & Beaver",
    type: "Fashion E-Commerce",
    impact: "Purpose-driven commerce with charity integration",
    technologies: ["Shopify", "Custom Theme", "JavaScript"],
  },
];

export const developmentApproach = {
  philosophy: "Building complete, production-ready products rather than small demos. Prefer scalable architectures over quick fixes.",
  process: [
    "Comprehensive planning with PRDs and design systems",
    "Type-safe development with TypeScript",
    "Security-first approach (authentication, encryption, RLS)",
    "Performance optimization and responsive design",
    "Production debugging and deployment",
    "Documentation and maintainability",
  ],
  strengths: [
    "Full product lifecycle from concept to deployment",
    "Solving real-world engineering problems",
    "Modern development workflow with AI assistance",
    "Quick learning and adaptation to new technologies",
    "Attention to UI/UX and user experience",
    "Database design and backend architecture",
  ],
  growthAreas: [
    "Advanced system design at scale",
    "Comprehensive testing strategies",
    "Data structures and algorithms for interviews",
    "Backend architecture for high-traffic applications",
    "Microservices and distributed systems",
  ],
};

export const stats = {
  projectsCompleted: 10,
  technologiesUsed: 30,
  yearsOfExperience: 2,
  currentCGPA: 9.02,
};
