<script setup>
  import { computed, ref, watch, watchEffect } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';
  import BaseInputNumber from './components/bases/BaseInputNumber.vue';
  import BaseForm from './components/bases/BaseForm.vue';
  import { roundToTwoDecimals } from './utils/math.js';

  const tempSi = ref(0); // Kelvin is the SI unit for temperature

  const tempKelvin = computed({
    get: () => roundToTwoDecimals(tempSi.value),
    set: (value) => tempSi.value = value,
  });

  const tempFahrenheit = computed({
    get: () => roundToTwoDecimals((tempSi.value - 273.15) * 9/5 + 32),
    set: (value) => tempSi.value = (value - 32) * 5/9 + 273.15,
  })

  const tempCelsius = computed({
    get: () => roundToTwoDecimals(tempSi.value - 273.15),
    set: (value) => tempSi.value = value + 273.15,
  });

</script>

<template>
  <TheHeader>Converter app</TheHeader>
  <TheNav />
  <BaseForm>
    <BaseInputNumber
      placeholder="Kelvin"
      name="tempKelvin"
      symbol="K"
      v-model="tempKelvin"
    />
    <BaseInputNumber
      placeholder="Celsius"
      name="tempCelsius"
      symbol="°C"
      v-model="tempCelsius"
    />
    <BaseInputNumber
      placeholder="Fahrenheit"
      name="tempFahrenheit"
      symbol="°F"
      v-model="tempFahrenheit"
    />
  </BaseForm>

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
