<template>
  <QuoteFrame
    text="A brand built on the love of craftmanship, quality and outstanding customer service"
  />
  <AboutFrame
    img="about-1.jpg"
    title="From a studio in London to a global brand with over 400 outlets"
    :text="[
      'When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.',
      'Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.'
    ]"
  />
  <AboutFrame
    position="left"
    img="about-2.jpg"
    title="Our service isn’t just personal, it’s actually hyper personally exquisite"
    :text="[
      'When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.',
      'Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.'
    ]"
  />
  <FeaturesFrame />
  <SubscriptionForm withBackground />
</template>

<script setup lang="ts">
import AboutFrame from '@/components/frames/AboutFrame.vue'
import FeaturesFrame from '@/components/frames/FeaturesFrame.vue'
import QuoteFrame from '@/components/frames/QuoteFrame.vue'
import SubscriptionForm from '@/components/frames/SubscriptionForm.vue'
</script>
