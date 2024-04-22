<template>
  <header class="header full-width">
    <div class="wrapper desktop">
      <div class="top">
        <button type="button" class="search">
          <img class="icon" src="@/assets/icons/search.svg" alt="Search" />
        </button>
        <router-link class="logo" :to="{ name: 'home' }">Avion</router-link>
        <div class="user-nav">
          <router-link to="/profile">
            <img class="icon" src="@/assets/icons/avatar.svg" alt="Profile" />
          </router-link>
          <router-link to="/cart">
            <img class="icon" src="@/assets/icons/cart.svg" alt="Cart" />
          </router-link>
        </div>
      </div>
      <nav class="bottom nav">
        <template v-for="category in categories" :key="category">
          <router-link :to="{ name: 'catalog', query: { category } }">{{ category }}</router-link>
        </template>
      </nav>
    </div>
    <div class="wrapper mobile">
      <router-link class="logo" :to="{ name: 'home' }">Avion</router-link>
      <div class="user-nav">
        <button type="button" class="search">
          <img class="icon" src="@/assets/icons/search.svg" alt="Search" />
        </button>
        <MobileDrawer />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import categories from '@/data/categories.json'
import MobileDrawer from './MobileDrawer.vue'
</script>

<style scoped lang="scss">
.header {
  background-color: var(--color-background);
  position: fixed;
  z-index: 10;

  .wrapper.desktop {
    padding: 20px var(--page-padding-md);
    display: grid;

    .top {
      grid-template-columns: repeat(3, 1fr);
      align-items: baseline;
      padding-bottom: 20px;
      display: grid;
    }

    .bottom {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding-top: 20px;
    }
  }

  .wrapper.mobile {
    padding: 20px var(--page-padding-sm);
    justify-content: space-between;
    display: none;
    height: 70px;
  }

  .logo {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-05);
    text-decoration: none;
    width: max-content;
    color: #22202e;
    margin: 0 auto;
  }

  .nav {
    justify-content: center;
    column-gap: 44px;
    flex-wrap: wrap;
    display: flex;
    row-gap: 10px;
  }

  .user-nav {
    margin-left: auto;
    display: flex;
    gap: 16px;
  }

  .nav a,
  .user-nav a {
    text-decoration: none;
    color: #726e8d;

    &:hover {
      color: var(--color-text);
    }
  }

  .search {
    width: max-content;
    background: none;
    cursor: pointer;
    border: none;
    padding: 0;
  }

  .icon {
    height: 16px;
    width: 16px;

    &:hover {
      opacity: 0.6;
    }
  }
}

@media (max-width: 600px) {
  .header {
    .wrapper.desktop {
      display: none;
    }

    .wrapper.mobile {
      display: flex;
    }

    .logo {
      margin: 0;
    }
  }
}
</style>
