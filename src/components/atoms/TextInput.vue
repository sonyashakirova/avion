<template>
  <label :for="id">{{ label }}</label>
  <input :id v-bind="$attrs" v-model="model" />
</template>

<script setup lang="ts">
interface InputProps {
  id: string
  label: string
}

defineProps<InputProps>()
const model = defineModel()
</script>

<style scoped lang="scss">
label {
  display: none;
}

input {
  transition: background-color 0.3s ease-out;
  background-color: #f9f9f9;
  color: var(--color-text);
  padding: 17px 32px;
  border: none;
  height: 56px;
  width: 100%;

  &:focus {
    background-color: #ececec;
    outline: none;
  }

  &::placeholder {
    opacity: 0.5;
  }
}
</style>
