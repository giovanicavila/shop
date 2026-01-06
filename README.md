

This project is a web application built with React, TypeScript, and Vite. It leverages TanStack Router for advanced routing and TanStack Query for efficient data fetching and caching.

## Overview

This repository contains a React application bootstrapped with Vite and written in TypeScript. The project is structured to support rapid development, easy testing, and production-ready builds. It includes strict linting and formatting rules to ensure code consistency and reliability.

## Features

- React 18+ with functional components and hooks
- TypeScript for static type checking
- Vite for fast development and optimized builds
- TanStack Router for flexible, type-safe routing
- TanStack Query for powerful data fetching, caching, and synchronization
- Modular component architecture
- Strict linting and formatting with Biome/Ultracite
- Accessibility and performance best practices
- Example authentication and theming context

## Project Structure

```
├── public/                # Static assets
├── src/                   # Application source code
│   ├── api/               # API utilities
│   ├── assets/            # Images and static resources
│   ├── components/        # Reusable UI components
│   ├── context/           # React context providers
│   ├── lib/               # Utility functions
│   ├── pages/             # Route-based pages
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── biome.json             # Biome/Ultracite configuration
└── README.md              # Project documentation
```

## Code Quality and Linting

This project uses [Ultracite](https://github.com/biomejs/ultracite) (Biome preset) for automated code formatting and linting. The configuration is defined in `biome.json` and enforced via pre-commit hooks.

To check for issues:

```sh
npx ultracite check
```

To automatically fix issues:

```sh
npx ultracite fix
```

Refer to `.github/copilot-instructions.md` for detailed code standards and best practices.

## Configuration

- **TypeScript:** Configuration is managed via `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.
- **Vite:** Build and development settings are in `vite.config.ts`.
- **ESLint/Biome:** Linting and formatting rules are in `biome.json` and `.github/copilot-instructions.md`.


