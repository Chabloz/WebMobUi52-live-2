<script setup>
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';

  import { currentPage } from '@/stores/routes.js';
</script>

<template>
  <TheHeader>Converter app</TheHeader>
  <TheNav />
  <main>
    <component :is="currentPage" />
  </main>
</template>

<style scoped>
  main {
    padding: 2rem 1rem 1rem 1rem;
    max-width: 90vw;
    margin: auto;
  }
</style>

<style>
  :root {
    --main-color: #333;
    --bg-color: #f8f8f8;
    --bg-color-secondary: #f0f0f0;
    --bg-color-reversed: #333;
    --bg-color-secondary-reversed: #444;
    --accent-color: tomato;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
    color: var(--main-color);
    background-color: var(--bg-color);
  }
</style>
