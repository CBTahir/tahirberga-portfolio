# tahirberga.com

Personal portfolio built with Next.js and designed to deploy on Vercel.

## Deploy status

This project is ready for Vercel:
- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Development command: `npm run dev`
- Output directory: Vercel handles this automatically for Next.js

## 1. Edit your information

Open `lib/profile.ts` and replace:
- GitHub URL
- LinkedIn URL
- Email address. `hello@tahirberga.com` will only work after you configure email/forwarding for the domain
- project links (`href`)
- any biography, dates or experience text you want to change

Also update `public/llms.txt` if you change the facts in the profile.

## 2. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USER/tahirberga-portfolio.git
git push -u origin main
```

## 4. Deploy on Vercel with GitHub

1. Log into Vercel with GitHub.
2. Import the repository.
3. Keep the detected framework as Next.js.
4. Keep the default project settings, or use the commands from `vercel.json`.
5. Click Deploy.
6. In Project -> Settings -> Domains, add:
   - `tahirberga.com`
   - `www.tahirberga.com`
7. Vercel will show the DNS records to add in Namecheap.
8. In Namecheap -> Domain List -> Manage -> Advanced DNS, add exactly the DNS values Vercel gives you.

## Alternative: deploy from the terminal

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

Use this path if you want to deploy before connecting the GitHub repository.

## SEO / AI-readable endpoints

- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/profile.json`
- JSON-LD Person schema is embedded in the site layout

These make the site easy for search engines and retrieval systems to understand. They do not guarantee model training or indexing.
