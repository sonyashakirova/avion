<template>
  <div class="frame">
    <div class="content">
      <h2 class="title">The furniture brand for the future, with timeless designs</h2>
      <CustomButton
        text="View collection"
        kind="opaque"
        @click="$router.push({ name: 'catalog' })"
      />
      <p class="description">
        A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice
        fonts, tasteful colors and a beautiful way to display things digitally using modern web
        technologies.
      </p>
    </div>
    <img src="@/assets/images/home-image.jpg" alt="Interior Design" />
  </div>
</template>

<script setup lang="ts">
import CustomButton from '../atoms/CustomButton.vue'
</script>

<style scoped lang="scss">
.frame {
  grid-template-columns: 7fr 5fr;
  min-height: 500px;
  padding: 60px 0;
  display: grid;

  .content {
    background-color: var(--color-background-contrast);
    color: var(--color-text-contrast);
    flex-direction: column;
    padding: 60px;
    display: flex;
    gap: 40px;
  }

  .title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-06);
  }

  .description {
    font-size: var(--font-size-03);
    margin-top: auto;
  }

  img {
    background-color: var(--color-background-image);
    object-fit: cover;
    width: 100%;
  }
}

@media (max-width: 1000px) {
  .frame {
    display: block;

    img {
      display: none;
    }
  }
}

@media (max-width: 600px) {
  .frame {
    padding: 0;

    .content {
      padding: 40px 24px 24px;
      position: relative;
      margin-right: -50vw;
      margin-left: -50vw;
      width: 100vw;
      right: 50%;
      left: 50%;
    }

    .title,
    .description {
      order: -1;
    }

    button {
      width: 100%;
    }
  }
}
</style>
