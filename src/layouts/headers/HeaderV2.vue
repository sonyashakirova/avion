<template>
  <header class="header full-width">
    <div class="wrapper desktop">
      <router-link class="logo" :to="{ name: 'home' }">Avion</router-link>
      <nav class="nav">
        <template v-for="category in categories" :key="category">
          <router-link :to="{ name: 'catalog', query: { category } }">{{ category }}</router-link>
        </template>
      </nav>
      <div class="user-nav">
        <button type="button" class="search">
          <img class="icon" src="@/assets/icons/search.svg" alt="Search" />
        </button>
        <router-link to="/cart">
          <img class="icon" src="@/assets/icons/cart.svg" alt="Cart" />
        </router-link>
        <router-link to="/profile">
          <img class="icon" src="@/assets/icons/avatar.svg" alt="Profile" />
        </router-link>
      </div>
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
    padding: 25px var(--page-padding-lg);
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
    display: grid;
  }

  .wrapper.mobile {
    justify-content: space-between;
    padding: 20px var(--page-padding-sm);
    display: none;
    height: 70px;
  }

  .logo {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-05);
    text-decoration: none;
    width: max-content;
    color: #22202e;
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

@media (max-width: 1000px) {
  .header {
    .wrapper.desktop {
      padding: 25px var(--page-padding-md);
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
  }
}
</style>
