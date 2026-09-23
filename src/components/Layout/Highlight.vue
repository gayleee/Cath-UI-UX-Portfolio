<template>
  <div
    class="highlight-container flex justify-center items-center flex-wrap gap-2 my-4"
    :class="highlight.theme"
  >
    <span class="secondaryText">{{ highlight.secondaryText }}</span>
    <div class="circle"></div>
    <span class="primaryText">{{ highlight.primaryText }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  highlight: {
    type: Object,
    default: () => ({
      primaryText: '',
      secondaryText: '',
      theme: 'green',
    }),
  },
})
</script>

<style scoped>
.secondaryText,
.primaryText {
  font-size: 18px;
  white-space: normal;
  max-width: 100%;
}

.highlight-metadata .circle {
  background-color: var(--color-green-500);
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.highlight-metadata .primaryText {
  color: var(--color-green-500);
  font-size: 18px;
  text-align: center;
}

.highlight-metadata .secondaryText {
  color: var(--color-green-500);
  font-size: var(--color-green-500);
  text-align: center;
}

.highlight-role .circle {
  background-color: var(--color-green-500);
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.highlight-role .primaryText {
  color: var(--color-green-500);
  font-size: 18px;
  text-align: center;
}

.highlight-role .secondaryText {
  color: var(--color-green-500);
  font-size: 18px;
  text-align: center;
}

.highlight-status .primaryText,
.highlight-status .secondaryText {
  color: var(--color-info-status);
  font-size: 18px;
  text-align: center;
}

.highlight-status .circle {
  background-color: var(--color-info-status);
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
</style>
