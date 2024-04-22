<template>
  <div class="frame">
    <h2 class="title">{{ title }}</h2>
    <ul :class="[overflow]">
      <li><ProductCard id="1" image="product-1.jpg" name="The Dandy chair" price="250" /></li>
      <li><ProductCard id="2" image="product-2.jpg" name="Rustic Vase Set" price="155" /></li>
      <li><ProductCard id="3" image="product-3.jpg" name="The Silky Vase" price="125" /></li>
      <li><ProductCard id="4" image="product-4.jpg" name="The Lucy Lamp" price="399" /></li>
    </ul>
    <CustomButton
      text="View collection"
      kind="secondary"
      @click="$router.push({ name: 'catalog' })"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '../cards/ProductCard.vue'
import CustomButton from '../atoms/CustomButton.vue'

interface Props {
  title: string
  overflow: 'wrap' | 'scroll'
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.frame {
  padding: 60px 0 50px;

  .title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-06);
    margin-bottom: 30px;
  }

  ul {
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    display: grid;
    padding: 0;
    gap: 20px;
  }

  button {
    margin: 40px auto 0;
    display: block;
  }
}

@media (max-width: 750px) {
  ul {
    &.wrap {
      grid-template-columns: repeat(2, 1fr);
    }

    &.scroll {
      padding: 0 var(--page-padding-md);
      margin-right: -50vw;
      margin-left: -50vw;
      overflow-x: scroll;
      overflow-y: hidden;
      position: relative;
      width: 100vw;
      right: 50%;
      left: 50%;

      li {
        width: calc(50vw - 50px);
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

@media (max-width: 600px) {
  .frame {
    padding: 48px 0 38px;

    .title {
      font-size: var(--font-size-04);
      margin-bottom: 20px;
    }

    ul {
      gap: 16px;

      &.scroll {
        padding: 0 var(--page-padding-sm);

        li {
          width: calc(50vw - 32px);
        }
      }
    }

    button {
      width: 100%;
      margin: 30px 0 0;
    }
  }
}
</style>
