# Global Colors Company website

Single-page marketing site for Global Colors Company (HomeStyle Paints, BestWall, Tylac, Expresso, IBEX), converted from one static HTML file into Next.js (App Router), TypeScript and Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` (for example `https://example.com`) so Open Graph image URLs are absolute.

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

- The dealer form validates in the browser only. It needs a backend before enquiries reach the sales team.
- The footer shows "to be supplied" tags for the office address, WhatsApp number and working hours. These come from the source design and need client content.
