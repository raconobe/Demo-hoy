import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "WEB Development",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Backend', link: '/backend/' },
      { text: 'SO', link: '/so/' }
    ],

    sidebar: {
      // Portada principal de frontend
      '/frontend/': [
        {
          text: 'Módulo Frontend',
          items: [
            { text: 'Página Principal', link: '/frontend/' }
          ]
        }
      ],

      // Menú lateral que se activa automáticamente al entrar a cualquier página de tecnologías/frontend/
      '/tecnologies/frontend/': [
        {
          text: 'Módulo HTML',
          items: [
            // Deja las rutas terminadas en / para las carpetas con index.md
            { text: 'Capítulo 1: Estructura', link: '/tecnologies/frontend/html/HTML-Chapter-01' },
            { text: 'Capítulo 2: Etiquetas', link: '/tecnologies/frontend/html/HTML-Chapter-02' },
            { text: 'Capítulo 3: Formularios', link: '/tecnologies/frontend/html/HTML-Chapter-03' }
          ]
        },
        {
          text: 'Módulo CSS',
          items: [
            { text: 'Introducción CSS', link: '/tecnologies/frontend/css/' },
            { text: 'Capítulo 1: Selectores', link: '/tecnologies/frontend/css/cap1' },
            { text: 'Capítulo 2: Flexbox', link: '/tecnologies/frontend/css/cap2' }
          ]
        }
      ]
    }
  }
})