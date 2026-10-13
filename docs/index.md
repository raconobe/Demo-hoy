---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "WEB Develoment"
  text: "Roadmap"
  tagline: Resoulses form leaning 

  # 👇 Aquí añades la imagen grande a la derecha (como la página oficial de VitePress)

  image:
    #src: https://png.pngtree.com/png-vector/20250401/ourlargepngtree-d-isolated-render-of-a-programming-icon-featuring-modern-digital-code-png-image_15917455.png
    #alt: Web Development Logo
    src: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg
    alt: Web Development Logo
  #image:
  #  src: /web-logo.svg
  #  alt: Web Development Logo

  actions:
    - theme: brand
      text: Frontend
      link: /frontend-index
      #link: /markdown-examples
    - theme: alt
      text: Backend
      link: /api-examples
    - theme: alt
      text: SO
      link: /api-examples


features:
  - icon:
      src: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg
    title: HTML & CSS
    details: Estructura web moderna, selectores, Flexbox, Grid y diseño responsivo.
    link: /frontend/html   # <--- ¡Aquí añades la ruta de destino!

  - icon:
      src: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg
    title: JavaScript
    details: Programación asíncrona, DOM, ES6+ y lógica orientada a cliente.
    link: /frontend/js     # <--- Ruta de JavaScript

  - icon:
      src: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg
    title: Java
    details: Programación orientada a objetos, estructuras de datos y backend.
    link: /backend/java    # <--- Ruta de Java

  - icon:
      src: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg
    title: "Frontend Stack"
    details: "Estructura y diseño web.<br><br>
      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' width='20' style='display:inline; vertical-align:middle; margin-right:6px;' alt='HTML5'> 
      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' width='20' style='display:inline; vertical-align:middle; margin-right:6px;' alt='CSS3'> 
      <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' width='20' style='display:inline; vertical-align:middle;' alt='JS'>"
    link: /frontend/

---
<!-- Aquí llamas al componente de forma limpia -->
<HomeTechTabs />