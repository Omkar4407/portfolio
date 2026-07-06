import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiShopify,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVercel,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  reactNative: { title: "React Native", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  shadcn: { title: "ShadCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  shopify: { title: "Shopify", bg: "black", fg: "white", icon: <SiShopify /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
  vercel: { title: "Vercel", bg: "black", fg: "white", icon: <SiVercel /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  express: { title: "Express.js", bg: "black", fg: "white", icon: <SiExpress /> },
  postgresql: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  shortDescription?: string;
};

const projects: Project[] = [
  {
    id: "dump",
    category: "AI / Privacy-First",
    title: "DUMP - AI Memory Vault",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png"],
    live: "#",
    github: "#",
    shortDescription: "Privacy-first AI-powered memory vault with semantic search, end-to-end encryption, and local-first architecture.",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.postgresql,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.vercel,
      ],
    },
    get content() {
      return (
        <div className="space-y-6">
          <div className="prose dark:prose-invert">
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              DUMP is an AI-powered memory vault designed with privacy at its core. It enables users to store thoughts, notes, and memories 
              with intelligent semantic search while maintaining complete data sovereignty through end-to-end encryption.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Privacy & Security</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Local-first architecture with end-to-end encryption ensures your data never leaves your device unencrypted. 
                  Built with privacy regulations (GDPR, CCPA) in mind from day one.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">AI-Powered Semantic Search</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Advanced vector embeddings and semantic search allow you to find memories by meaning, not just keywords. 
                  Ask questions in natural language and get relevant results instantly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Cross-Platform</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Web application built with Next.js and mobile app using React Native/Expo. 
                  Seamless sync across devices while maintaining security and privacy standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Complete Design System</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Comprehensive PRD, UI specifications, and architecture planning. Built with scalable design patterns 
                  and comprehensive documentation for future development.
                </p>
              </div>
            </div>
          </div>

          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "malhar-passes",
    category: "Event Tech / SaaS",
    title: "Malhar Passes",
    src: "/assets/projects-screenshots/malharpasses/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    shortDescription: "Production event ticketing platform with QR generation, payment integration, admin dashboard, and multi-role authentication.",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.postgresql,
        PROJECT_SKILLS.vercel,
      ],
    },
    get content() {
      return (
        <div className="space-y-6">
          <div className="prose dark:prose-invert">
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              A comprehensive event ticketing platform built for Malhar (St. Xavier's College Mumbai's annual festival). 
              Handles ticket booking, payments, QR generation, scanning, and admin management for large-scale college events.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Complete Ticketing System</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  End-to-end ticket booking with real-time availability, payment gateway integration, QR code generation, 
                  and automated email delivery. Built to handle high concurrent traffic during festival booking windows.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">QR Scanner App</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Dedicated scanner application for event staff with offline-first capability, real-time validation, 
                  and bulk check-in support. Built with React Native for iOS and Android.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Admin Dashboard</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Comprehensive admin panel with analytics, real-time sales tracking, attendee management, 
                  role-based access control, and financial reporting. Built with Supabase RLS for security.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Automated Communications</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Email ticket delivery, booking confirmations, and WhatsApp OTP verification. 
                  Integrated with Supabase Edge Functions for serverless execution and scalability.
                </p>
              </div>
            </div>
          </div>

          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "adsmagnify",
    category: "Ed-Tech / Marketing",
    title: "Adsmagnify Academy",
    src: "/assets/projects-screenshots/adsmagnify/landing.png",
    screenshots: ["landing.png"],
    live: "https://adsmagnifyacademy.com/",
    shortDescription: "Premium AI digital marketing institute with personalized small-batch learning in South Bombay.",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [PROJECT_SKILLS.vercel],
    },
    get content() {
      return (
        <div className="space-y-6">
          <div className="prose dark:prose-invert">
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Adsmagnify Academy is a South Bombay-based AI digital marketing
              institute with an intentionally small batch size — just 4 students —
              so every learner gets real mentorship, not just lectures. The site I
              built reflects that premium, focused experience.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">What it covers</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Courses span SEO, paid ads, AI-driven marketing automation, and
                  performance marketing — all backed by live projects and shadow
                  internships. The landing page communicates this clearly with a clean
                  layout and smooth animations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Design approach</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Built with Next.js and Framer Motion, the site prioritizes
                  conversion — guiding prospective students from curiosity to
                  enrollment with a no-fluff, professional aesthetic that matches the
                  academy&apos;s positioning.
                </p>
              </div>
            </div>
          </div>

          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "beebeaver",
    category: "E-Commerce / Fashion",
    title: "Bee & Beaver",
    src: "/assets/projects-screenshots/beebeaver/landing.png",
    screenshots: ["landing.png"],
    live: "https://www.beebeaver.com/",
    shortDescription: "Mumbai-based sustainable clothing brand with purpose — 5% of every sale supports Emmanuel Orphanage.",
    skills: {
      frontend: [
        PROJECT_SKILLS.shopify,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.shopify],
    },
    get content() {
      return (
        <div className="space-y-6">
          <div className="prose dark:prose-invert">
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Bee &amp; Beaver is a Mumbai-based clothing brand built around a
              simple but powerful idea — kindness, expressed. They sell premium
              oversized tees, and 5% of every order goes directly to Emmanuel
              Orphanage. Purpose-driven commerce done right.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">The build</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Shopify-powered storefront with a custom theme tuned for the brand&apos;s
                  warm, intentional aesthetic. Free shipping across India, clean
                  product pages, and a checkout experience that doesn&apos;t get in the way
                  of impulse buys.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">The impact</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Every sale through this site isn&apos;t just a transaction — it&apos;s a small
                  act of charity. Building something with that kind of direct social
                  impact behind it hits different.
                </p>
              </div>
            </div>
          </div>

          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "purakkala",
    category: "Portfolio / Art",
    title: "Purak Kala",
    src: "/assets/projects-screenshots/purakkala/landing.png",
    screenshots: ["landing.png"],
    live: "https://purakkala.vercel.app/",
    shortDescription: "Elegant art portfolio showcasing handcrafted wall plates, canvas art, and personalized creations.",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.js,
      ],
      backend: [PROJECT_SKILLS.vercel],
    },
    get content() {
      return (
        <div className="space-y-6">
          <div className="prose dark:prose-invert">
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Purak Kala is a handcrafted art portfolio for Purva Kamthe — wall
              plates, canvas art, coasters, and personalized creations. The brief
              was simple: make the website feel as handmade as the art itself.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Design philosophy</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Warm tones, soft transitions, and a layout that puts the artwork
                  front and center. No distractions — just beautiful work, beautifully
                  presented.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Tech</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Built with React and Framer Motion for subtle, delightful animations
                  that feel handcrafted in their own way. Deployed on Vercel for
                  instant load times worldwide.
                </p>
              </div>
            </div>
          </div>

          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "reestore",
    category: "Wellness / E-Commerce",
    title: "ReeStore",
    src: "/assets/projects-screenshots/reestore/landing.png",
    screenshots: ["landing.png"],
    live: "https://reestore-lac.vercel.app/",
    shortDescription: "Curated health and wellness platform with expert-reviewed nutrition products for better living.",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [PROJECT_SKILLS.vercel],
    },
    get content() {
      return (
        <div className="space-y-6">
          <div className="prose dark:prose-invert">
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              ReeStore is a modern health and wellness platform that curates
              nutrition and wellness products reviewed for quality, safety, and
              everyday use. The tagline says it best: better choices, better
              health, made simple.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Product curation</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Every product on the platform is expert-reviewed and quality-checked
                  — the site communicates that trust at every touchpoint, from the
                  landing page through to checkout.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">The stack</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Next.js + TypeScript frontend with ShadCN UI components, keeping the
                  experience clean, accessible, and fast. A wellness platform that
                  actually feels healthy to use.
                </p>
              </div>
            </div>
          </div>

          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];

export default projects;