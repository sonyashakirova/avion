<template>
  <div :class="['frame', 'full-width', { withBackground }]">
    <div class="content">
      <h2 class="title">Join the club and get the benefits</h2>
      <p>
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores
        and more
      </p>
      <form @submit.prevent class="email-form">
        <TextInput
          id="email"
          label="Enter your email"
          placeholder="your@email.com"
          type="email"
          v-model="email"
        />
        <CustomButton text="Sign up" type="submit" @click="sendEmail" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from '../atoms/CustomButton.vue'
import TextInput from '../atoms/TextInput.vue'

defineProps<{ withBackground?: boolean }>()

const email = ref('')
function sendEmail() {
  console.log('Email:', email.value)
}
</script>

<style scoped lang="scss">
.frame {
  background-color: var(--color-background-soft);
  padding: 60px var(--page-padding-lg);
  text-align: center;

  .content {
    background-color: var(--color-background);
    max-width: var(--max-width-content);
    margin: 0 auto;
    padding: 60px;
  }

  .title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-07);
    margin-bottom: 16px;
  }

  p {
    text-wrap: balance;
  }

  .email-form {
    grid-template-columns: 1fr auto;
    margin: 70px auto 0;
    max-width: 470px;
    display: grid;
    width: 100%;
  }
}

.frame.withBackground {
  background-image: url('src/assets/images/subscription-image.jpg');
  color: var(--color-text-contrast);
  background-color: #8e4409;
  background-position: center;
  background-size: cover;

  .content {
    background-color: transparent;
  }
}

@media (max-width: 1000px) {
  .frame {
    padding: 50px var(--page-padding-md);

    .title {
      font-size: var(--font-size-05);
    }
  }
}

@media (max-width: 600px) {
  .frame {
    background-color: var(--color-background);
    padding: 40px var(--page-padding-sm);
    text-align: start;

    .content {
      padding: 0;
    }

    .title {
      font-size: var(--font-size-04);
    }

    .email-form {
      margin-top: 60px;
      max-width: none;
    }
  }
}
</style>
