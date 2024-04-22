<template>
  <footer class="footer full-width">
    <div class="wrapper">
      <div class="grid">
        <div>
          <h2 class="logo">Avion</h2>
          <address>
            <p>21 New York Street</p>
            <p>New York City</p>
            <p>United States of America</p>
          </address>
        </div>
        <div>
          <h3 class="title">Social links</h3>
          <ul class="socials">
            <li v-for="s in socials" :key="s.name">
              <a :href="s.link" target="_blank">
                <img :src="getImage(s.icon)" :alt="s.name" width="18" height="18" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="title">Menu</h3>
          <ul class="list">
            <li><router-link :to="{ name: 'catalog' }">New arrivals</router-link></li>
            <li><router-link :to="{ name: 'catalog' }">Best sellers</router-link></li>
            <li><router-link :to="{ name: 'catalog' }">Recently viewed</router-link></li>
            <li><router-link :to="{ name: 'catalog' }">Popular this week</router-link></li>
            <li><router-link :to="{ name: 'catalog' }">All products</router-link></li>
          </ul>
        </div>
        <div class="categories">
          <h3 class="title">Categories</h3>
          <ul class="list">
            <li v-for="category in categories" :key="category">
              <router-link :to="`/products?category=${category}`">{{ category }}</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="title">Our company</h3>
          <ul class="list">
            <li><router-link to="/about">About us</router-link></li>
            <li><router-link to="/vacancies">Vacancies</router-link></li>
            <li><router-link to="/contacts">Contact us</router-link></li>
            <li><router-link to="/privacy">Privacy</router-link></li>
            <li><router-link to="/return">Returns policy</router-link></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright 2022 Avion LTD</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import categories from '@/data/categories.json'
import socials from '@/data/socials.json'

function getImage(fileName: string) {
  return new URL(`../../assets/icons/socials/${fileName}`, import.meta.url).href
}
</script>

<style scoped lang="scss">
.footer {
  background-color: var(--color-background-contrast);
  color: var(--color-text-contrast);
  font-size: var(--font-size-01);

  .wrapper {
    padding: 60px var(--page-padding-lg) 0;
    max-width: var(-max-width-content);
    margin: 0 auto;
  }

  .grid {
    grid-template-columns: 2fr 3fr 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 50px;
    display: grid;
  }

  .logo {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-07);
  }

  address {
    font-style: normal;
    padding-top: 10px;
    display: grid;
    gap: 10px;
  }

  .title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-02);
  }

  ul {
    margin-top: 10px;
    list-style: none;
    display: grid;
    padding: 0;
    gap: 12px;
  }

  .socials {
    margin-top: 20px;
    display: flex;
    gap: 24px;
  }

  a {
    transition: opacity 0.3s ease-out;
    text-decoration: none;
    color: inherit;

    &:hover {
      opacity: 0.5;
    }
    &:focus {
      opacity: 1;
    }
  }

  .copyright {
    border-top: 1px solid var(--primary);
    margin-top: 40px;
    padding: 20px 0 30px;
  }
}

@media (max-width: 1000px) {
  .footer {
    .wrapper {
      padding: 60px var(--page-padding-md) 0;
    }

    .grid {
      grid-template-columns: 3fr 3fr 2fr 2fr;
      column-gap: 30px;
    }

    .categories {
      display: none;
    }

    .socials {
      grid-template-columns: repeat(3, 1fr);
      width: max-content;
      display: grid;
    }
  }
}

@media (max-width: 600px) {
  .footer {
    .wrapper {
      padding: 40px var(--page-padding-sm) 0;
    }

    .grid {
      grid-template-columns: 1fr 1fr;
    }

    .copyright {
      text-align: center;
    }
  }
}
</style>
