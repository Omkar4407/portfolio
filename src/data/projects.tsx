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
      {repo && (
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
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  shadcn: { title: "ShadCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  shopify: { title: "Shopify", bg: "black", fg: "white", icon: <SiShopify /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
  vercel: { title: "Vercel", bg: "black", fg: "white", icon: <SiVercel /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
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
};

const projects: Project[] = [
  {
    id: "adsmagnify",
    category: "Ed-Tech / Marketing",
    title: "Adsmagnify Academy",
    src: "/assets/projects-screenshots/adsmagnify/landing.png",
    screenshots: ["landing.png"],
    live: "https://adsmagnifyacademy.com/",
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
        <div>
          <TypographyP className="font-mono">
            Adsmagnify Academy is a South Bombay-based AI digital marketing
            institute with an intentionally small batch size — just 4 students —
            so every learner gets real mentorship, not just lectures. The site I
            built reflects that premium, focused experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">What it covers</TypographyH3>
          <p className="font-mono mb-2">
            Courses span SEO, paid ads, AI-driven marketing automation, and
            performance marketing — all backed by live projects and shadow
            internships. The landing page communicates this clearly with a clean
            layout and smooth animations.
          </p>
          <TypographyH3 className="my-4 mt-8">Design approach</TypographyH3>
          <p className="font-mono mb-2">
            Built with Next.js and Framer Motion, the site prioritizes
            conversion — guiding prospective students from curiosity to
            enrollment with a no-fluff, professional aesthetic that matches the
            academy&apos;s positioning.
          </p>
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
        <div>
          <TypographyP className="font-mono">
            Bee &amp; Beaver is a Mumbai-based clothing brand built around a
            simple but powerful idea — kindness, expressed. They sell premium
            oversized tees, and 5% of every order goes directly to Emmanuel
            Orphanage. Purpose-driven commerce done right.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">The build</TypographyH3>
          <p className="font-mono mb-2">
            Shopify-powered storefront with a custom theme tuned for the brand&apos;s
            warm, intentional aesthetic. Free shipping across India, clean
            product pages, and a checkout experience that doesn&apos;t get in the way
            of impulse buys.
          </p>
          <TypographyH3 className="my-4 mt-8">The impact</TypographyH3>
          <p className="font-mono mb-2">
            Every sale through this site isn&apos;t just a transaction — it&apos;s a small
            act of charity. Building something with that kind of direct social
            impact behind it hits different.
          </p>
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
        <div>
          <TypographyP className="font-mono">
            Purak Kala is a handcrafted art portfolio for Purva Kamthe — wall
            plates, canvas art, coasters, and personalized creations. The brief
            was simple: make the website feel as handmade as the art itself.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Design philosophy</TypographyH3>
          <p className="font-mono mb-2">
            Warm tones, soft transitions, and a layout that puts the artwork
            front and center. No distractions — just beautiful work, beautifully
            presented.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech</TypographyH3>
          <p className="font-mono mb-2">
            Built with React and Framer Motion for subtle, delightful animations
            that feel handcrafted in their own way. Deployed on Vercel for
            instant load times worldwide.
          </p>
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
        <div>
          <TypographyP className="font-mono">
            ReeStore is a modern health and wellness platform that curates
            nutrition and wellness products reviewed for quality, safety, and
            everyday use. The tagline says it best: better choices, better
            health, made simple.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Product curation</TypographyH3>
          <p className="font-mono mb-2">
            Every product on the platform is expert-reviewed and quality-checked
            — the site communicates that trust at every touchpoint, from the
            landing page through to checkout.
          </p>
          <TypographyH3 className="my-4 mt-8">The stack</TypographyH3>
          <p className="font-mono mb-2">
            Next.js + TypeScript frontend with ShadCN UI components, keeping the
            experience clean, accessible, and fast. A wellness platform that
            actually feels healthy to use.
          </p>
        </div>
      );
    },
  },
];

export default projects;