<template>
  <div v-if="category">
    <div class="tag font-body" :class="category">
      <span class="text-label">{{ label }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.tag {
  background-color: var(--color-tag-bg);
  border: 1px solid var(--color-tag-border);
  color: var(--color-tag-text);
  font-size: 12px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  width: fit-content;
  cursor: default;
  backdrop-filter: var(--blur-subtle);
}
</style>
