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
    <abbr v-if="symbol != null">{{ symbol }}</abbr>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    align-items: center;
  }
  input {
    flex: 1;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
}
  input[type="number"] {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
  }
  abbr {
    font-size: 1rem;
    margin-left: 0.5rem;
    color: #333;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
</style>