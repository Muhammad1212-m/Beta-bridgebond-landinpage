# Bridgebond.ai Landing Page

## Overview

This is a conversion-focused landing page for Bridgebond.ai, a culture connectivity platform targeting the modern workforce. The application is designed as a beta teaser to capture early access signups for a product launching in Early 2026. Built with Next.js and React, it features a clean, mobile-first design optimized for conversion with a hero section, signup form, and minimal navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js with React**: Chosen for its server-side rendering capabilities, built-in optimization features, and excellent developer experience. Uses the App Router for modern routing patterns.
- **TypeScript**: Provides type safety and better developer experience, despite the original prompt requesting JavaScript-only implementation.

### Styling and UI
- **Tailwind CSS**: Selected for rapid development and consistent design system implementation. Custom configuration extends the default theme with brand-specific colors and spacing.
- **Shadcn/ui Components**: Comprehensive component library built on Radix UI primitives, providing accessible and customizable UI components with consistent styling.
- **Custom Design System**: Implements a cohesive color palette with primary brand color (#8BD5FB), neutral backgrounds, and carefully chosen typography hierarchy.

### Layout and Components
- **Component-Based Architecture**: Modular structure with reusable components (Header, Hero, SignupForm, Footer, MobileCTA) for maintainability.
- **Mobile-First Design**: Responsive layout with mobile-specific features like sticky bottom CTA and optimized form layouts.
- **Smooth Scrolling Navigation**: JavaScript-based scroll behavior for seamless user experience when navigating to form sections.

### State Management
- **React Query (TanStack Query)**: Integrated for future API interactions and server state management, though currently minimal usage.
- **Local Component State**: Uses React's built-in useState for form handling and UI interactions.

### Form Handling
- **React Hook Form**: Prepared for advanced form validation and submission handling.
- **Client-Side Validation**: Email format validation and required field checking with real-time error display.

### Development Tools
- **Vite Configuration**: Alternative build system configured alongside Next.js for enhanced development experience.
- **ESLint and TypeScript**: Code quality and type checking tools for maintaining code standards.

## External Dependencies

### UI and Styling
- **Radix UI Primitives**: Provides accessible, unstyled UI components as foundation for the design system
- **Lucide React**: Icon library for consistent iconography throughout the application
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **Class Variance Authority**: Type-safe utility for creating variant-based component APIs

### Development and Build
- **Next.js**: React framework with built-in optimizations and server-side rendering
- **Vite**: Fast build tool and development server (configured as alternative)
- **PostCSS and Autoprefixer**: CSS processing pipeline for browser compatibility

### Database and Backend (Prepared)
- **Drizzle ORM**: TypeScript ORM configured for PostgreSQL database interactions
- **Neon Database**: Serverless PostgreSQL database service (configured but not actively used)
- **Database Schema**: Basic user table structure defined for future authentication/user management

### Fonts and Assets
- **Google Fonts**: Inter and DM Sans fonts loaded via CDN for typography
- **Static Assets**: Logo and app mockup images stored in public/assets directory

### Future Integrations
- **Form Submission**: Prepared infrastructure for handling beta signup submissions
- **Analytics**: Structure ready for conversion tracking and user behavior analysis
- **Email Services**: Framework prepared for automated email notifications to beta signups