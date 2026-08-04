# Bellecroft Official Site

Bellecroft Official Site is a modern, responsive React and TypeScript website for Bellecroft, a consultancy focused on strategic advisory, leadership development, professional training, and organizational support. The site presents the brand, services, methodology, team, and contact information through a polished multi-page experience.

## Overview

This project is a frontend-only marketing website built with Vite and Tailwind CSS. It uses React Router to navigate between dedicated pages and a component-driven structure for reusable sections such as the hero, services, team, and contact blocks.

## Tech Stack

- React 19
- TypeScript
- Vite 8
- React Router DOM
- Tailwind CSS 4
- ESLint

## Project Structure

```text
bellecroft-official-site/
├── public/                 # Static assets and public files
├── src/
│   ├── App.tsx             # Main route configuration
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles and shared theme tokens
│   ├── App.css             # Additional app-level styling
│   ├── assets/             # Images and media used across the site
│   ├── components/         # Reusable UI sections and layout blocks
│   └── pages/              # Route-level page components
├── index.html              # HTML entry template
├── package.json            # Scripts and dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## Main Pages and Routes

The application currently includes the following routes:

- `/` — Home page
- `/about` — About Bellecroft
- `/services` — Services overview
- `/industries` — Industries and sector focus
- `/insights` — Insights content area
- `/methodology` — Methodology and approach
- `/team` — Team information
- `/contact` — Contact details and inquiry form

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 20 or newer
- npm

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd bellecroft-official-site
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open the local preview in your browser
   ```text
   http://localhost:5173/
   ```

## Available Scripts

- `npm run dev` — Start the Vite development server with hot reload
- `npm run build` — Build the production bundle
- `npm run preview` — Preview the built app locally
- `npm run lint` — Run ESLint across the project

## Development Notes

- Page-level components live in [src/pages](src/pages).
- Reusable sections and layout blocks live in [src/components](src/components).
- Global styling, Tailwind setup, and shared design tokens are managed in [src/index.css](src/index.css).
- The site is currently frontend-only; there is no backend or API integration configured.

## Build and Deployment

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory and can be deployed to any static hosting provider.

## Contributing

When making changes:

- keep the structure modular and component-based
- prefer reusable components for shared sections
- maintain responsive layouts and accessibility considerations
- run `npm run lint` before submitting changes

