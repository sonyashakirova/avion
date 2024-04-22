<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <span>{{ model }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  min?: number
  max?: number
  onZero?: () => void
}

const model = defineModel<number>()
const props = defineProps<Props>()

function decrement() {
  if (props.min && model.value! > props.min) {
    model.value!--
  }

  if (!props.min && model.value! > 1) {
    model.value!--
  }

  if (props.onZero && model.value! === 1) {
    props.onZero()
  }
}

function increment() {
  if (!props.max || model.value! < props.max) {
    model.value!++
  }
}
</script>

<style scoped lang="scss">
.counter {
  height: 46px;
  display: flex;
  padding: 16px 12px;
  gap: 12px;
  width: max-content;
  min-width: 120px;
  align-items: center;
  justify-content: space-around;
  background-color: #f9f9f9;

  button {
    border: none;
    background: none;
    cursor: pointer;
    color: #cac6da;
  }

  button:hover {
    color: #2a254b;
  }
}
</style>
