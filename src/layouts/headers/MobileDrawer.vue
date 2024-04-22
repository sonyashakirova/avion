<template>
  <button class="control" type="button" @click="toogle">
    <img class="icon" :src :alt="`${open ? 'Close' : 'Open'} menu`" />
  </button>
  <div :class="['drawer', { open }]">
    <div class="wrapper">
      <nav class="nav">
        <template v-for="category in categories" :key="category">
          <router-link :to="{ name: 'catalog', query: { category } }">{{ category }}</router-link>
        </template>
      </nav>
      <div class="user-nav">
        <router-link to="/profile">
          <img class="icon" src="@/assets/icons/avatar.svg" alt="Profile" />
          Profile
        </router-link>
        <router-link to="/cart">
          <img class="icon" src="@/assets/icons/cart.svg" alt="Cart" />
          Cart
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import categories from '@/data/categories.json'

const open = ref(false)
const src = computed(() => {
  return new URL(`../../assets/icons/${open.value ? 'close' : 'menu'}.svg`, import.meta.url).href
})

function toogle() {
  open.value = !open.value
}

onBeforeRouteUpdate(() => {
  open.value = false
})
</script>

<style scoped lang="scss">
.control {
  width: max-content;
  background: none;
  border: none;
  height: 100%;
  padding: 0;
}

.drawer {
  background-color: var(--color-background);
  transition: width 0.5s ease-out;
  overscroll-behavior: none;
  overflow-y: auto;
  position: fixed;
  height: 100vh;
  top: 70px;
  bottom: 0;
  right: 0;
  width: 0;

  &.open {
    width: 100%;
  }

  .wrapper {
    padding: 24px;
  }

  .nav {
    font-size: var(--font-size-02);
    flex-direction: column;
    display: flex;
    gap: 20px;
  }

  .user-nav {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    flex-direction: column;
    margin-top: 40px;
    padding: 30px 0;
    display: flex;
    gap: 10px;
  }

  .nav a,
  .user-nav a {
    text-decoration: none;
    color: #726e8d;
  }

  .user-nav a {
    color: var(--color-text);
    align-items: center;
    display: flex;
    gap: 8px;
  }

  .icon {
    height: 14px;
    width: 14px;
  }
}
</style>
