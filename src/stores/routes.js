import { computed, ref, shallowRef } from 'vue';
import PageTemperature from '@/components/pages/PageTemperature.vue';
import PageWeight from '@/components/pages/PageWeight.vue';

export const routes = [
  {
    anchor: 'temp',
    label: 'Temperature',
    page: PageTemperature,
  }, {
    anchor: 'weight',
    label: 'Weight',
    page: PageWeight,
  }, {
    anchor: 'test',
    label: 'Test',
    page: PageWeight,
  },
];

export const defaultAnchor = 'temp';
export const curAnchor = ref(defaultAnchor);
export const currentPage = computed(() => {
  return routes.find((route) => route.anchor === curAnchor.value)?.page || PageTemperature;
});