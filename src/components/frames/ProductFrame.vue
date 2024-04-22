<template>
  <div class="frame full-width">
    <Spinner v-if="catalog.isLoading" />
    <div v-else-if="catalog.product" class="wrapper">
      <img class="image" :src alt="Product Image" />
      <div class="content">
        <h2 class="title">{{ catalog.product.name }}</h2>
        <span class="price">£{{ catalog.product.price }}</span>
        <div class="features">
          <h3 class="subtitle">Description</h3>
          <p>{{ catalog.product.description }}</p>
          <ul>
            <li v-for="feature in catalog.product.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="dimensions">
          <h3 class="subtitle">Dimensions</h3>
          <table>
            <thead>
              <tr>
                <th v-for="key in Object.keys(catalog.product.dimensions)" :key="key">
                  {{ key }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td v-for="value in Object.values(catalog.product.dimensions)" :key="value">
                  {{ value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="amount">
          <h3 class="subtitle">Amount:</h3>
          <Counter v-model="amount" />
          <CustomButton text="Add to cart" @click="handleClick" />
        </div>
      </div>
    </div>
    <div v-else class="wrapper">
      <div class="image empty">
        <img class="icon" src="@/assets/icons/image.svg" alt="No image" />
      </div>
      <div class="content">
        <h2 class="title">Not Found</h2>
        <p>Sorry, we haven't found this product</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useCatalogStore } from '@/stores/catalog'
import Counter from '../atoms/Counter.vue'
import CustomButton from '../atoms/CustomButton.vue'
import Spinner from '../atoms/Spinner.vue'

const { push } = useRouter()
const catalog = useCatalogStore()
const cart = useCartStore()
const amount = ref(1)

const src = computed(() => {
  return new URL(`../../assets/images/products/${catalog.product?.image}`, import.meta.url).href
})

function handleClick() {
  if (catalog.product) {
    cart.addProduct(catalog.product, amount.value)
    push({ name: 'cart' })
  }
}
</script>

<style scoped lang="scss">
.frame {
  background-color: var(--color-background-soft);
  justify-content: center;
  align-items: center;
  min-height: 600px;
  display: flex;

  .wrapper {
    padding: 50px var(--page-padding-lg);
    max-width: var(--max-width-content);
    grid-template-columns: 1fr 1fr;
    box-sizing: content-box;
    min-height: 600px;
    margin: 0 auto;
    display: grid;
    width: 100%;
    gap: 60px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #cfced3;

    &.empty {
      justify-content: center;
      align-items: center;
      display: flex;

      .icon {
        width: 32px;
        height: 32px;
      }
    }
  }

  .content {
    padding: 30px 0;
  }

  .title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-07);
    margin-bottom: 8px;
  }

  .subtitle {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-02);
    color: var(--color-text);
  }

  .price {
    font-size: var(--font-size-05);
  }

  .features {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: var(--color-text-soft);
    flex-direction: column;
    padding: 20px 0 30px;
    margin-top: 20px;
    display: flex;
    gap: 16px;
  }

  .dimensions {
    flex-direction: column;
    display: flex;
    gap: 20px;

    table {
      width: max-content;
      border-collapse: collapse;

      th,
      td {
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        padding: 8px 40px;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          border-right: none;
          padding-right: 0;
        }
      }

      td {
        color: var(--color-text-soft);
      }
    }
  }

  .amount {
    margin-top: 60px;
    align-items: center;
    display: flex;
    gap: 20px;

    button {
      margin-left: auto;
    }
  }
}

@media (max-width: 1000px) {
  .frame {
    .wrapper {
      padding: 50px var(--page-padding-md);
    }
  }
}

@media (max-width: 750px) {
  .frame {
    .wrapper {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      padding-bottom: 0;
      gap: 0;
    }

    .features,
    .dimensions table td {
      color: var(--color-text);
    }
  }
}

@media (max-width: 600px) {
  .frame {
    .wrapper {
      padding: 0;
    }

    .content {
      padding: 30px var(--page-padding-sm);
    }

    .title {
      font-size: var(--font-size-05);
      margin-bottom: 4px;
    }

    .price {
      font-size: var(--font-size-04);
    }

    .dimensions table {
      text-align: center;
      width: 100%;
    }

    .amount {
      flex-wrap: wrap;
      margin-top: 40px;

      .button {
        width: 100%;
      }
    }
  }
}
</style>
