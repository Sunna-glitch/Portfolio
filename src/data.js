// ─────────────────────────────────────────────────────────────
//  Personaliza aquí tu información: nombre, bio, enlaces y
//  proyectos. Todo el sitio se alimenta de este archivo.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Adrian',
  role: 'Desarrollador Front-End',
  bio: 'Construyo interfaces modernas, rápidas y accesibles con React y Tailwind CSS. Me encanta convertir ideas en productos que la gente disfruta usar.',
  email: 'adriandev@gmail.com',
  location: 'Santo Domingo, República Dominicana',
  availability: 'Disponible',
  skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'Git & GitHub', 'Vite'],
  socials: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/tuusuario' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/tuusuario' },
    { label: 'X (Twitter)', icon: 'x', href: 'https://x.com/tuusuario' },
  ],
}

export const projects = [
  {
    title: 'Tienda Online',
    description: 'E-commerce con carrito de compras, filtros por categoría y pasarela de pago simulada.',
    tech: ['React', 'Tailwind CSS', 'Context API'],
    demo: '#',
    code: '#',
  },
  {
    title: 'App del Clima',
    description: 'Aplicación del clima con búsqueda por ciudad y pronóstico de 5 días en tiempo real.',
    tech: ['React', 'Vite', 'API REST'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Recordatorio de Tareas',
    description: 'Recordatorio de tareas con prioridades, alertas de cuando vence,etiquetas y persistencia en localStorage.',
    tech: ['React', 'localStorage', 'CSS'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Asistente IA',
    description: 'Una aplicación web que utiliza la API de OpenAI para responder preguntas y generar contenido.',
    tech: ['React', 'OpenAI API', 'Node.js', 'Tailwind CSS', 'NVIDIA NIM API'],
    demo: '#',
    code: '#',
  },
]
