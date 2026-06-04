# Bellecroft Official Website

Welcome to the Bellecroft Official Website codebase! This is a modern, responsive frontend application built with React and Tailwind CSS.

## 📋 Overview

This repository contains the source code for the Bellecroft official website. It's a lightweight, fast, and user-friendly frontend application designed to showcase Bellecroft's services and brand.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) - A JavaScript library for building user interfaces
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- **Linting**: [ESLint](https://eslint.org/) - JavaScript linting utility

## 📁 Project Structure

```
bellecroft-official-site/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   └── assets/           # Static assets (images, icons)
├── public/               # Public static files
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── eslint.config.js      # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bellecroft-official-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

### Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 💻 Development

### Running the Development Server

```bash
npm run dev
```

This starts a local development server with hot module replacement (HMR), allowing you to see changes in real-time as you edit files.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

This allows you to test the production build locally before deployment.

### Linting

```bash
npm run lint
```

Ensure your code adheres to the project's ESLint rules.

## 🎨 Tailwind CSS

Tailwind CSS is used for styling. All styles are utility-based, making it easy to build responsive and consistent designs.

### Key Features:

- **Utility-first approach** - Build designs without writing CSS
- **Responsive design** - Mobile-first breakpoints
- **Dark mode support** - Built-in dark mode utilities
- **Customizable** - Extend default configuration in `tailwind.config.js`

Learn more at [Tailwind CSS Documentation](https://tailwindcss.com/docs).

## 📝 Notes

- This is a **frontend-only** repository. The UI components and pages are included here.
- All styling is done with Tailwind CSS for consistency and maintainability.

## 🤝 Contributing

When contributing to this project, please:

1. Follow the existing code structure and naming conventions
2. Use TypeScript for type safety
3. Ensure your code passes ESLint checks (`npm run lint`)
4. Test your changes locally with `npm run dev`

## 📦 Deployment

To deploy the application:

1. Build the project: `npm run build`
2. Deploy the contents of the `dist/` directory to your hosting service

## 📞 Support

For questions or issues, please open an issue on the repository or contact the team.

---

