<template>
  <div v-if="description">
    <p class="font-body whitespace-pre-line leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    default: '',
  },
})
</script>