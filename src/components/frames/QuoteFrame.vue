<template>
  <div class="full-width">
    <p class="text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<style scoped lang="scss">
.text {
  font-size: var(--font-size-07);
  font-family: var(--font-family-heading);
  padding: 72px var(--page-padding-lg);
  text-align: center;
  text-wrap: balance;

  @media (max-width: 1000px) {
    padding: 52px var(--page-padding-md);
  }

  @media (max-width: 600px) {
    padding: 32px var(--page-padding-sm);
    text-align: start;
  }
}
</style>
