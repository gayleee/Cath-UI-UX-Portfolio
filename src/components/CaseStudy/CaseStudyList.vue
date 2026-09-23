<template>
  <div class="grid grid-cols-1 gap-4">
    <router-link
      :to="{ name: 'CaseStudy', params: { slug: caseStudy.slug } }"
      class="video-container h-auto max-w-full"
      :aria-label="'View full case study for ' + caseStudy.name"
    >
      <video
        :poster="caseStudy.thumbnailUrl"
        autoplay
        loop
        muted
        playsinline
        preload="none"
        class="thumbnail-video"
      >
        <source :src="caseStudy.animationWebm" type="video/webm" />
        <source :src="caseStudy.animationMp4" type="video/mp4" />
        <track kind="captions" src="/captions.vtt" srclang="en" label="English" />
      </video>
    </router-link>

    <div class="gap-4">
      <p>
        <small class="py-2">
          <span class="study-length-text">{{ caseStudy.length }}</span>
          <span class="read-time-text">{{ caseStudy.readTime }}</span>
        </small>
      </p>
      <router-link
        :to="{ name: 'CaseStudy', params: { slug: caseStudy.slug } }"
      >
        <span class="study-name-text py-2">{{ caseStudy.name }}</span>
      </router-link>

      <!-- <p class="mb-3 text-body">{{ caseStudy.desc }}</p> -->

      <!-- <div class="flex flex-wrap gap-2 mb-2 tags-container">
        <div v-for="(item, index) in caseStudy.tag" :key="index">
          <Tag :label="item.name" :category="item.category" />
        </div>
      </div> -->

      <!-- <div v-if="caseStudy.award" class="flex gap-2 mt-2 py-2 ps-2 items-center award-container">
        <Trophy size="16" />
        <small class="award-text">{{ caseStudy.award }}</small>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { Trophy } from '@lucide/vue';
import Tag from '../Layout/Tag.vue'

const props = defineProps({
  caseStudy: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.study-name-text {
  font-size: 18px;
  font-family: var(--font-display);
  font-weight: 400;
  transition: 0.3s ease-in-out;
}

.study-name-text:hover {
  color: var(--color-text-primary);
}

.study-length-text {
  color: var(--color-gray-600);
  text-align: center;
}

.read-time-text {
  color: var(--color-gray-600);
  text-align: center;
}

.award-text {
  color: var(--color-info-text);
  margin: 0;
  line-height: 1.2;
}

.award-container{
  background-color: var(--color-info-bg);
  border-left: 4px solid var(--color-info-border);
}

.award-container svg {
  color: var(--color-info-text);
  flex-shrink: 0;
}

.video-container {
  flex: 0 0 auto;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 520 / 272;
  overflow: hidden;
  display: block;
}

.thumbnail-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media only screen and (max-width: 990px) {
  .entry-container,
  .award-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .award-text {
    text-align: left;
  }

  .video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .thumbnail-video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
}
</style>
