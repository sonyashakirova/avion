<template>
  <TitleHeader title="All products" />
  <div class="wrapper">
    <FiltersForm />
    <div v-if="catalog.isLoading">Loading...</div>
    <div v-else-if="catalog.filteredProducts.length">
      <ul class="products">
        <li v-for="item in catalog.filteredProducts" :key="item.id">
          <ProductCard v-bind="item" />
        </li>
      </ul>
      <CustomButton text="Load more" kind="secondary" />
    </div>
    <div v-else>Not found</div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/atoms/CustomButton.vue'
import ProductCard from '@/components/cards/ProductCard.vue'
import FiltersForm from '@/components/frames/FiltersForm.vue'
import TitleHeader from '@/components/frames/TitleHeader.vue'
import { useCatalogStore } from '@/stores/catalog'
import { onBeforeMount } from 'vue'

const catalog = useCatalogStore()

onBeforeMount(() => {
  catalog.getProductList()
})
</script>

<style scoped lang="scss">
.wrapper {
  margin: 36px 0 72px;
  grid-template-columns: 1fr 3fr;
  display: grid;
  gap: 40px;

  @media (max-width: 600px) {
    display: block;
    margin: 20px 0 36px;
  }
}

.products {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 36px;

  + .button {
    margin: 40px auto 0;
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 20px;
  }

  @media (max-width: 600px) {
    padding-top: 28px;

    + .button {
      width: 100%;
    }
  }
}
</style>
