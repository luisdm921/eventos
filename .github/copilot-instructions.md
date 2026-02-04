# Events Business Next.js Template - Copilot Instructions

## Project Overview

Modern Next.js template for events businesses featuring:

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Responsive design
- Multimedia galleries
- SEO optimization

## Development Status

- [x] Create copilot-instructions.md
- [x] Get project setup information
- [x] Scaffold Next.js project
- [x] Create project structure
- [x] Install dependencies
- [x] Verify compilation
- [x] Create documentation

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con Navbar y Footer
│   ├── page.tsx            # Página principal con todas las secciones
│   └── globals.css         # Estilos globales de Tailwind
└── components/
    ├── Navbar.tsx          # Navegación responsiva
    ├── Footer.tsx          # Footer con información de contacto
    └── sections/
        ├── Hero.tsx        # Sección hero con animaciones
        ├── Services.tsx    # Tarjetas de servicios
        ├── Gallery.tsx     # Galería filtrable de imágenes
        ├── About.tsx       # Información de la empresa
        └── Contact.tsx     # Formulario de contacto
```

## Tech Stack

- **Framework**: Next.js 14.2 with App Router
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0
- **Icons**: React Icons 5.0

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open http://localhost:3000

## Customization Guide

1. **Colors**: Edit `tailwind.config.ts`
2. **Content**: Update component files in `src/components/sections/`
3. **Images**: Add to `public/images/` or use external URLs
4. **Metadata**: Edit `src/app/layout.tsx`
