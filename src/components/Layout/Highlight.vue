<template>
  <div
    class="highlight-container flex justify-center items-center flex-wrap gap-2 my-4"
    :class="highlight.theme"
  >
    <span v-if="readTime" class="secondaryText">
      {{ readTime }}
    </span>
    
    <div v-if="readTime && highlight.primaryText" class="circle"></div>
    
    <span v-if="highlight.primaryText" class="primaryText">
      {{ highlight.primaryText }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  highlight: {
    type: Object,
    default: () => ({
      primaryText: '',
      secondaryText: '',
      theme: 'green',
    }),
  },
  readTimeMinutes: {
    type: Number,
    default: null,
  },
})

const readTime = computed(() => {
  if (props.readTimeMinutes !== null) {
    return `${props.readTimeMinutes} min`
  }
  return props.highlight.secondaryText || ''
})
</script>