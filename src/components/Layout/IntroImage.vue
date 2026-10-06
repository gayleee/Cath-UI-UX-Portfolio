<template>
  <div v-if="intro" class="intro-container container flex justify-center">
    <!-- Video Element -->
    <video
      v-if="hasVideo"
      class="intro-img"
      autoplay
      loop
      muted
      playsinline
      fetchpriority="high"
    >
      <source v-if="intro.webmUrl" :src="intro.webmUrl" type="video/webm" />
      <source v-if="intro.mp4Url" :src="intro.mp4Url" type="video/mp4" />
      <source v-if="intro.url && isVideoPath(intro.url)" :src="intro.url" />
    </video>

    <!-- Image Element -->
    <img
      v-else-if="intro.url"
      :src="intro.url"
      :alt="intro.alt || 'Case Study Intro'"
      class="intro-img"
      fetchpriority="high"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  intro: {
    type: Object,
    default: () => ({}),
  },
})

// Helper to check standard file extensions
const isVideoPath = (path) => {
  if (typeof path !== 'string') return false
  return /\.(webm|mp4)$/i.test(path)
}

// Determines if any video source is present
const hasVideo = computed(() => {
  if (!props.intro) return false
  return (
    Boolean(props.intro.webmUrl) ||
    Boolean(props.intro.mp4Url) ||
    isVideoPath(props.intro.url)
  )
})
</script>

<style scoped>
.intro-img {
  width: 100%;
  max-width: 1024px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--border-radius);
}

@media (max-width: 768px) {
  .intro-img {
    aspect-ratio: 16 / 9;
    max-height: 250px;
    margin-top: 1rem;
  }
}
</style>