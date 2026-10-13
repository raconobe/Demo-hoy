<script setup>
import { ref } from 'vue'

const activeTab = ref('frontend')

const categories = {
  frontend: [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      title: 'HTML & CSS',
      details: 'Estructura web moderna, selectores, Flexbox, Grid y diseño responsivo.',
      link: '/frontend/html'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      title: 'JavaScript',
      details: 'Programación asíncrona, DOM, ES6+ y lógica orientada a cliente.',
      link: '/frontend/js'
    }
  ],
  backend: [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      title: 'Java',
      details: 'Programación orientada a objetos, estructuras de datos y backend.',
      link: '/backend/java'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      title: 'Python',
      details: 'Desarrollo backend, APIs y automatización de procesos.',
      link: '/backend/python'
    }
  ],
  so: [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      title: 'Linux',
      details: 'Comandos de terminal, gestión de procesos, bash y administración de sistemas.',
      link: '/so/linux'
    }
  ]
}
</script>

<template>
  <div class="tabs-container">
    <button 
      :class="['tab-button', { active: activeTab === 'frontend' }]" 
      @click="activeTab = 'frontend'"
    >
      Frontend
    </button>
    <button 
      :class="['tab-button', { active: activeTab === 'backend' }]" 
      @click="activeTab = 'backend'"
    >
      Backend
    </button>
    <button 
      :class="['tab-button', { active: activeTab === 'so' }]" 
      @click="activeTab = 'so'"
    >
      SO
    </button>
  </div>

  <div class="features-grid">
    <a 
      v-for="card in categories[activeTab]" 
      :key="card.title" 
      :href="card.link" 
      class="custom-card"
    >
      <img :src="card.icon" :alt="card.title" class="card-icon" />
      <h3 class="card-title">{{ card.title }}</h3>
      <p class="card-details">{{ card.details }}</p>
    </a>
  </div>
</template>

<style scoped>
.tabs-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 24px 0 32px;
}

.tab-button {
  padding: 8px 18px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid transparent;
  transition: all 0.25s ease;
}

.tab-button:hover {
  border-color: var(--vp-c-brand-1);
}

.tab-button.active {
  background-color: var(--vp-c-brand-1);
  color: #ffffff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.custom-card {
  display: block;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  text-decoration: none !important;
  transition: border-color 0.25s, transform 0.25s;
}

.custom-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 8px 0;
}

.card-details {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
}
</style>