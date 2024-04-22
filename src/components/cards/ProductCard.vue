<template>
  <div class="container">
    <div class="card" @click="handleClick">
      <img :src :alt="name" />
      <h3 class="name">{{ name }}</h3>
      <span class="price">£{{ price }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { ProductType } from '@/data/types'

const { push } = useRouter()
const props = defineProps<ProductType>()
const src = computed(() => {
  return new URL(`../../assets/images/products/${props.image}`, import.meta.url).href
})

function handleClick() {
  push({ name: 'product', params: { id: props.id } })
}
</script>

<style scoped lang="scss">
.container {
  perspective: 300px;
}

.card {
  transition: transform 0.3s ease-out;
  max-width: 300px;
  min-width: 150px;
  cursor: pointer;
  display: grid;
  width: 100%;

  &:hover {
    transform: translateZ(10px);
  }

  img {
    background-color: var(--color-background-image);
    object-fit: cover;
    width: 100%;
  }

  .name {
    font-family: var(--font-family-heading);
    font-size: var(-font-size-04);
    margin-top: 24px;
  }

  .price {
    font-size: var(--font-size-03);
    display: block;
  }
}
</style>
