<template>
  <ProductFrame />
  <ListingFrame title="You might also like" overflow="wrap" />
  <FeaturesFrame />
  <SubscriptionForm />
</template>

<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'
import { useRoute } from 'vue-router'
import FeaturesFrame from '@/components/frames/FeaturesFrame.vue'
import ListingFrame from '@/components/frames/ListingFrame.vue'
import ProductFrame from '@/components/frames/ProductFrame.vue'
import SubscriptionForm from '@/components/frames/SubscriptionForm.vue'
import { useCatalogStore } from '@/stores/catalog'

const route = useRoute()
const catalog = useCatalogStore()

onBeforeMount(async () => {
  await catalog.getProduct(route.params.id)
})

watch(route, async () => {
  await catalog.getProduct(route.params.id)
})
</script>
