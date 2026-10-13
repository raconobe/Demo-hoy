#!/bin/bash

# Define la ruta base donde tienes tu bóveda de Obsidian
# (Cambia esta ruta si estás ejecutando el script desde fuera de la bóveda)
VAULT_DIR="."

echo "🚀 Creando estructura de carpetas y archivos en: $VAULT_DIR"

# 1. Crear directorios
mkdir -p "$VAULT_DIR/Frontend/html"
mkdir -p "$VAULT_DIR/Frontend/css"
mkdir -p "$VAULT_DIR/Backend/java"

# 2. Función para generar los archivos Markdown placeholder
crear_md() {
  local ruta=$1
  local titulo=$2

  cat <<EOF > "$ruta"
---
title: "$titulo"
---

# $titulo

Este es un archivo de prueba (*placeholder*) creado para VitePress y Obsidian.

- [x] Sincronizado correctamente
- [ ] Agregar contenido detallado
EOF

  echo "  [+] Creado: $ruta"
}

# --- GENERAR ARCHIVOS FRONTEND ---
echo "📁 Generando Frontend/html..."
crear_md "$VAULT_DIR/Frontend/html/overview.md" "HTML & CSS Overview"
crear_md "$VAULT_DIR/Frontend/html/cap1.md" "Capítulo 1: Introducción a HTML5"
crear_md "$VAULT_DIR/Frontend/html/cap2.md" "Capítulo 2: Etiquetas Semánticas y Estructura"
crear_md "$VAULT_DIR/Frontend/html/cap3.md" "Capítulo 3: Formularios y Validaciones"

echo "📁 Generando Frontend/css..."
crear_md "$VAULT_DIR/Frontend/css/overview.md" "CSS Overview"
crear_md "$VAULT_DIR/Frontend/css/cap1.md" "Capítulo 1: Selectores y Especificidad"
crear_md "$VAULT_DIR/Frontend/css/cap2.md" "Capítulo 2: Flexbox y Grid Layout"
crear_md "$VAULT_DIR/Frontend/css/cap3.md" "Capítulo 3: Variables y Media Queries"

# --- GENERAR ARCHIVOS BACKEND ---
echo "📁 Generando Backend/java..."
crear_md "$VAULT_DIR/Backend/java/overview.md" "Java Overview"
crear_md "$VAULT_DIR/Backend/java/cap1.md" "Capítulo 1: Sintaxis Básica y Variables"
crear_md "$VAULT_DIR/Backend/java/cap2.md" "Capítulo 2: Programación Orientada a Objetos"
crear_md "$VAULT_DIR/Backend/java/cap3.md" "Capítulo 3: Manejo de Excepciones y Colecciones"

echo "✅ ¡Estructura creada con éxito!"
