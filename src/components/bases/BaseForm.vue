<script setup>

</script>

<template>
  <form>
    <slot />
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    max-width: 80vw;
    margin: auto;
  }
</style>