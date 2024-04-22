<template>
  <div class="wrapper">
    <input :id="label" type="checkbox" class="checkbox" v-model="model" :value :name />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits } from 'vue'
interface CheckboxProps {
  modelValue?: boolean | string[]
  value?: string
  name?: string
  label: string
}
const props = defineProps<CheckboxProps>()
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped lang="scss">
.checkbox {
  display: none;
}

.checkbox + label {
  line-height: 1.4;
  position: relative;
  padding-left: 28px;
  display: flex;
  align-items: baseline;
  cursor: pointer;
  user-select: none;
}

.checkbox + label:before {
  content: '';
  height: 24px;
  position: absolute;
  top: 2px;
  left: 0;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
}

.checkbox:checked + label::before {
  border: none;
  background-color: #4e4d93;
  background-image: url('@/assets/icons/checkmark.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
}
</style>
