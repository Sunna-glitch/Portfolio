<div align="center">

# 🟧 Mi Portafolio

**Mi rincón en internet** — un portafolio personal minimalista con un toque de movimiento.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)

[Ver demo](#) · [Reportar un bug](../../issues)

</div>

---

## ✨ Sobre este proyecto

Un portafolio simple y directo: fondo oscuro, acentos naranja y una animación de cuadritos que suben desde abajo y desaparecen (con tamaños, velocidad y opacidad aleatorios). Sin librerías de UI, sin animaciones importadas — solo React, Tailwind y un poco de CSS.

## 🚀 Características

- 🟧 **Cuadritos flotantes animados** — aparecen desde abajo y suben hasta desaparecer, con tamaño, posición, giro y velocidad aleatorios
- 🌓 **Modo claro / oscuro** — respeta la preferencia del sistema y recuerda tu elección
- 🌐 **Bilingüe ES / EN** — detecta el idioma del navegador y cambia al instante
- 📱 **Responsive** — se adapta a móvil, tablet y escritorio
- 🍔 **Menú desplegable** — un solo botón en todas las resoluciones, se cierra con clic fuera o con `Escape`
- 📝 **Lista de proyectos minimalista** — estilo editorial, sin ruido
- 💌 **Formulario de contacto** — abre tu cliente de correo con el mensaje ya redactado
- ⚡ **Rápido y ligero** — sin dependencias de UI, animaciones aceleradas por GPU
- ♿ **Accesible** — respeta `prefers-reduced-motion`, navegación por teclado y atributos ARIA

## 🛠️ Hecho con

| Tecnología | Uso |
| --- | --- |
| [React](https://react.dev) | Librería de UI |
| [Vite](https://vite.dev) | Bundler y servidor de desarrollo |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos y animaciones |
| [Space Grotesk](https://fonts.google.com/species/Space+Grotesk) + [Inter](https://fonts.google.com/species/Inter) | Tipografías |

<<<<<<< HEAD
## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/portfolio.git
cd portfolio
```

2. Instala las dependencias:

```bash
npm install
```

3. Levanta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción |

## 🗂️ Estructura

```
src/
├── components/
│   ├── FloatingSquares.jsx   # 🟧 Cuadritos animados del fondo
│   ├── Navbar.jsx            # Barra + menú desplegable + botones de idioma y tema
│   ├── Hero.jsx              # Sección de inicio
│   ├── Projects.jsx          # Lista de proyectos
│   ├── Contact.jsx           # Formulario e info de contacto
│   ├── Footer.jsx            # Pie de página
│   └── Icons.jsx             # Iconos SVG en línea
├── i18n.jsx                  # 🌐 Provider de idioma (ES/EN)
├── theme.jsx                 # 🌓 Provider de tema (claro/oscuro)
├── data.js                   # ✏️ Tu info: nombre, bio, proyectos, redes
├── App.jsx
├── index.css                 # Tailwind + temas + keyframes de la animación
└── main.jsx
```

## ✏️ Personalización

Todo el contenido vive en **`src/data.js`**:

- `profile` → tu nombre, rol, bio, email, ubicación, habilidades y redes sociales
- `projects` → tus proyectos (título, descripción, tecnologías y enlaces)
- `ui` → textos de la interfaz por idioma

Los textos traducibles van como `{ es: '...', en: '...' }`.

La animación de los cuadritos se ajusta en `src/components/FloatingSquares.jsx`
(cantidad, tamaños, colores) y sus keyframes en `src/index.css`. Los colores de
ambos temas (claro/oscuro) también se definen como tokens en `src/index.css`.

=======
>>>>>>> 92ee3abbc689a723e3eee1f271bf34a72c9f8fd3
## 📄 Licencia

Distribuido bajo la licencia MIT. Consulta [`LICENSE`](LICENSE) para más información.

<div align="center">
  
### 📬 ¿Hablamos?

[![GitHub](https://img.shields.io/badge/GitHub-tuusuario-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/tuusuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tuusuario-0A66C2?logo=linkedin&logoColor=white&style=flat-square)](https://www.linkedin.com/in/tuusuario)
[![Email](https://img.shields.io/badge/Email-hola@tucorreo.com-EA4335?logo=gmail&logoColor=white&style=flat-square)](mailto:hola@tucorreo.com)

</div>
