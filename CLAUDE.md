# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server (runs on localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Project Architecture

This is a Next.js 15 application for 황금쭈꾸미집 (Golden Octopus House) restaurant franchise landing page.

### Core Structure
- **Single Page Application**: All sections are rendered on one page with smooth scroll navigation
- **Section-based Layout**: Six main sections (Hero, Brand, Competitive, Menu, Franchise, Contact)
- **Component Architecture**: Components are organized into `layout/`, `sections/`, and `ui/` directories

### Key Technical Patterns

#### Navigation System
- Uses scroll-based active section detection in `src/app/page.tsx:44-64`
- Section IDs are mapped to display names in Header component
- Navigation triggers smooth scroll with header offset compensation

#### Image Management
- Images are stored in `/public/images/` with hash-based filenames
- Reference mapping documented in `IMAGE_MAPPING_GUIDE.md`
- Many images still need to be connected from reference HTML to local files

#### Animation Framework
- Framer Motion used throughout for transitions and interactions
- Common patterns: `whileHover`, `whileTap`, `initial/animate` for page sections
- Layout animations for active navigation indicators

### Component Dependencies
- **Header**: Controls navigation state and mobile menu
- **Page**: Manages scroll detection and active section state
- **Sections**: Each section component is self-contained with its own animations
- **ClientOnly**: Used for hydration-sensitive components

### Development Considerations
- Uses Korean language content and SEO metadata
- Mobile-first responsive design with lg: breakpoints
- Heavy use of Tailwind CSS with custom color scheme (red-600 primary)
- TypeScript strict mode with proper prop interfaces

### Image Connection Workflow
When connecting images from reference HTML:
1. Check `IMAGE_MAPPING_GUIDE.md` for current status
2. Images follow pattern: `./황금쭈꾸미집_files/[hash].ext` → `/images/[hash].ext`
3. Update component with correct image path
4. Verify image exists in `/public/images/` directory

### State Management
- Local component state for UI interactions (mobile menu, scroll position)
- Parent-child communication through props for navigation
- No external state management library used