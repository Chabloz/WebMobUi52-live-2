<script setup>
  import { computed, ref, watch, watchEffect } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';

  const n = ref(null);

  const isCold = computed(() => n.value < 10);

  watch([n], () => {
    console.log(n.value);
  });
</script>

<template>
  <TheHeader>Converter app</TheHeader>
  <TheNav />
  <form>
    <!-- <input type="number" :value="n" @input="setN"/> -->
    <input type="number" v-model="n"/>
  </form>
  <h1>TEST {{ n }} {{  isCold }}</h1>
</template>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
