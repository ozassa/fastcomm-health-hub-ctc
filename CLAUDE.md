# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with Vite
- `npm run build` - Production build with asset optimization
- `npm run build:dev` - Development build without optimization
- `npm run build:prod` - Production build with full optimization
- `npm run preview` - Preview production build locally
- `npm run commit` - Use conventional commits with Commitizen
- `npm run release` - Semantic release automation

### Asset Optimization
- `npm run optimize:assets` - Optimize all assets (images + videos)
- `npm run optimize:images` - Optimize images using Sharp (generates WebP/AVIF)
- `npm run optimize:videos` - Optimize videos for web delivery

### Testing & Quality
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI interface
- `npm run test:run` - Run tests once without watch mode
- `npm run test:coverage` - Run tests with coverage report (70% threshold)
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - TypeScript type checking without build

## Architecture Overview

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui components built on Radix UI
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM v6
- **Testing**: Vitest + Testing Library + jsdom
- **Build**: Vite with SWC for fast compilation
- **Analytics**: Vercel Analytics, Google Analytics 4, Facebook Pixel
- **Forms**: React Hook Form + Zod validation
- **Email Service**: EmailJS integration
- **Deployment**: Docker + Nginx for production

### Project Structure
```
src/
├── components/          # React components (section-based architecture)
│   ├── ui/             # shadcn/ui components (40+ reusable components)
│   ├── analytics/      # Google Analytics integration
│   └── __tests__/      # Component tests
├── pages/              # Route pages (Index, NotFound)
├── constants/          # Static data organized by section
├── hooks/              # Custom React hooks (mobile detection, toast, lazy video)
├── lib/                # Utility libraries (utils, emailjs)
├── utils/              # Helper functions (scroll, tracking)
├── config/             # Configuration files (Calendly)
└── assets/             # Static assets
```

### Additional Directories
```
public/                 # Static files (videos, logos, favicons)
scripts/                # Build optimization scripts
server/                 # Express email service
docs/                   # Documentation (lead tracking, webhooks)
api/                    # Serverless functions
```

### Key Patterns

**Component Architecture**:
- Large landing page composed of section components
- Each section wrapped in `SectionErrorBoundary` for resilience
- Constants extracted to separate files in `src/constants/`
- Common UI patterns use shadcn/ui components

**Data Organization**:
- Static content organized by section in `src/constants/`
- Common types and interfaces exported from `src/constants/index.ts`
- Shared button text and messaging patterns centralized

**Asset Management**:
- Images optimized automatically via `scripts/optimize-images.cjs`
- Generates WebP/AVIF formats with multiple sizes
- Video optimization via `scripts/optimize-videos.cjs`
- Lazy loading implementation for images and videos

**Error Handling**:
- Global `ErrorBoundary` wraps entire app
- Section-specific `SectionErrorBoundary` for graceful degradation
- Each section isolated to prevent cascading failures

**Testing**:
- Component tests in `src/components/__tests__/`
- Utility tests in `src/lib/__tests__/`
- Uses Vitest + Testing Library + jsdom
- Coverage thresholds: 70% for branches, functions, lines, statements
- UI components and constants excluded from coverage

### Import Patterns
- Uses `@/` alias for `src/` directory
- UI components imported from `@/components/ui/`
- Constants imported from `@/constants/`
- Utilities from `@/lib/utils`

### Styling Conventions
- Tailwind CSS with custom theme in `tailwind.config.ts`
- Component-specific styles using CSS modules when needed
- Consistent spacing and typography via design tokens

### Performance Optimizations
- Lazy loading for images and videos
- Asset optimization pipeline for production builds
- Code splitting via React Router
- Error boundaries prevent full app crashes

## Business Context

This is a healthcare technology marketing website for FastComm's FHIR R4 compliance platform:
- **Target Audience**: Healthcare professionals and institutions
- **Primary Language**: Portuguese (Brazilian market)
- **Focus**: Hospital integration and healthcare interoperability
- **Lead Generation**: Contact forms with CRM integration (ikv360)
- **Analytics**: Multi-platform tracking (GA4, Facebook Pixel, Vercel)

### Key Domains
- **Production**: https://www.fastcomm.com.br
- **Staging**: https://staging.fastcomm.com.br

## Development Notes

**Asset Optimization**: The project includes comprehensive asset optimization. Always run `npm run optimize:assets` before production builds.

**Content Updates**: Static content is centralized in `src/constants/`. Update these files rather than hardcoding content in components.

**Testing**: Always run tests before committing. Use `npm run test:coverage` to ensure adequate coverage (70% threshold).

**Component Development**: Follow shadcn/ui patterns for new components. Place reusable components in `src/components/ui/`.

**Error Handling**: Wrap new sections in `SectionErrorBoundary` to maintain app stability.

**Code Quality**: Use `npm run lint:fix` for auto-fixing ESLint issues and `npm run format` for consistent code formatting.

**Type Safety**: Run `npm run type-check` for TypeScript validation without building.