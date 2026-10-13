Para instalar Vue como una dependencia explícita en tu proyecto de VitePress, simplemente abre la terminal dentro de la carpeta de tu proyecto (donde está el archivo package.json) y ejecuta el siguiente comando:
Bash

npm install vue



---


¡Excelente decisión! Empezar por Git es el paso natural para tener todo respaldado y listo para desplegar.

Aquí tienes ideas de nombres en inglés para tu repositorio que son claros, profesionales y fáciles de recordar:

* **`web-dev-docs`** (Directo y al grano: documentación de desarrollo web).
* **`tech-knowledge-hub`** (Un centro de conocimiento técnico).
* **`dev-vault-docs`** (Haciendo referencia a tu bóveda de notas de desarrollo).

---

### ¿Cómo marcar el repositorio para recordar que usa VitePress?

La mejor manera de etiquetar un repositorio en GitHub para no olvidarlo es usar una combinación de tres cosas:

1. **El nombre del repositorio** (puedes añadirle el sufijo `-vitepress`, por ejemplo: **`web-dev-docs-vitepress`**).
2. **Los *Topics* (Temas) de GitHub:** En la página principal de tu repositorio en GitHub, al lado de la descripción, hay una sección de etiquetas. Puedes añadir `vitepress`, `markdown`, `documentation` y `obsidian`. Esto le da una identidad visual y técnica inmediata.
3. **El archivo `README.md`:** Puedes ponerle una pequeña insignia (*badge*) o un encabezado en la descripción principal que indique con qué tecnología está construido.

Por ejemplo, puedes colocar esto al inicio de tu archivo `README.md` principal:

```markdown
# Web Dev Documentation

> 🚀 Documentación técnica personal construida con **VitePress** sincronizada desde una bóveda de Obsidian.

```

¿Te gusta el nombre **`web-dev-docs-vitepress`** para crearlo? Dime y te paso los comandos rápidos de Git para inicializarlo y subirlo a tu cuenta.





git remote set-url origin git@github.com:raconobe/web-dev-docs-vitepress.git


id_ed25519_raco
git config core.sshCommand "ssh -i ~/.ssh/id_ed25519_raco -o IdentitiesOnly=yes"


---

¡Es un detalle muy común cuando manejas varias cuentas o llaves SSH en el mismo equipo!

Para decirle a Git de forma explícita qué llave privada usar al conectarse a GitHub (sin modificar la configuración global de tu sistema), puedes configurar el comando `git` para que use una llave específica solo para este repositorio usando una variable de entorno en el comando `ssh`.

### Paso 1: Localiza el nombre de tus llaves

Normalmente se encuentran en la carpeta `~/.ssh/`. Puedes listarlas con este comando en la terminal:

```bash
ls -la ~/.ssh/

```

*(Verás archivos como `id_rsa`, `id_ed25519`, o nombres personalizados que hayas creado para tus cuentas, por ejemplo `id_github` o `id_rsa_personal`).*

---

### Paso 2: Configurar la llave SSH localmente para este repositorio

Una vez que identifiques el nombre exacto del archivo de tu llave (por ejemplo, si se llama `id_ed25519` o `id_rsa`), dile a Git que utilice esa llave específica para este proyecto ejecutando este comando en la raíz de tu repositorio:

```bash
git config core.sshCommand "ssh -i ~/.ssh/NOMBRE_DE_TU_LLAVE -o IdentitiesOnly=yes"

```

*(Reemplaza `NOMBRE_DE_TU_LLAVE` por el nombre real del archivo de tu llave privada).*

---

### Paso 3: Probar el envío a GitHub

Una vez configurado, vuelve a intentar subir tus cambios:

```bash
git push -u origin main

```

De esta manera, Git usará exactamente la llave correcta para autenticarse con tu cuenta de GitHub (`raconobe`) y el repositorio subirá de inmediato. ¡Pruébalo y me cuentas qué tal va!



---

¡La autenticación SSH ya funcionó perfectamente! La llave `id_ed25519_raco` se conectó a GitHub sin problemas.

El aviso `! [rejected] main -> main (fetch first)` ocurre porque al crear el repositorio en la web de GitHub se generó automáticamente algún archivo inicial (como un `README.md` o `.gitignore` por defecto) y tu repositorio local no lo tiene.

Para sincronizarlos y subir tu código final, ejecuta estos tres pasos en tu terminal:

---

### Paso 1: Hacer un `pull` con rebase para integrar los cambios remotos

Ejecuta este comando para traer lo que haya en GitHub e integrar tus commits locales justo encima:

```bash
git pull origin main --rebase

```

---

### Paso 2: Subir tu código local a GitHub

Una vez sincronizado, haz el push de nuevo:

```bash
git push -u origin main

```

*(Si por alguna razón al crear el repositorio en la web de GitHub marcaste casillas por defecto y no te importa sobrescribir el repositorio vacío de la web con todo tu proyecto local limpio, también puedes forzar la subida directa con `git push -u origin main --force`).*

---

### ¡Listo! Siguiente paso: Desplegar en la Nube

Una vez hecho el push, todo tu proyecto y tus notas estarán respaldadas en tu cuenta de GitHub. A partir de aquí, publicar la web para tenerla accesible con una URL amigable desde tu tablet es comodísimo.

Confírmame en cuanto el `git push` se complete para ver cuál de las plataformas prefieres para publicar tu sitio web.



---

No te preocupes, ¡esto es extremadamente común al iniciar un proyecto! No hay ningún desastre, solo hay archivos modificados/sin guardar localmente que impiden hacer el `pull`.

Como tu proyecto local es la versión "buena" y oficial que quieres subir a GitHub, podemos solucionarlo limpiamente en dos simples comandos:

---

### Opción 1: Sobrescribir el repositorio en GitHub (Recomendado)

Si acabas de crear el repositorio en la web de GitHub y solo contiene el `README` o `.gitignore` vacío por defecto que te crea GitHub, lo más rápido para dejar todo limpio es **forzar el envío de tu código local**:

```bash
git push -u origin main --force

```

> **¿Qué hace esto?** Le dice a GitHub: *"Reemplaza lo que haya en la nube con exactamente lo que tengo en mi equipo local"*.

---

### Opción 2: Guardar cambios y fusionar (Si prefieres no forzar)

Si quieres conservar cualquier archivo inicial que haya creado GitHub, primero debemos guardar (*commit*) o apartar (*stash*) tus cambios locales:

```bash
# 1. Guardar tus cambios pendientes
git add .
git commit -m "docs: guardar cambios pendientes antes del rebase"

# 2. Traer y sincronizar lo de GitHub
git pull origin main --rebase

# 3. Subir el código final
git push -u origin main

```

---

Prueba con la **Opción 1** (el `push --force`), que dejará tu repositorio en GitHub sincronizado al 100% con tu proyecto local sin complicaciones. ¡Dime si se envía correctamente!



---
Configurar el despliegue automático en **GitHub Pages** mediante **GitHub Actions** es un proceso sencillo. Con esta configuración, cada vez que hagas un `git push` desde tu terminal, GitHub compilará automáticamente VitePress y actualizará la web en vivo.

1. **Ajustar la propiedad base en VitePress:** Paso obligatorio para evitar enlaces o archivos CSS rotos.
Como el sitio se alojará en un subdominio de GitHub Pages (`raconobe.github.io/web-dev-docs-vitepress/`), abre el archivo `docs/.vitepress/config.mts` y añade la propiedad `base`:

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Web Dev Docs",
  description: "Documentación de desarrollo web",
  base: '/web-dev-docs-vitepress/', // <--- Añade el nombre exacto de tu repositorio con barras
  themeConfig: {
    // ... tu configuración actual
  }
})

```


2. **Crear el archivo de flujo de trabajo (Workflow):**
En la raíz de tu proyecto local, crea la carpeta `.github/workflows/` y dentro de ella un archivo llamado `deploy.yml`:

```bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml

```

Pega el siguiente contenido estandarizado para VitePress dentro de `.github/workflows/deploy.yml`:

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Sync Obsidian files
        run: cp -r /home/rco/Desktop/MD-Boveda-Obsidian/tecnologies ./docs/ || true

      - name: Install dependencies
        run: npm ci || npm install

      - name: Build VitePress
        run: npm run docs:build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```


3. **Habilitar GitHub Pages en el panel de tu repositorio:**
1. Entra a tu repositorio en GitHub: `[https://github.com/raconobe/web-dev-docs-vitepress](https://github.com/raconobe/web-dev-docs-vitepress)`.
2. Ve a la pestaña **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
3. En la sección **Build and deployment** -> **Source**, cambia la opción de *Deploy from a branch* a **GitHub Actions**.


4. **Subir los cambios para activar el primer despliegue:**
Ejecuta en tu terminal local:

```bash
git add .
git commit -m "ci: añadir flujo de trabajo para GitHub Pages"
git push origin main

```


---

---

Una vez que subas los cambios, puedes ir a la pestaña **Actions** en la parte superior de tu repositorio para ver cómo se ejecuta el despliegue en tiempo real. En un par de minutos tendrás tu web publicada en:

`[https://raconobe.github.io/web-dev-docs-vitepress/](https://raconobe.github.io/web-dev-docs-vitepress/)`