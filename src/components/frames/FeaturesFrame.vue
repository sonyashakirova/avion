<template>
  <div class="frame">
    <h2 class="title">What makes our brand different</h2>
    <ul class="features">
      <li v-for="feature in features" :key="feature.name">
        <FeatureCard v-bind="feature" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import features from '@/data/features.json'
import FeatureCard from '../cards/FeatureCard.vue'
</script>

<style scoped lang="scss">
.frame {
  padding: 60px 0;

  .title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-05);
    margin-bottom: 50px;
    text-align: center;
  }

  .features {
    list-style: none;
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    gap: 60px;
  }
}

@media (max-width: 1000px) {
  .frame {
    .features {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (max-width: 600px) {
  .frame {
    padding: 45px 0;

    .title {
      font-size: var(--font-size-04);
      margin-bottom: 36px;
      text-align: start;
    }

    .features {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  }
}
</style>
