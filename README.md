# Wings 1 T9 MCQ Library

This Next.js 16 (App Router) project hosts the Wings 1 T9 MCQ PDFs with explanations for every core topic&mdash;Terraform, Ansible, Chef, Puppet, Linux, Git, CI/CD, Docker, and Kubernetes. Each PDF is viewable in-browser and downloadable for offline revision.

## Local development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to browse the library.

## Deploying to Vercel

```bash
pnpm dlx vercel
# afterwards, to ship updates:
pnpm dlx vercel --prod
```

You can also import the repository directly from the Vercel dashboard.

## Adding or updating PDFs

1. Drop the PDF file into `public/pdfs/`.
2. Append a new entry to `data/pdfs.ts` with a unique `slug`, display `title`, a short `description`, and the `/pdfs/<file>.pdf` path.
3. Re-deploy the site.

## Project structure

```
app/page.tsx     // Landing page with PDF cards and open/download buttons
data/pdfs.ts     // Metadata for all PDFs
public/pdfs/     // Static PDF assets served via /api/pdfs
```

Tailwind utility classes power the responsive layout. The viewer page embeds the PDF with an `<iframe>` and provides quick download/open-in-new-tab actions. Feel free to adjust colours or typography before deploying.***
