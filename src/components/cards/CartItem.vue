<template>
  <div class="card">
    <img :src :alt="name" @click="handleClick" />
    <div class="content">
      <h3 class="title">{{ name }}</h3>
      <p class="description">{{ short }}</p>
      <span class="price">£{{ price }}</span>
      <Counter v-if="withCounter" v-model="model" :onZero="() => cart.removeProduct(id)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { ProductType } from '@/data/types'
import Counter from '../atoms/Counter.vue'
import { useCartStore } from '@/stores/cart'

interface Props extends ProductType {
  withCounter?: boolean
}

const { push } = useRouter()
const cart = useCartStore()

const model = defineModel<number>()
const props = defineProps<Props>()
const src = computed(() => {
  return new URL(`../../assets/images/products/${props.image}`, import.meta.url).href
})

function handleClick() {
  push({ name: 'product', params: { id: props.id } })
}
</script>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 300px;
  gap: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    gap: 8px;
  }

  .title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-04);
  }

  .description {
    font-size: var(--font-size-01);
    text-wrap: pretty;
  }

  .counter {
    margin-top: auto;
  }
}

@media (max-width: 600px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 3fr;
    width: 100%;
    gap: 20px;

    .content {
      padding: 0;
    }

    .title,
    .price {
      font-size: var(--font-size-02);
    }
  }
}
</style>
