<template>
  <div class="layout">
    <MainHeader />
    <main>
      <router-view />
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainFooter from './footers/MainFooter.vue'
import MainHeader from './headers/MainHeader.vue'
</script>

<style scoped lang="scss">
.layout {
  padding: 0 var(--page-padding-lg);
  max-width: var(--max-width-content);
  grid-template-rows: 1fr auto;
  box-sizing: content-box;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;

  main {
    margin-top: 144px;
  }
}

@media (max-width: 1000px) {
  .layout {
    padding: 0 var(--page-padding-md);
  }
}

@media (max-width: 600px) {
  .layout {
    padding: 0 var(--page-padding-sm);

    main {
      margin-top: 70px;
    }
  }
}
</style>
