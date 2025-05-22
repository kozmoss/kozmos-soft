# Kozmos Soft



Welcome to **Kozmos Soft**! This is the official repository for my personal website, which will be deployed to production. The site showcases my services in **AI integration**, **mobile web development**, **AI agent creation**, and **AI chat application development**. It also serves as a demonstration platform for what these technologies can achieve.

The live site will be available at [kozmos-soft.com](https://kozmos-soft.com/)

---

## Key Dependencies & Technologies

This project leverages a modern and powerful stack. Below is an overview of the core technologies and libraries used:

---
### Core Framework & Libraries

* **[Next.js (v15.2.4)](https://nextjs.org/):** A popular React framework for building server-rendered (SSR) and statically generated (SSG) web applications.

* Advanced routing for seamless navigation and performance.
* React Server Components (RSCs) and Server Actions for server-side rendering and increased performance


* **Vercel Functions (v2.1.0):** For deploying serverless functions.

---
### UI & Styling

* **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom designs.
* **[Shadcn/ui](https://ui.shadcn.com/):** Beautifully designed components that you can copy and paste into your apps. Built with Radix UI and Tailwind CSS.
    * **tailwind-merge (v3.0.2):** Utility function to efficiently merge Tailwind CSS classes.
    * **clsx (v2.1.1):** A tiny utility for constructing `className` strings conditionally.
    * **class-variance-authority (v0.7.1):** For creating variants of UI components.
* **Radix UI:** A collection of unstyled, accessible, and customizable UI primitives (forms the basis for Shadcn/ui components).
    * `@radix-ui/react-accordion (v1.2.8)`
    * `@radix-ui/react-alert-dialog (v1.1.14)`
    * *(...other Radix UI components...)*
* **Lucide React (v0.484.0):** SVG icons.
* **@tabler/icons-react (v3.31.0):** SVG icon set.
* **Sonner (v2.0.2):** Toast component.
* **Next Themes (v0.4.6):** Theme management.


---
### Animation

* **Framer Motion (v12.7.4):** Motion library for React.
* **tw-animate-css (v1.2.4):** Animate.css with Tailwind CSS.

---
### Forms
* **React Hook Form (v7.56.2):** Form management.
* **Zod (v3.24.4):** Schema declaration and validation.

---
### Database & ORM

* **[Neon Serverless Postgres](https://neon.tech/) via [@vercel/postgres (v0.10.0)](https://vercel.com/docs/storage/vercel-postgres):** A Vercel-SDK for using serverless PostgreSQL databases.
* **Postgres (v3.4.5):** PostgreSQL client library.
* **Drizzle ORM (v0.43.1):** TypeScript ORM.
* **Redis (v5.1.0):** In-memory data store.

---
### Authentication

* **[NextAuth.js (v5.0.0-beta.25)](https://next-auth.js.org/):** Authentication for Next.js applications (referred to as **Auth0** in the prompt, but NextAuth.js is listed in dependencies).
* **bcrypt-ts (v7.0.0):** Password hashing.
* **Firebase (v11.6.1) & Firebase Admin (v13.4.0):** Backend services platform.

---
### AI & 

* **[AI SDK (Vercel)](https://sdk.vercel.ai/docs):** Libraries for building AI-powered applications.
    * Unified API for generating text, structured objects, and tool calls with LLMs
    * Hooks for building dynamic chat and generative user interfaces
    * Supports xAI (default), OpenAI, Fireworks, and other model providers

---
### Drag & Drop

* **@dnd-kit/core (v6.3.1):** Drag and drop toolkit.
    *(...@dnd-kit sub-packages...)*

---
### 3D Graphics & Visualization ✨

* **Three.js (v0.175.0):** JavaScript 3D library.
* **@react-three/fiber (v9.1.2):** React renderer for Three.js.
* **@react-three/drei (v10.0.6):** Helpers for `@react-three/fiber`.
* **@splinetool/react-spline (v4.0.0):** Embed Spline 3D scenes.

---
### Utilities & Storage

* **next-intl (v4.0.2):** Internationalization for Next.js.
* **usehooks-ts (v3.1.1):** React hooks.
* **[@vercel/blob (v1.0.2)](https://vercel.com/docs/storage/vercel-blob):** For efficient file storage on Vercel.

<details> <summary><strong>📁 .env.local</strong> (click to expand)</summary>
# 📚 Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
POSTGRES_URL="postgresql://username:password@localhost:5432/database_name"

#  Redis Configuration
REDIS_URL="redis://localhost:6379"

#  Authentication (NextAuth)
NEXTAUTH_SECRET="your-nextauth-secret"

#  AI Services
XAI_API_KEY="your-xai-api-key"

# ☁️ Vercel Integration (optional)
BLOB_READ_WRITE_TOKEN="your-blob-token"

</details>
