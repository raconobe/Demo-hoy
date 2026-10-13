import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WEB Develoment",
  description: "Roadmap",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Backend', link: '/backend/' },
      { text: 'SO', link: '/so/' },  // <-- ¡Aquí faltaba la coma!
      { text: 'Tools', link: '/markdown-examples' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }, // <-- Separado con llave y coma independiente
      {
        text: 'Frontend',
        items: [
          { text: 'HTML5', link: '/markdown-examples' },
          { text: 'CSS3', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
