{
  "scripts": {
    "_comment": "--- Scripts principales de desarrollo y compilación ---",
    "dev": "vitepress dev docs",
    
    "_comment_docs": "Copia los manuales originales de la Bóveda de Obsidian antes de arrancar",
    "docs:dev":   "cp -r /home/rco/Desktop/MD-Vault-Obsidian/tecnologies /home/rco/Desktop/projects-vault-raco/web-dev-docs-vitepress/docs/   && vitepress dev docs",
    "docs:build": "cp -r /home/rco/Desktop/MD-Vault-Obsidian/tecnologies /home/rco/Desktop/projects-vault-raco/web-dev-docs-vitepress/docs/   && vitepress build docs",
    "docs:preview": "vitepress preview docs",
    "docs:build:ci": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "dependencies": {
    "vue": "^3.5.44"
  },
  "devDependencies": {
    "vitepress": "^1.0.0"
  }
}


{
  "scripts": {
    "_comment": "--- Scripts principales de desarrollo y compilación ---",
    "dev": "vitepress dev docs",
    "_comment_docs": "Copia los manuales originales de la Bóveda de Obsidian antes de arrancar",
    "docs:dev": "cp -r /home/rco/Desktop/MD-Vault-Obsidian/tecnologies/* /home/rco/Desktop/projects-vault-raco/web-dev-docs-vitepress/docs/ && vitepress dev docs",
    "docs:build": "cp -r /home/rco/Desktop/MD-Vault-Obsidian/tecnologies/* /home/rco/Desktop/projects-vault-raco/web-dev-docs-vitepress/docs/ && vitepress build docs",
    "docs:preview": "vitepress preview docs",
    "docs:build:ci": "vitepress build docs"
  },
  "dependencies": {
    "vue": "^3.5.44"
  },
  "devDependencies": {
    "vitepress": "^1.0.0"
  }
}