<template>
  <div class="flex">
    <h1 class="text-title-display">{{ heading }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: {
    type: String,
  },
})
</script>