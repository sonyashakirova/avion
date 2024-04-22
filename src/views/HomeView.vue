<template>
  <HeroFrame />
  <FeaturesFrame />
  <ListingFrame title="New ceramics" overflow="wrap" />
  <ListingFrame title="Our popular products" overflow="scroll" />
  <SubscriptionForm />
  <AboutFrame
    img="about-1.jpg"
    title="From a studio in London to a global brand with over 400 outlets"
    :text="[
      'When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.',
      'Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.'
    ]"
  />
</template>

<script setup lang="ts">
import AboutFrame from '@/components/frames/AboutFrame.vue'
import FeaturesFrame from '@/components/frames/FeaturesFrame.vue'
import HeroFrame from '@/components/frames/HeroFrame.vue'
import ListingFrame from '@/components/frames/ListingFrame.vue'
import SubscriptionForm from '@/components/frames/SubscriptionForm.vue'
</script>
