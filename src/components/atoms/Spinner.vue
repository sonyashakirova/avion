<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.spinner {
  width: 100px;
  height: 100px;
  border: 10px solid #e2e1e7;
  border-radius: 50%;
  border-top-color: #807f85;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
