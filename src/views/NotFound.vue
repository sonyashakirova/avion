<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <p>Sorry, this page doesn't exist (or is not ready yet)</p>
    <CustomButton text="Go to home page" kind="secondary" @click="$router.push({ name: 'home' })" />
  </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/atoms/CustomButton.vue'
</script>

<style scoped lang="scss">
.not-found {
  height: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
  padding: 40px 0 60px;

  h1 {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-07);
    margin-bottom: 10px;
  }

  button {
    margin-top: 60px;
  }
}

@media (max-width: 600px) {
  .not-found {
    justify-items: start;

    button {
      width: 100%;
    }
  }
}
</style>
