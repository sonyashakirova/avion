<template>
  <button :class="['button', kind, size]" type="button">
    {{ text }}
    <span v-if="dropdownIcon" :class="['triangle', dropdownIcon]"></span>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  text: string
  dropdownIcon?: 'up' | 'down'
  kind?: 'primary' | 'secondary' | 'opaque'
  size?: 'sm' | 'md'
}

defineProps<ButtonProps>()
</script>

<style scoped lang="scss">
.button {
  height: 56px;
  width: max-content;
  background-color: var(--color-background-contrast);
  color: var(--color-text-contrast);
  border: none;
  padding: 16px 32px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  &:hover {
    background-color: #1e193e;
  }

  &:focus {
    background-color: var(--color-background-contrast);
  }

  &:disabled {
    opacity: 0.5;
    background-color: var(--color-background-contrast);
  }
}

.sm {
  height: 48px;
  padding: 12px 24px;
}

.secondary {
  background-color: #f9f9f9;
  color: var(--color-text);

  &:hover {
    background-color: #ebe8f4;
  }

  &:focus {
    background-color: #f9f9f9;
  }
}

.opaque {
  background-color: rgba(249, 249, 249, 0.15);

  &:hover {
    background-color: rgba(249, 249, 249, 0.3);
  }

  &:focus {
    background-color: rgba(249, 249, 249, 0.15);
  }
}

.triangle {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid var(--dark-primary);

  &.up {
    transform: rotate(180deg);
  }
}
</style>
