<script setup>
  import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
  import { page , defaultPage } from '@/stores/app.js';

  function getHashState() {
    let hash = window.location.hash.substring(1);
    if (hash === '') hash = defaultPage;
    page.value = hash;
  }

  onMounted(() => {
    window.addEventListener('popstate', getHashState);
    getHashState();
  });

  onUnmounted(() => {
    window.removeEventListener('popstate', getHashState);
  });

  watchEffect(() => {
    console.log('page:', page.value);
  });

</script>

<template>
  <nav>
    <ul>
      <li :class="{ active: page === 'temp' }">
        <a href="#temp">Temperature</a>
      </li>
      <li :class="{ active: page === 'weight' }">
        <a href="#weight">Weight</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    background-color: var(--bg-color-secondary);
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
    font-size: 1rem;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  li {
    display: inline-block;
  }
  li.active a {
    color: var(--accent-color);
  }
  a {
    color: var(--main-color);
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    text-decoration: none;
    color: var(--accent-color);
  }
</style>