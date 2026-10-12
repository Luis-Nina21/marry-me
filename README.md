# Marry Me · Landing page

Landing page de **Marry Me: Romance DMC & Destination Agency**, hecha con React + Vite + Tailwind CSS.

## Cómo ejecutarla en Visual Studio Code

1. Descomprime la carpeta y ábrela en VS Code (`Archivo > Abrir carpeta`).
2. Abre la terminal (`Ctrl + ñ`) y ejecuta:

```bash
npm install
npm run dev
```

3. Abre la dirección que aparece (normalmente http://localhost:5173).

Requiere Node.js 18 o superior.

## Versión de producción

```bash
npm run build     # genera la carpeta dist/
npm run preview   # prueba la versión compilada
```

## Qué editar

- `src/data/content.js`: textos, planes, precios, destinos, preguntas frecuentes y **datos de contacto** (WhatsApp, correo, Instagram). Reemplaza los datos de ejemplo antes de publicar.
- `tailwind.config.js`: paleta de colores (dorado, celeste pastel, rosa empolvado, crema) y tipografías.
- `src/components/`: una sección por archivo (Hero, Propuesta, Destinos, Planes, Proceso, Faq, Contacto).
- `src/components/DestinoArt.jsx`: ilustraciones de los destinos. Puedes cambiarlas por fotos reales en `public/`.

## Paleta

| Uso | Color |
| --- | --- |
| Dorado (principal) | `#C9A961` |
| Dorado oscuro (texto) | `#8C6F33` |
| Celeste pastel | `#A9D4E8` / `#E3F1F9` |
| Rosa empolvado | `#F7E6E4` |
| Crema / blanco | `#FDFBF7` / `#FFFFFF` |
| Texto | `#2E2C35` |

Tipografías: Cormorant Garamond (títulos) y Jost (texto).
