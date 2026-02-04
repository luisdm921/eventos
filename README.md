# 🎉 Premium Events - Plantilla Next.js para Negocios de Eventos

Una plantilla moderna y profesional de Next.js diseñada específicamente para negocios de eventos. Incluye diseño responsivo, animaciones suaves, galerías multimedia y formularios de contacto.

## ✨ Características

- **Next.js 14+** con App Router para máximo rendimiento
- **TypeScript** para seguridad de tipos
- **Tailwind CSS** para estilos modernos y responsivos
- **Framer Motion** para animaciones fluidas
- **React Icons** para iconografía profesional
- **Diseño Responsivo** optimizado para móviles, tablets y desktop
- **SEO Optimizado** con metadatos configurables
- **Secciones Completas**:
  - Hero con video/imagen de fondo
  - Servicios con tarjetas animadas
  - Galería filtrable de imágenes
  - Sección "Nosotros" con estadísticas
  - Formulario de contacto funcional
  - Footer con información de contacto

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado
- npm, yarn, o pnpm

### Instalación

1. **Clonar o descargar este proyecto**

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
Visita [http://localhost:3000](http://localhost:3000)

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm start` - Inicia servidor de producción
- `npm run lint` - Ejecuta ESLint

## 🎨 Personalización

### Colores

Los colores se configuran en [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    // Colores principales del negocio
    500: '#ef4444', // Cambiar según tu marca
  },
  secondary: {
    // Colores secundarios
    900: '#0f172a',
  },
}
```

### Contenido

1. **Hero Section** - [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx)
   - Actualiza el título, subtítulo y llamado a la acción
   - Cambia la imagen de fondo en la propiedad `backgroundImage`

2. **Servicios** - [src/components/sections/Services.tsx](src/components/sections/Services.tsx)
   - Modifica el array `services` con tus servicios
   - Cambia iconos importados de `react-icons/fa`

3. **Galería** - [src/components/sections/Gallery.tsx](src/components/sections/Gallery.tsx)
   - Actualiza `galleryItems` con tus propias imágenes
   - Las imágenes actuales usan Unsplash como placeholder

4. **Nosotros** - [src/components/sections/About.tsx](src/components/sections/About.tsx)
   - Personaliza texto descriptivo y estadísticas

5. **Contacto** - [src/components/sections/Contact.tsx](src/components/sections/Contact.tsx)
   - Actualiza información de contacto
   - Implementa lógica de envío de formulario

### Metadata y SEO

Edita [src/app/layout.tsx](src/app/layout.tsx):

```typescript
export const metadata: Metadata = {
  title: "Tu Empresa - Descripción",
  description: "Descripción de tu negocio de eventos",
  keywords: "eventos, bodas, conferencias...",
};
```

## 📁 Estructura del Proyecto

```
gok/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx             # Página principal
│   │   └── globals.css          # Estilos globales
│   └── components/
│       ├── Navbar.tsx           # Barra de navegación
│       ├── Footer.tsx           # Pie de página
│       └── sections/
│           ├── Hero.tsx         # Sección hero
│           ├── Services.tsx     # Sección servicios
│           ├── Gallery.tsx      # Galería de imágenes
│           ├── About.tsx        # Sección nosotros
│           └── Contact.tsx      # Formulario contacto
├── public/                      # Archivos estáticos
├── tailwind.config.ts           # Configuración Tailwind
├── tsconfig.json                # Configuración TypeScript
├── next.config.mjs              # Configuración Next.js
└── package.json                 # Dependencias
```

## 🖼️ Agregar Tus Propias Imágenes

1. Coloca imágenes en la carpeta `public/images/`
2. Referencia en componentes: `/images/tu-imagen.jpg`
3. O usa servicios externos (Unsplash, Cloudinary, etc.)

### Ejemplo con Next.js Image:

```tsx
import Image from "next/image";

<Image 
  src="/images/evento.jpg"
  alt="Descripción"
  width={800}
  height={600}
/>
```

## 📱 Secciones Responsivas

Todos los componentes están optimizados para:
- 📱 Móviles (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🎥 Agregar Videos

Para agregar video en la sección Hero:

```tsx
<video
  autoPlay
  loop
  muted
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/evento.mp4" type="video/mp4" />
</video>
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa proyecto en [Vercel](https://vercel.com)
3. Despliega automáticamente

### Otros Servicios

- **Netlify**: Compatible con Next.js
- **AWS Amplify**: Soporte completo
- **Digital Ocean**: App Platform

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea `.env.local` para configuraciones:

```env
NEXT_PUBLIC_CONTACT_EMAIL=info@tuempresa.com
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
```

### Formulario de Contacto

Para conectar el formulario a un servicio de email:

1. Usar [EmailJS](https://www.emailjs.com/)
2. Implementar API Route en Next.js
3. Usar [Formspree](https://formspree.io/)
4. Conectar con servicio de backend

## 📦 Dependencias Principales

```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "framer-motion": "^11.0.0",
  "react-icons": "^5.0.0",
  "tailwindcss": "^3.4.0"
}
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de:
- Reportar bugs
- Sugerir mejoras
- Enviar pull requests

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 💡 Consejos

1. **Optimización de Imágenes**: Usa formatos modernos (WebP, AVIF)
2. **Performance**: Minimiza animaciones en dispositivos móviles
3. **Accesibilidad**: Mantén contraste de colores adecuado
4. **SEO**: Añade metadatos en cada página
5. **Analytics**: Integra Google Analytics o similar

## 🆘 Soporte

¿Necesitas ayuda? 
- Revisa la [documentación de Next.js](https://nextjs.org/docs)
- Consulta [Tailwind CSS docs](https://tailwindcss.com/docs)
- Explora [Framer Motion](https://www.framer.com/motion/)

---

**¡Creado con ❤️ para ayudar a negocios de eventos a tener presencia online profesional!**
