# Global Colors Company website

Single-page marketing site for Global Colors Company (HomeStyle Paints, BestWall, Tylac, Expresso, IBEX), converted from one static HTML file into Next.js (App Router), TypeScript and Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` (for example `https://example.com`) so Open Graph image URLs are absolute.

## Dealer enquiries by email

The "Become a Dealer" form validates with Zod (`src/utils/dealerLeadSchema.ts`, shared by the browser and the server), then calls a Server Action (`src/app/actions/submitDealerLead.ts`) that checks the lead again and emails it through SMTP with Nodemailer. The email template is in `src/server/dealerLeadEmail.ts`.

There are two ways to send. The simplest is Resend over HTTPS: set `RESEND_API_KEY` (see `.env.example`), which works from any network and needs no mail-server ports or IP rules. Otherwise the site uses SMTP: copy `.env.example` to `.env.local` and fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` and `SMTP_PASS`. Optionally set `LEAD_TO_EMAIL` (the inbox that receives leads) and `SMTP_FROM` (the sender, which must be a verified sender at your provider); both default to the company address in `src/constant/siteData.ts`. Set the same variables in the hosting dashboard (for example Vercel > Project > Settings > Environment Variables), because `.env.local` is not deployed. Restart the dev server after changing them. Failures are logged on the server as `[dealer-lead] ... NOT sent kind=...` with no secrets in them.

Spam protection: a hidden bot-trap field, plus at most 5 enquiries per visitor per 15 minutes (kept in memory, so it resets when the server restarts).

## Structure

| Path | What lives there |
| --- | --- |
| `src/app/globals.css` | Design tokens (colours, type scale, spacing, motion) and keyframes |
| `src/app/(main)/page.tsx` | The page: Hero, Marquee, Brands, Audience, Product range, Colour studio, Why us, About, Dealer |
| `src/components/typography/` | Heading, paragraph and text components. Use these, not raw tags |
| `src/components/{button,inputField,layout,ui,icons}/` | Shared building blocks |
| `src/components/pages/` | Section components, one folder per section (`navbar`, `footer`, `landing-page/*`) |
| `src/constant/` | All copy and data, so components hold layout only |
| `src/hooks/`, `src/utils/` | Shared hooks, the wall-recolour engine and form validation |
| `public/assets/` | Images, logos and icons, served from `/assets/...` |

## Conventions

- Server Components by default. Client components are small islands: header state, nav menus, brand directory, hero and colour-studio wall painting, reveal and count-up, accordion, project slideshow, sector tabs, dealer form.
- Styling is Tailwind utilities only. Colours, type sizes and spacing come from the tokens in `globals.css`.
- Components stay under about 200 lines. Variants are props, not class overrides.

## Known gaps

- The footer still shows a "to be supplied" tag for the working hours. This comes from the source design and needs client content.
