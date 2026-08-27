# Apeksha Gupta — Portfolio (React + TypeScript + Tailwind)

This is your portfolio converted from static HTML/CSS/JS into a
React + TypeScript project, built with Vite. Tailwind CSS is wired
into the build; the original design system (dark/light theme, gradients,
scroll-reveal animations) lives in `src/index.css` as global CSS
variables and rules, since that's bespoke design work rather than
standard Tailwind utility patterns — you can gradually migrate pieces
of it to Tailwind utilities later if you want.

## Project structure

```
portfolio-react/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.ts
├─ tsconfig.json
└─ src/
   ├─ main.tsx              # React entry point
   ├─ App.tsx                # Assembles all sections, owns toast/theme state
   ├─ index.css              # Design tokens + Tailwind directives + component CSS
   ├─ data/
   │  └─ portfolioData.ts    # ← ALL your content lives here (edit this file!)
   ├─ types/
   │  └─ index.ts            # Shared TypeScript interfaces
   ├─ hooks/
   │  ├─ useTheme.ts          # Dark/light theme + localStorage persistence
   │  ├─ useScrollReveal.ts   # IntersectionObserver-based reveal-on-scroll
   │  ├─ useActiveSection.ts  # Highlights the nav link for the visible section
   │  └─ useScrollState.ts    # Header shadow + "back to top" button visibility
   └─ components/
      ├─ Header.tsx
      ├─ Hero.tsx
      ├─ About.tsx
      ├─ Skills.tsx
      ├─ Experience.tsx
      ├─ Projects.tsx
      ├─ Education.tsx
      ├─ Certifications.tsx
      ├─ ResumeSection.tsx
      ├─ Contact.tsx
      ├─ Footer.tsx
      ├─ Toast.tsx
      └─ BackToTop.tsx
```

## Step-by-step: run it locally

1. **Install Node.js** (v18 or newer) if you don't have it: https://nodejs.org

2. **Unzip the project** and open a terminal in the `portfolio-react` folder.

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the dev server:**
   ```bash
   npm run dev
   ```
   Open the printed local URL (usually `http://localhost:5173`) — you should see
   the exact same portfolio, now running as a React app with hot reload.

5. **Edit your content** in `src/data/portfolioData.ts` — this single file holds
   your name, skills, experience, projects, education, certifications, and
   contact links. Change the placeholder strings to your real info; the page
   updates instantly.

6. **Replace remaining placeholders:**
   - Swap the `<User />` icon avatar in `Hero.tsx` for a real `<img>` once you
     have a profile photo (drop it in a `public/` folder and reference it,
     e.g. `<img src="/avatar.jpg" alt="Apeksha Gupta" />`).
   - Update `CONTACT_EMAIL` in `portfolioData.ts` to your real email — this
     powers the "Send Message" mailto link.
   - Add real GitHub/LinkedIn/resume links in `portfolioData.ts`
     (`socialLinks`, `contactLinks`, and the Resume button in `ResumeSection.tsx`).

7. **Build for production when ready:**
   ```bash
   npm run build
   ```
   This outputs a deployable static site into `dist/`. Preview it locally with:
   ```bash
   npm run preview
   ```

8. **Deploy** the `dist/` folder to any static host — Vercel, Netlify, GitHub
   Pages, or Cloudflare Pages all work with zero extra config for a Vite app.

## Notes on the conversion

- **Icons:** the original used `lucide` via CDN `<script>`; this version uses
  the `lucide-react` package, imported per-icon (tree-shaken, no CDN needed).
- **Theme toggle:** `useTheme.ts` replaces the inline `<script>` that read/wrote
  `localStorage` and toggled `data-theme` on `<html>`.
- **Scroll-reveal / active nav / back-to-top:** each became its own small hook
  (`useScrollReveal`, `useActiveSection`, `useScrollState`) instead of one big
  IIFE, so you can reuse them independently.
- **Contact form:** now a controlled React form; submission still opens the
  user's email client via a `mailto:` link, same as the original — swap this
  for a real backend or a service like Formspree whenever you're ready to
  collect submissions server-side.
- **Tailwind:** installed and configured (`tailwind.config.js`, `postcss.config.js`,
  `@tailwind` directives in `index.css`) so you can start writing new sections
  with Tailwind utility classes immediately, alongside the existing custom CSS.
