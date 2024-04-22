<template>
  <div class="header full-width">
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped lang="scss">
.header {
  background-image: url('@/assets/images/header-image.jpg');
  background-color: var(--color-background-contrast);
  color: var(--color-text-contrast);
  background-position: center;
  background-size: cover;
  align-items: end;
  height: 200px;
  display: flex;

  @media (max-width: 1000px) {
    height: 180px;
  }

  @media (max-width: 600px) {
    height: 160px;
  }
}

.title {
  font-family: var(--font-family-heading);
  padding: 36px var(--page-padding-lg);
  max-width: var(--max-width-content);
  font-size: var(--font-size-07);
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 36px var(--page-padding-md);
  }

  @media (max-width: 600px) {
    padding: 36px var(--page-padding-sm);
    text-align: center;
  }
}
</style>
