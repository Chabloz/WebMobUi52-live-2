<script setup>
  const model = defineModel();
  const props = defineProps({
    symbol: {
      type: String,
      default: null,
    },
  });
</script>

<template>
  <div>
    <input
      v-bind="$attrs"
      type="number"
      v-model="model"
    />
    <symbol v-if="symbol != null">{{ symbol }}</symbol>
  </div>
</template>

<style scoped>
  input[type="number"] {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
  }
</style>