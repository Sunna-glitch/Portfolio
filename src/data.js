// ─────────────────────────────────────────────────────────────
//  Personaliza aquí tu información: nombre, bio, enlaces y
//  proyectos. Todo el sitio se alimenta de este archivo.
//
//  Los textos van en ambos idiomas: { es: '...', en: '...' }
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Adrian',
  role: {
    es: 'Desarrollador Front-End',
    en: 'Front-End Developer',
  },
  bio: {
    es: 'Construyo interfaces modernas, rápidas y accesibles con React y Tailwind CSS. Me encanta convertir ideas en productos que la gente disfruta usar.',
    en: 'I build modern, fast and accessible interfaces with React and Tailwind CSS. I love turning ideas into products people enjoy using.',
  },
  email: 'adriandev@gmail.com',
  location: {
    es: 'Santo Domingo, República Dominicana',
    en: 'Santo Domingo, Dominican Republic',
  },
  availability: {
    es: 'Disponible',
    en: 'Available',
  },
  skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'Git & GitHub', 'Vite'],
  socials: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/tuusuario' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/tuusuario' },
    { label: 'X (Twitter)', icon: 'x', href: 'https://x.com/tuusuario' },
  ],
}

export const projects = [
  {
    title: {
      es: 'Tienda Online',
      en: 'Online Store',
    },
    description: {
      es: 'E-commerce con carrito de compras, filtros por categoría y pasarela de pago simulada.',
      en: 'E-commerce with shopping cart, category filters and a simulated checkout flow.',
    },
    tech: ['React', 'Tailwind CSS', 'Context API'],
    demo: '#',
    code: '#',
  },
  {
    title: {
      es: 'App del Clima',
      en: 'Weather App',
    },
    description: {
      es: 'Aplicación del clima con búsqueda por ciudad y pronóstico de 5 días en tiempo real.',
      en: 'Weather app with city search and a real-time 5-day forecast.',
    },
    tech: ['React', 'Vite', 'API REST'],
    demo: '#',
    code: '#',
  },
  {
    title: {
      es: 'Recordatorio de Tareas',
      en: 'Task Reminder',
    },
    description: {
      es: 'Recordatorio de tareas con prioridades, alertas de cuando vence, etiquetas y persistencia en localStorage.',
      en: 'Task reminder with priorities, due-date alerts, tags and localStorage persistence.',
    },
    tech: ['React', 'localStorage', 'CSS'],
    demo: '#',
    code: '#',
  },
  {
    title: {
      es: 'Asistente IA',
      en: 'AI Assistant',
    },
    description: {
      es: 'Una aplicación web que utiliza la API de OpenAI para responder preguntas y generar contenido.',
      en: 'A web app that uses the OpenAI API to answer questions and generate content.',
    },
    tech: ['React', 'OpenAI API', 'Node.js', 'Tailwind CSS', 'NVIDIA NIM API'],
    demo: '#',
    code: '#',
  },
]

// ─────────────────────────────────────────────────────────────
//  Textos de la interfaz por idioma
// ─────────────────────────────────────────────────────────────

export const ui = {
  es: {
    nav: {
      menu: 'Menú',
      close: 'Cerrar',
      home: 'Inicio',
      projects: 'Proyectos',
      contact: 'Contacto',
      letsTalk: 'Hablemos',
    },
    hero: {
      hello: 'Hola, soy',
      viewProjects: 'Ver proyectos',
      contactMe: 'Contáctame',
    },
    projects: {
      kicker: '01 · proyectos',
      title: 'Cosas que he construido',
      desc: 'Algunos proyectos personales y de práctica. El código de cada uno está en su repositorio.',
      viewCode: 'Ver código de',
    },
    contact: {
      kicker: '02 · contacto',
      title: '¿Tienes un proyecto en mente?',
      desc: 'Cuéntame sobre tu idea, estoy abierto a colaborar en proyectos interesantes. Respondo normalmente en menos de 24 horas.',
      name: 'Nombre',
      email: 'Tu email',
      message: 'Mensaje',
      messagePlaceholder: 'Hola, me interesa trabajar contigo en...',
      send: 'Enviar mensaje',
      mailNote: 'Se abrirá tu cliente de correo con el mensaje listo para enviar.',
      visitor: 'un visitante',
      mailSubject: (name, sender) => `Hola ${name}, soy ${sender} — mensaje desde tu portafolio`,
    },
    footer: {
      madeWith: 'Hecho con',
      backToTop: 'Volver arriba',
    },
    a11y: {
      toggleTheme: 'Cambiar tema',
      changeLang: 'Change language',
    },
  },
  en: {
    nav: {
      menu: 'Menu',
      close: 'Close',
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
      letsTalk: "Let's talk",
    },
    hero: {
      hello: "Hi, I'm",
      viewProjects: 'View projects',
      contactMe: 'Contact me',
    },
    projects: {
      kicker: '01 · projects',
      title: "Things I've built",
      desc: 'A few personal and practice projects. The code for each one lives in its repository.',
      viewCode: 'View code of',
    },
    contact: {
      kicker: '02 · contact',
      title: 'Do you have a project in mind?',
      desc: "Tell me about your idea — I'm open to collaborating on interesting projects. I usually reply within 24 hours.",
      name: 'Name',
      email: 'Your email',
      message: 'Message',
      messagePlaceholder: "Hi, I'm interested in working with you on...",
      send: 'Send message',
      mailNote: 'Your email client will open with the message ready to send.',
      visitor: 'a visitor',
      mailSubject: (name, sender) => `Hi ${name}, I'm ${sender} — message from your portfolio`,
    },
    footer: {
      madeWith: 'Built with',
      backToTop: 'Back to top',
    },
    a11y: {
      toggleTheme: 'Toggle theme',
      changeLang: 'Cambiar idioma',
    },
  },
}
