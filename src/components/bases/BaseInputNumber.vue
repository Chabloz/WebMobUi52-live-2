<script setup>
  defineOptions({inheritAttrs: false});

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
    <abbr v-if="symbol != null">{{ symbol }}</abbr>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input[type="number"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
    flex: 1;
  }
  abbr {
    margin-left: 0.2rem;
    color: #333;
    padding: 0 0.5rem;
    min-width: 3rem;
  }
</style>