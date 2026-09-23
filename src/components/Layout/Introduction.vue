<template>
  <div>
    <p class="font-body whitespace-pre-line leading-relaxed">
      {{ intro }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  intro: {
    type: String,
    required: true,
  },
})
</script>
