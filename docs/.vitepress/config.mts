import { defineConfig } from 'vitepress'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  title: "WEB Development",
  description: "Roadmap de Desarrollo Web y Tecnologías",
  base: '/web-dev-docs-vitepress/',

  head: [
    ['link', { rel: 'icon', href: '/web-dev-docs-vitepress/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'apple-touch-icon', href: '/web-dev-docs-vitepress/apple-touch-icon.png' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Backend', link: '/backend/' },
      { text: 'SO', link: '/so/' }
    ],

    sidebar: {
      '/frontend/': [
        {
          text: 'Módulo Frontend',
          items: [
            { text: 'Página Principal', link: '/frontend/' }
          ]
        }
      ],

      '/tecnologies/frontend/': [
        {
          text: 'Módulo HTML',
          items: [
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
  },

  // Configuración de la PWA integrada directamente en Vite
  vite: {
    plugins: [
      VitePWA({
        outDir: '.vitepress/dist',
        registerType: 'autoUpdate',
        manifest: {
          name: 'Web Dev Docs',
          short_name: 'DevDocs',
          description: 'Documentación técnica y desarrollo web',
          theme_color: '#3eaf7c',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: '/web-dev-docs-vitepress/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/web-dev-docs-vitepress/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ]
  }
})