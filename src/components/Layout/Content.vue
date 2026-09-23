<template>
  <section class="w-full min-h-screen flex flex-col justify-center">
    <div class="mx-auto w-full max-w-5xl px-4">
      <span class="block mb-4 text-subtitle">{{ contents.name }}</span>

      <h2 class="font-display">{{ contents.contentTitle }}</h2>

      <p class="mt-2 text-slate-600 dark:text-slate-300">
        {{ contents.contentDesc }}
      </p>
    </div>

    <div 
      class="mx-auto w-full max-w-5xl px-4 mt-8 grid gap-6"
      :class="contents.contentImages.length > 1 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'"
    >
      <figure
        v-for="(img, i) in contents.contentImages"
        :key="i"
        class="w-full flex flex-col"
      >
        <a 
          role="button" 
          @click="$emit('open', img)"
          class="block cursor-zoom-in overflow-hidden"
        >
          <img
            :src="img.contentUrl"
            :alt="img.contentAlt"
            class="w-full h-auto object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </a>

        <figcaption v-if="img.contentImgDesc" class="mt-3 text-slate-500">
          <small>{{ img.contentImgDesc }}</small>
        </figcaption>
      </figure>
    </div>

  </section>
</template>

<script setup>
const props = defineProps({
  contents: Object,
  sectionIndex: Number,
})

defineEmits(['open'])
</script>

<style scoped>
/* .content {
  padding: 0;
  margin: var(--space-2xl) auto;
  max-width: 1000px;
} */

.content-img {
  width: 100%;
  object-fit: cover;
  max-height: 70vh;
}

.figure-img {
  border-radius: var(--border-radius-4);
}

@media only screen and (max-width: 600px) {
  .content {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
