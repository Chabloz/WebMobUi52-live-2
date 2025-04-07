<script setup>
  import { onMounted, onUnmounted, watch } from 'vue';
  import { curAnchor, routes, defaultAnchor } from '@/stores/routes.js';

  function getHashState() {
    let hash = window.location.hash.substring(1);
    if (!hash || !routes.some(route => route.anchor === hash)) {
      hash = defaultAnchor;
      window.history.pushState(null, null, '#' + hash);
    }
    curAnchor.value = hash;
  }

  onMounted(() => {
    window.addEventListener('popstate', getHashState);
    getHashState();
  });

  onUnmounted(() => {
    window.removeEventListener('popstate', getHashState);
  });
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="route in routes" :key="route.anchor"
        :class="{ active: curAnchor === route.anchor }"
      >
        <a :href="'#' + route.anchor">{{ route.label }}</a>
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