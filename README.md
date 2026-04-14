# Blog

Luxury-themed blog landing page built with React + Create React App. Includes a premium dark + gold design system, 3D cards, two distinct carousels, and an editorial “Journal” grid.

## Live / Demo

- Local dev: http://localhost:3001

## Tech Stack

- React 18
- Create React App (react-scripts)
- react-slick + slick-carousel (carousels)
- CSS (no CSS framework)

## Features

- Luxury theme (deep dark background + gold accents)
- Left hero panel with background image overlay + premium layout
- Featured carousel (center-mode, premium dots)
- Spotlight carousel (fade transition, distinct styling + distinct dataset)
- Journal grid cards with excerpt + meta and consistent image sizing
- Improved typography (Google Fonts: Poppins + Playfair Display)
- Premium footer styling with icon buttons

## Getting Started

### Requirements

- Node.js (LTS recommended)
- npm (comes with Node)

### Install

```bash
npm install
```

### Run (Development)

This project supports both commands:

```bash
npm run dev
```

or

```bash
npm start
```

Then open:

- http://localhost:3001

### Build (Production)

```bash
npm run build
```

### Tests

```bash
npm test
```

## Project Structure

```text
public/
  img/                 # demo images used by the UI
src/
  App.js
  App.css              # global theme + main layout
  components/
    Blog/
      BlogHome.js       # main page layout (hero + sections)
      Card.js           # journal grid section
      Card.css          # journal card styles
      Cdata.js          # journal data
      CardTwo.js        # spotlight carousel
      SpotlightData.js  # spotlight data
    Slide/
      Slide.js          # featured carousel
      Sdata.js          # featured data
      style.css         # carousel styles (featured + spotlight + dots)
    footer/
      Footer.js
      footer.css
```

## Customization

### Update Content

- Featured carousel data: `src/components/Slide/Sdata.js`
- Spotlight carousel data: `src/components/Blog/SpotlightData.js`
- Journal grid data: `src/components/Blog/Cdata.js`

### Theme / Styling

- Global theme tokens and layout: `src/App.css`
- Featured + Spotlight carousel styling: `src/components/Slide/style.css`
- Journal card styling: `src/components/Blog/Card.css`
- Footer styling: `src/components/footer/footer.css`

## Troubleshooting

### “npm run dev” missing script

Use `npm start` (CRA default) or ensure `dev` exists in `package.json` scripts.

### Images not showing

Images are referenced from `public/img/...`. Confirm the files exist in `public/img`.
