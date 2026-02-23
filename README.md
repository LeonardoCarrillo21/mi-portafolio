# 🚀 Mi Portafolio Profesional

¡Bienvenido a mi portafolio! Este es un sitio web dinámico y minimalista diseñado para mostrar mi trayectoria y proyectos de forma automatizada. El sitio consume directamente la API de GitHub para mantener mis últimos trabajos actualizados sin intervención manual.

**🔗 Ver sitio en vivo:** [https://mi-portafolio-henna-mu.vercel.app/](https://mi-portafolio-henna-mu.vercel.app/)

![Vista previa del portafolio](https://raw.githubusercontent.com/LeonardoCarrillo21/mi-portafolio/main/screenshot.png)

---

## 🛠️ Tecnologías utilizadas

Este proyecto aprovecha las últimas características del ecosistema de React y Next.js:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Gestión de Datos:** GitHub REST API
- **Envío de Correos:** [Resend](https://resend.com/) + Server Actions
- **Despliegue:** [Vercel](https://vercel.com/)

---

## ✨ Características y Funcionalidades Extra

### 🔄 Automatización con GitHub API
A diferencia de un portafolio estático, este sitio se gestiona directamente desde GitHub:
- **Filtrado Inteligente:** Solo se muestran los repositorios que contienen el topic `portfolio`.
- **Sincronización de Imágenes:** El sitio busca automáticamente un archivo `screenshot.png` en la raíz de cada repositorio para usarlo como miniatura.
- **Categorización por Topics:** Las etiquetas de cada proyecto se generan dinámicamente según los temas configurados en GitHub.

### 🌓 Experiencia de Usuario (UX)
- **Dark Mode Nativo:** Implementado con `next-themes` y un switch de "ojo" personalizado con validación de hidratación.
- **Navbar Inteligente:** Cambia su estilo (blur y transparencia) automáticamente al hacer scroll.
- **Animaciones On-Scroll:** Componente `Reveal` personalizado para una entrada fluida de los elementos.

---

## 📦 Instalación y Configuración Local

Si deseas clonar este proyecto y ejecutarlo en tu máquina:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/LeonardoCarrillo21/mi-portafolio.git](https://github.com/LeonardoCarrillo21/mi-portafolio.git)
   cd mi-portafolio
2. **Instalar dependencias:**
   ```bash
   npm install
3. **Configurar variables de entorno:**
   Crea un archivo .env.local en la raíz y añade tu llave de Resend:
   RESEND_API_KEY=re_tu_llave_aqui
4. **Ejecutar el servidor de desarrollo:**
   npm run dev

   Abre http://localhost:3000 en tu navegador.

Estructura del Proyecto
Plaintext
```text
├── public/          # Imágenes y archivos estáticos
├── src/
│   ├── app/         # Rutas, páginas y Server Actions
│   ├── components/  # Componentes (Navbar, ProjectCard, Reveal)
│   ├── data/        # Lógica de extracción de datos de GitHub
│   └── lib/         # Utilidades y configuración de APIs
└── tailwind.config/ # Configuración de estilos
```

✉️ Contacto
¿Tienes alguna pregunta o propuesta? ¡Escríbeme!

LinkedIn: Leonardo Carrillo

Email: carrillomartinezleonardojavier@gmail.com

Desarrollado con ❤️ por LeonardoCarrillo21
