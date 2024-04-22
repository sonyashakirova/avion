<template>
  <div class="background full-width">
    <div class="wrapper">
      <h1 class="title">Your shopping cart</h1>
      <CartTable />
      <div class="total">
        <h3 class="subtitle">
          Subtotal
          <span class="price">£{{ cart.totalPrice }}</span>
        </h3>
        <span>Taxes and shipping are calculated at checkout</span>
        <CustomButton
          text="Go to checkout"
          @click="$router.push('/checkout')"
          :disabled="!cart.products.length"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/atoms/CustomButton.vue'
import CartTable from '@/components/frames/CartTable.vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
</script>

<style scoped lang="scss">
.background {
  background-color: var(--color-background-soft);

  .wrapper {
    padding: 50px var(--page-padding-lg) 70px;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 1000px) {
      padding: 50px var(--page-padding-md) 70px;
    }

    @media (max-width: 600px) {
      padding: 30px var(--page-padding-sm) 50px;
    }
  }
}

.title {
  font-family: var(--font-family-heading);
  margin-bottom: 48px;

  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
}

.total {
  border-top: 1px solid #ebe8f4;
  margin-top: 30px;
  padding-top: 30px;
  margin-left: auto;
  color: #4e4d93;
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 14px;

  .subtitle {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-04);
    margin-bottom: 4px;

    .price {
      font-size: var(--font-size-05);
      color: var(--color-text);
      padding-left: 10px;
    }
  }

  button {
    margin-top: 28px;
  }
}

@media (max-width: 600px) {
  .total {
    button {
      width: 100%;
    }
  }
}
</style>
