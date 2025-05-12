### VUE JS

### What is Vue JS ?

- Progressive JS framework for buiding user interfaces & SPAs
- Designed to be simple , flexible and incrementally adoptable
- Used for projects of all sizes
- Reactive data-binding & component-based architecture

### Prerequisites

- JavaScript Fundamentals (Loops , Functions , Object , etc )
- Events & DOM Manipulation
- Fatch API & Basic HTTP
- Arrow Function , High-Order Array Methods , Destructuring , etc
- NPM (Node Package Manager)

### The Role of Frontend Frameworks

- Enhanced UI/UX : Make it easy to create UIs that are dynamic and interactive
- Organization : UI is broken into components with their own state and properites
- Performance : Optimized for performance with features such as the virtual DOM
- Modularity : Allow developers to break down their applications into smaller, reusable components.

### Why Vue ?

- Simplicity & Approachability
- Flexibility
- Performance & Size
- Component-Based-Architecture
- Active Community & Rich Ecosystem

### Vue Components

- Reusable, self-contained pieces of code
- Include the logic/JS , dynamic HTML output & scoped styling
- Options API vs Composition API

```bash
<script>
  // Javascript / Logic
</script>

<template>
  // Output Render
  <section>
    <h2> Hello from Vue.js </h2>
    <p>This is a simple Vue Component .</p>
  </section>
</template>

<style scoped>
  // CSS Style
</style>

```

### Getting Setup

- CDN - Include the script tag with the CDN URL
- Vue CLI - Command line interface for setting up Vue project. This is no longer recommennded
- Create Vue - Uses vite , which include features like hot-reloading , out of the box Typescript and an ecosystem of plugins
- Nuxt.Js & Gridsome - SSR @ SSG frameworks that use Vue

### Resource Documentation

- Vue JS : https://vuejs.org/guide/introduction.html

### How to setup project Vue.JS

- Using CDN

```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <title>Vue Test</title>
  </head>
  <body>
    <main id="app">
      <h2>{{message}}</h2>
      <p>{{message.length}}</p>
      <button @click="clickMe">Click Me</button>
    </main>

    <script>
      const app = Vue.createApp({
        data() {
          return {
            message: "Hello VueJS",
          };
        },
        methods: {
          clickMe() {
            this.message = "I LOVE VUEJS";
          },
          // count the number of characters in the message
          countText() {
            return this.message.length;
          },
        },
      });
      // Mount the app to the DOM
      app.mount("#app");
    </script>
  </body>
</html>
```

- Using CLI

- using with npm

```bash
  npm create vue@latest
```

- using with pnpm

```bash
  pnpm create vue@latest
```

- using with yarn

```bash
  # For yarn (V1+)
  yarn create vue

  #For yarn (V2+)
  yarn create vue@latest

  #For yarn (^V4.11)
  yarn dlx create-vue@latest
```

This command will install and execute create-vue, the official Vue project scaffolding tool.

```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done .

```

### Open the terminal

```bash
  cd project-name
  npm install # install dependecice
  npm run dev # command using run project
```

### Recommentation Extension for VueJS

- Vue - Official
- Vue 3 Snippets

### Change Port VueJS

```bash
  # vite.config.js
    server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }

```

### Lifecycle Methods

- <code>onBeforeMount</code> : called before mounting begins
- <code>onMounted</code> : called when component is mounted
- <code>onBeforeUpdate</code> : called when reactive data changes and before re-render
- <code>onUpdated</code> : called after re-render
- <code>onBeforeUnmount</code> : called before the Vue instance is destroyed
- <code>onUnmounted</code> : called after the instance is destroyed
- <code>onActivated</code> : called when a kept-alive component is activated
- <code>onDeactivated</code> : called when a kept-alive componenet is deactivated
- <code>onErrorCaptured</code> : called when an error is captured from a chaild component

### Install Tailwind CSS 4 with Vite

Next we’ll install TailwindCSS with it’s first party Vite plugin.

### Use npm to install:

```bash
npm install tailwindcss @tailwindcss/vite
```

### Then register the plugin with Vite.

```bash
// vite.config.ts|js

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

```

- Finally import tailwindcss into <code>src/assets/main.css</code>

```bash
/* /src/assets/main.css */
@import "tailwindcss";
```

### using define props in vue

```bash

import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Become a Vue Dev'
  }
})

<template>
  <h2>{{title}}</h2>
</template>
```

### Add Icon using <code> prireicons </code>

```bash
- resource : https://github.com/primefaces/primeicons
- how to installl
npm install primeicons or npm i primeicons
```

### How setup router in VueJS

```bash
npm install vue-router or npm i vue-router
```

### Set up active router

```bash

<script setup>
import { RouterLink, useRoute } from "vue-router";

const isActive = (routeRath) => {
  const route = useRoute();
  return route.path === routeRath;
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <section class="mx-auto px-4">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <!-- <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" /> -->
            <p class="text-white text-2xl font-bold">Jobs</p>
          </RouterLink>
        </div>
        <div class="md:ml-auto">
          <div class="flex gap-3">
            <RouterLink
              to="/"
              :class="[
                isActive('/')
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 bg-green-700',
                'hover:bg-gray-800',
                ' hover:text-white ',
                'px-3 ',
                'py-2 ',
                'rounded-md ',
                'text-sm ',
                'font-medium',
              ]"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/jobs"
              :class="[
                isActive('/jobs')
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 bg-green-700',
                'hover:bg-gray-800',
                ' hover:text-white ',
                'px-3 ',
                'py-2 ',
                'rounded-md ',
                'text-sm ',
                'font-medium',
              ]"
            >
              Jobs
            </RouterLink>
            <RouterLink
              to="/jobs/add"
              :class="[
                isActive('/jobs/add')
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 bg-green-700',
                'hover:bg-gray-800',
                ' hover:text-white ',
                'px-3 ',
                'py-2 ',
                'rounded-md ',
                'text-sm ',
                'font-medium',
              ]"
            >
              Add Job
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </nav>
</template>
```
### ref VS reactive
- reactive() only takes objects. it does not take primitives like strings,numbers and booleans. it uses `ref()` under the hood
- ref() can take object or primitives
- ref() has a `.value` property for reasingnig `reactive()` doesn't use `.value` and can't be reassined 


