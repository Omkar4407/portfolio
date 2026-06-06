# Omkar Bommakanti — Portfolio

My personal portfolio website. Built to reflect who I am as a developer — someone who ships real things, cares about the details, and doesn't do boring.

Live at: **[omkar.dev](https://nareshkhatri.site)** *(update this once deployed)*

---

## What's inside

A full-featured portfolio with space-themed aesthetics, 3D interactions, smooth animations, and a contact form that actually works. Every section is intentional — no filler content, no template copy-paste.

**Sections:**
- **Hero** — First impression. Name, role, links to resume, GitHub, LinkedIn.
- **Skills** — Interactive 3D keyboard built in Spline. Each keycap is a skill; hover to reveal.
- **Projects** — 2×2 grid of real-world client projects I've shipped.
- **Experience** — My internship at Adsmagnify Digital Solutions, where I built production websites and automation tools.
- **Contact** — FormSubmit-powered form. No backend, no API keys, straight to my inbox.

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, SCSS |
| UI Components | ShadCN UI, Aceternity UI, Radix UI |
| Animations | Framer Motion, GSAP |
| 3D | Spline Runtime |
| Contact Form | FormSubmit.co |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/Omkar4407/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
pnpm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **No `.env` file needed.** The contact form uses [FormSubmit.co](https://formsubmit.co) — no API keys, no backend setup required.

---

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── projects/       # Projects listing page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page (all sections)
├── components/
│   ├── sections/       # Hero, Projects, Skills, Experience, Contact
│   ├── ui/             # Reusable UI primitives
│   ├── header/         # Navbar
│   ├── footer/         # Footer
│   └── ContactForm.tsx # FormSubmit-powered contact form
├── data/
│   ├── projects.tsx    # All project data (edit this to update projects)
│   ├── constants.ts    # Skills, experience data
│   └── config.ts       # Site-wide config (name, email, social links)
└── hooks/              # Custom React hooks
```

---

## Customisation

### Update your details

Everything personal lives in `src/data/config.ts`:

```ts
const config = {
  author: "Omkar Bommakanti",
  email: "omkar.bomma2007@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/omkar-bommakanti-0a0314365/",
    github: "https://github.com/Omkar4407/",
  },
};
```

### Add or update projects

Edit `src/data/projects.tsx`. Each project object looks like:

```ts
{
  id: "my-project",
  category: "Category Label",
  title: "Project Title",
  src: "/assets/projects-screenshots/my-project/landing.png",
  screenshots: ["landing.png"],
  live: "https://myproject.com",
  skills: {
    frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
    backend: [PROJECT_SKILLS.supabase],
  },
  content: <div>...</div>, // Modal content shown on click
}
```

Drop project screenshots into `public/assets/projects-screenshots/<project-id>/`.

### Update skills or experience

Skills and experience data live in `src/data/constants.ts`. The `SKILLS` object maps skill names to icons and colours; `EXPERIENCE` is a straightforward array of job entries.

---

## Contact Form

The form uses [FormSubmit.co](https://formsubmit.co) — a free, zero-backend email forwarding service. When someone submits the form, the message is delivered directly to `omkar.bomma2007@gmail.com`.

First-time setup: FormSubmit will send a one-time confirmation email to activate your address. Click confirm and it works forever after.

No API keys. No `.env` file. No serverless functions. Nothing to configure.

---

## Deployment

The site is deployed on Vercel.

```bash
# Build for production locally
npm run build
npm run start
```

To deploy your own fork:

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Hit Deploy — no environment variables needed

---

## License

MIT — do whatever you want with it, just don't copy-paste it and call it your own portfolio. That'd be cringe.

---

Built by **Omkar Bommakanti** · [LinkedIn](https://www.linkedin.com/in/omkar-bommakanti-0a0314365/) · [GitHub](https://github.com/Omkar4407/)