<template>
  <img :src alt="Feature icon" />
  <h3>{{ name }}</h3>
  <p>{{ description }}</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { FeatureType } from '@/data/types'

const props = defineProps<FeatureType>()
const src = computed(() => {
  return new URL(`../../assets/icons/features/${props.icon}`, import.meta.url).href
})
</script>

<style scoped lang="scss">
img {
  margin-bottom: 16px;
  height: 24px;
  width: 24px;
}
h3 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-04);
  margin-bottom: 8px;
}
p {
  text-wrap: pretty;
}

@media (max-width: 600px) {
  h3 {
    font-size: var(--font-size-02);
  }
}
</style>
