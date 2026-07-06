const config = {
  title: "Omkar Bommakanti | Full-Stack Developer",
  description: {
    long: "Portfolio of Omkar Bommakanti, a B.Sc. IT student at St. Xavier's College Mumbai (CGPA: 9.02) and full-stack developer specializing in React, Next.js, TypeScript, and Supabase. Building production-ready applications with focus on scalable architecture, privacy-first design, and modern development practices. Experience with web, mobile, AI, and e-commerce solutions.",
    short:
      "Full-stack developer building production-ready applications with React, Next.js, TypeScript, and Supabase. B.Sc. IT at St. Xavier's College Mumbai.",
  },
  keywords: [
    "Omkar Bommakanti",
    "portfolio",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Supabase",
    "St. Xavier's College Mumbai",
    "web development",
    "mobile development",
    "React Native",
    "AI applications",
    "e-commerce",
    "Malhar",
    "DUMP",
    "privacy-first",
    "event ticketing",
    "Tailwind CSS",
    "PostgreSQL",
    "Vercel",
    "Shopify",
  ],
  author: "Omkar Bommakanti",
  email: "omkar.bomma2007@gmail.com",
  site: "https://nareshkhatri.site",
  location: "Mumbai, India",
  
  // Education
  education: {
    institution: "St. Xavier's College",
    degree: "B.Sc. Information Technology",
    duration: "2024 - 2027",
    cgpa: "9.02",
    location: "Mumbai, India",
  },

  // Current Status
  status: {
    available: true,
    openToWork: true,
    roles: ["Full-Stack Developer", "Frontend Developer", "Software Engineer"],
  },

  // for github stars button
  githubUsername: "Omkar4407",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/omkar-bommakanti-0a0314365/",
    github: "https://github.com/Omkar4407/",
    email: "mailto:omkar.bomma2007@gmail.com",
  },
};
export { config };
