<template>
  <table class="table desktop">
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.products.length">
        <tr v-for="product in cart.products" v-bind:key="product.id">
          <td><CartItem v-bind="product" /></td>
          <td>
            <Counter v-model="product.quantity" :onZero="() => cart.removeProduct(product.id)" />
          </td>
          <td>
            <span>£{{ Number(product.price) * product.quantity }}</span>
          </td>
        </tr>
      </template>
      <tr v-else>
        <td colspan="3" class="empty">The cart is empty</td>
      </tr>
    </tbody>
  </table>
  <div class="table mobile">
    <ul v-if="cart.products.length">
      <li v-for="product in cart.products" v-bind:key="product.id">
        <CartItem v-bind="product" v-model="product.quantity" withCounter />
      </li>
    </ul>
    <p v-else class="empty">The cart is empty</p>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import Counter from '../atoms/Counter.vue'
import CartItem from '../cards/CartItem.vue'

const cart = useCartStore()
</script>

<style scoped lang="scss">
.table.desktop {
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 10px;
    border-bottom: 1px solid #ebe8f4;
    font-family: var(--font-family-heading);
    font-size: var(--font-size-01);
    padding: 12px 0;
    text-align: left;
  }

  th:first-child {
    width: 70%;
  }

  th:last-child,
  td:last-child {
    text-align: right;
  }

  td {
    padding: 20px 0 0;

    &.empty {
      color: #bab7ce;
      padding: 80px 0 50px;
      text-align: center;
    }
  }
}

.table.mobile {
  display: none;

  ul {
    flex-direction: column;
    list-style: none;
    display: flex;
    padding: 0;
    gap: 28px;
  }

  p.empty {
    padding: 40px 0 20px;
    color: #bab7ce;
    text-align: center;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .table {
    &.desktop {
      display: none;
    }
    &.mobile {
      display: flex;
    }
  }
}
</style>
