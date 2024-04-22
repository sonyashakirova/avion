<template>
  <div :class="['frame', 'full-width', position]">
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <div class="description">
        <p v-for="paragraph in text" :key="paragraph">{{ paragraph }}</p>
      </div>
      <CustomButton text="Get in touch" kind="secondary" />
    </div>
    <img :src alt="Interior design" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CustomButton from '../atoms/CustomButton.vue'

interface Props {
  img: string
  title: string
  text: string[]
  position?: 'right' | 'left'
}

const props = defineProps<Props>()
const src = computed(() => {
  return new URL(`../../assets/images/${props.img}`, import.meta.url).href
})
</script>

<style scoped lang="scss">
.frame {
  display: grid;
  grid-template-columns: 1fr 1fr;

  .content {
    padding: 60px 100px 60px var(--page-padding-lg);
    flex-direction: column;
    height: max-content;
    text-wrap: pretty;
    margin-left: auto;
    max-width: 600px;
    display: flex;
    height: 100%;
    gap: 24px;

    .title {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-05);
    }
    .description {
      margin-bottom: 40px;
    }
    button {
      margin-top: auto;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.frame.left {
  img {
    order: -1;
  }
  .content {
    margin-left: 0;
  }
}

@media (max-width: 1000px) {
  .frame .content {
    padding-left: var(--page-padding-md);
  }
}

@media (max-width: 750px) {
  .frame {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    .content {
      padding: 40px var(--page-padding-md);
      max-width: none;
      margin-left: 0;
      gap: 12px;
    }
  }
}

@media (max-width: 600px) {
  .frame {
    .content {
      padding: 40px var(--page-padding-sm);

      .title {
        font-size: var(--font-size-04);
      }
      button {
        width: 100%;
      }
    }
  }
}
</style>
