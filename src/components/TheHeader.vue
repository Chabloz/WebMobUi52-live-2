
<template>
  <header>
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<style scoped>
  header {
    background-color: var(--bg-color-reversed);
    padding: 0.5rem;
  }
  h1 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    color: var(--accent-color);
  }
</style>
