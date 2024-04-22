<template>
  <header class="header full-width">
    <div class="wrapper top">
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
    <div class="wrapper bottom">
      <nav class="nav">
        <template v-for="category in categories" :key="category">
          <router-link :to="{ name: 'catalog', query: { category } }">{{ category }}</router-link>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import categories from '@/data/categories.json'
</script>

<style scoped lang="scss">
.header {
  background-color: var(--color-background);
  position: fixed;
  z-index: 10;

  .wrapper {
    padding: 20px var(--page-padding-md);
    display: grid;

    &.top {
      grid-template-columns: repeat(3, 1fr);
      align-items: baseline;
      padding-bottom: 20px;
      display: grid;
      gap: 16px;
    }

    &.bottom {
      background-color: var(--color-background-soft);
      padding-top: 20px;
      overflow-x: scroll;
      text-wrap: nowrap;

      &::-webkit-scrollbar {
        display: none;
      }
    }
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
    gap: 44px;
    display: flex;
    justify-content: center;
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
    width: max-content;

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
    .wrapper.top {
      grid-template-columns: 1fr auto auto;
    }

    .logo {
      margin: 0;
      order: -1;
    }

    .search {
      margin-left: auto;
    }
  }
}
</style>
