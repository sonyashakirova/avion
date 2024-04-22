<template>
  <div class="controls">
    <CustomButton
      text="Filters"
      kind="secondary"
      :dropdownIcon="open ? 'up' : 'down'"
      @click="toggleOpen"
    />
  </div>
  <div :class="['container', { open }]">
    <form class="form" @submit.prevent @change="handleChange">
      <fieldset>
        <legend>Category</legend>
        <div class="grid">
          <template v-for="c in categories" :key="c">
            <Checkbox :value="c" :label="c" v-model="catalog.filters.category" name="category" />
          </template>
        </div>
      </fieldset>
      <fieldset>
        <legend>Price</legend>
        <div class="grid">
          <template v-for="p in prices" :key="p">
            <Checkbox :value="p" :label="p" v-model="catalog.filters.price" name="price" />
          </template>
        </div>
      </fieldset>
      <fieldset>
        <legend>Designer</legend>
        <div class="grid">
          <template v-for="d in designers" :key="d">
            <Checkbox :value="d" :label="d" v-model="catalog.filters.designer" name="designer" />
          </template>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { useCatalogStore } from '@/stores/catalog'
import Checkbox from '../atoms/Checkbox.vue'
import categories from '@/data/categories.json'
import prices from '@/data/prices.json'
import designers from '@/data/designers.json'
import CustomButton from '../atoms/CustomButton.vue'

const { push } = useRouter()
const route = useRoute()
const catalog = useCatalogStore()
const open = ref(false)

onBeforeMount(() => {
  Object.keys(catalog.filters).forEach((key) => {
    const value = route.query[key]
    catalog.filters[key] = typeof value === 'string' ? value.split(',') : []
  })
})

onBeforeRouteUpdate((to) => {
  Object.keys(catalog.filters).forEach((key) => {
    const value = to.query[key]
    catalog.filters[key] = typeof value === 'string' ? value.split(',') : []
  })
})

function toggleOpen() {
  open.value = !open.value
}

function handleChange(event: Event) {
  const query = { ...route.query }
  const { name, value, checked } = event.target as HTMLInputElement

  if (query[name]) {
    let queryArray = String(query[name]).split(',')

    if (checked) {
      queryArray.push(value)
    } else {
      queryArray = queryArray.filter((item) => item !== value)
    }

    if (queryArray.length) {
      query[name] = queryArray.join(',')
    } else {
      delete query[name]
    }
  } else {
    query[name] = value
  }

  push({ query })
}
</script>

<style scoped lang="scss">
.controls {
  display: none;
  margin: 20px 0;
  gap: 16px;

  button {
    width: 100%;
  }
}

.form {
  height: max-content;
  display: grid;
  gap: 48px;

  fieldset {
    border: none;
    padding: 0;
  }

  legend {
    padding: 0;
    margin-bottom: 12px;
    font-family: var(--font-family-heading);
  }

  .grid {
    display: grid;
    gap: 12px;
  }
}

@media (max-width: 600px) {
  .controls {
    display: flex;
  }

  .container {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.6s ease-out;
    position: relative;
    margin-right: -50vw;
    margin-left: -50vw;
    width: 100vw;
    right: 50%;
    left: 50%;

    &.open {
      max-height: 1000px;
    }
  }

  .form {
    padding: 20px var(--page-padding-sm) 30px;
    background-color: var(--color-background-soft);
    margin: 0;
    gap: 20px;

    fieldset:not(:last-child) {
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
