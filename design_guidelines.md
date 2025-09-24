# Bridgebond.ai Beta Teaser Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS landing pages like Linear, Notion, and Framer with emphasis on conversion optimization and mobile-first design.

## Core Design Elements

### Color Palette
- **Primary**: #8BD5FB (196 85% 74%) - Used for CTA buttons and key accents
- **Neutrals**: Pure white (#FFFFFF), rich black (#000000)
- **Backgrounds**: Light gray (210 20% 98%) for subtle section separation
- **Text**: Charcoal gray (220 9% 46%) for body text, black for headings

### Typography
- **Primary Font**: Inter via Google Fonts CDN
- **Fallback**: DM Sans via Google Fonts CDN
- **Hierarchy**: 
  - Hero headline: text-5xl font-bold
  - Subheadline: text-xl font-medium
  - Body text: text-base font-normal
  - Form labels: text-sm font-medium

### Layout System
**Tailwind Spacing Primitives**: Use units of 4, 6, 8, 12, 16, 24 for consistent rhythm
- Sections: py-16 for desktop, py-12 for mobile
- Component spacing: gap-6 between form fields, gap-8 between sections
- Container: max-w-4xl mx-auto px-6

### Component Library

#### Hero Section
- Full-width container with centered content
- Large headline with generous line-height (leading-tight)
- Prominent CTA button with primary color background
- App mockup image positioned prominently

#### Signup Form
- Clean form design with subtle borders (border-gray-200)
- Focus states using primary color ring
- Rounded corners (rounded-lg) for modern feel
- Error states with red text and border highlighting

#### Navigation & CTAs
- Minimal navigation (footer-only external links)
- Primary CTA: Solid button with primary background
- Mobile sticky CTA: Fixed bottom positioning with backdrop blur
- Smooth scroll behavior for form navigation

#### Footer
- Simple layout with logo, contact, and single social link
- Muted text colors for secondary information

## Mobile-First Responsive Design
- Stack elements vertically on mobile
- Larger touch targets (min-h-12 for buttons)
- Sticky CTA button on mobile for persistent access
- Optimized form layout for mobile keyboards

## Visual Treatments
- **Minimal animations**: Subtle fade-in effects only
- **Generous whitespace**: Breathing room around all elements
- **Clean typography**: High contrast for readability
- **Subtle shadows**: Use sparingly for form elements and buttons

## Images
The website features a **large hero image** - the app mockup provided should be prominently displayed in the hero section, likely taking up significant visual space on desktop and scaled appropriately for mobile viewing.

## Performance & Accessibility
- Fast loading with optimized assets
- High contrast ratios for text readability
- Proper focus management for form interactions
- Semantic HTML structure for screen readers