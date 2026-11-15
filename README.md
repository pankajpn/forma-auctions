# Auction House

React + TypeScript + Vite auction prototype, adapted from `reference/part-1-foundation/web`. Reuses the reference catalog, component structure, SVG hardware artwork, and marketplace styling. The reference directory is unchanged.

## Run

```sh
npm install
npm start
```

Open http://127.0.0.1:5173 after the server starts. These commands also work from the parent `auctionhouse-throwaway` folder. `npm run dev` remains available. Requires Node.js 20.19+ or 22.12+.

- `npm test`: catalog, search, sort, and theme validation tests.
- `npm run build`: strict TypeScript checks and production build.
- `/`: six auctions, search, category filters, sorting, and Classic / Midnight / Terminal theme selection.
- `/items/:slug`: illustration, price, bid count, seller, condition, description, and specifications.

Themes persist in localStorage. Bidding is a page-local demonstration with no backend or payment processing. Time-left values and seller information are sample data. Fonts use Google Fonts; hardware artwork is bundled SVG. Only two route patterns are used; searches and categories are homepage query parameters.
