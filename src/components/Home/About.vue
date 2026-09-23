<template>
  <main class="min-h-screen">
    <section 
      class="relative min-h-screen px-6 py-16 md:px-16 flex flex-col justify-end max-w-352 mx-auto border-x-0 md:border-x border-slate-300 dark:border-(--color-border)"
    >
      <div class="flex flex-col max-w-5xl gap-6 pb-12">
        <h1 class="text-hero-display font-display text-5xl md:text-[80px] lg:text-[120px] leading-none text-balance tracking-tight">
          Outside UX/UI
        </h1>
        <p class="text-slate-500 text-lg md:text-xl max-w-2xl">
          Artistic and creative works beyond UX/UI design, showcasing a range of skills and passions.
        </p>

        <!-- <div class="flex flex-row gap-3 pt-2" v-if="ctaContents && ctaContents.length">
          <Button
            v-if="ctaContents[1]"
            :cta="ctaContents[1]"
            :url="ctaContents[1].url"
            :is-external="ctaContents[1].link"
            variant="secondary" 
          />
          <Button
            v-if="ctaContents[0]"
            :cta="ctaContents[0]"
            :url="ctaContents[0].url"
            :is-external="ctaContents[0].link"
          />
        </div> -->
      </div>
    </section>

    <!-- <section class="py-20 max-w-352 mx-auto border-x-0 md:border-x border-slate-200 dark:border-(--color-border)">
      <h2 class="font-display text-2xl md:text-3xl text-center mb-12">Graphic Design</h2>
    </section> -->

  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

import ProfileImage from '../Layout/ProfileImage.vue'
import Highlight from '../Layout/Highlight.vue'
import Card from '../Layout/Card.vue'
import Modal from '../Layout/Modal.vue'

import Button from '../Layout/Button.vue'
import Gallery from '../Layout/Gallery.vue'

import brochureFront from '@/assets/galleryAssets/brochureFront.webp'
import brochureBack from '@/assets/galleryAssets/brochureBack.webp'
import ccgamesLogo from '@/assets/galleryAssets/ccgamesLogo.webp'
import utahime from '@/assets/galleryAssets/utahime.webp'
import igbeLogo from '@/assets/galleryAssets/igbeLogo.webp'
import jobListing from '@/assets/galleryAssets/jobListing.webp'

import html from '/src/assets/techLogos/html.webp'
import css from '/src/assets/techLogos/css.webp'
import bootstrap from '/src/assets/techLogos/bootstrap.webp'
import vue from '/src/assets/techLogos/vue.webp'

const activeItem = ref(null)

function openModal(item) {
  activeItem.value = item
}

function closeModal() {
  activeItem.value = null
}

// const highlightContents = reactive([
//   {
//     primaryText: 'Recent Graduate',
//     secondaryText: 'Based in the Philippines',
//     theme: `highlight-metadata`,
//   },
// ])

const ctaContents = reactive([
  {
    label: 'Explore Work',
    url: `/`,
    link: false,
  },
])

// const cardContents = reactive([
//   {
//     desc: 'Latin Honor - Cum Laude',
//     award: true,
//     workshop: false,
//   },
//   {
//     desc: 'Champion, ISKOnnovation: EUREKA 2025 UI Design Competition',
//     award: true,
//     workshop: false,
//   },
// ])

const skillContents = reactive([
  { url: html, alt: `HTML Logo`, name: `HTML` },
  { url: css, alt: `CSS Logo`, name: `CSS` },
  { url: bootstrap, alt: `Bootstrap Logo`, name: `Bootstrap 5.3` },
  { url: vue, alt: `Vue Logo`, name: `Vue.JS` },
])

const langContents = reactive([
  {
    desc: 'Filipino - Mother Tongue',
    language: true,
  },
  {
    desc: 'English',
    language: true,
  },
])

const galleryContents = reactive([
  {
    id: `design-0`,
    name: `Tekken 8 Brochure - Front Page`,
    imageUrl: brochureFront,
    imageAlt: `Tekken Brochure Front Page`,
  },
  {
    id: `design-1`,
    name: `Job Listing Designs`,
    imageUrl: jobListing,
    imageAlt: `Job Listing Designs`,
  },
  {
    id: `design-2`,
    name: `ChanChan Games Logo Redesign`,
    imageUrl: ccgamesLogo,
    imageAlt: `ChanChan Games Logo Redesign`,
  },
  {
    id: `design-3`,
    name: `Utahime Sprite Custom Design`,
    imageUrl: utahime,
    imageAlt: `Utahime Sprite Custom Design`,
  },
  {
    id: `design-4`,
    name: `Tekken 8 Brochure - Back Page`,
    imageUrl: brochureBack,
    imageAlt: `Tekken Brochure Back Page`,
  },
  {
    id: `design-5`,
    name: `I'm Gonna Be Evil - Visual Novel Logo Design`,
    imageUrl: igbeLogo,
    imageAlt: `I'm Gonna Be Evil Visual Novel Logo Design`,
  },
])
</script>

<style scoped>
.about-wrapper {
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: var(--bg-main);
}

.about-text {
  color: var(--text-body);
  line-height: 1.8;
}

/* .d-flex.align-items-center.gap-2 {
  white-space: nowrap;
} */

.gallery-wrapper {
  column-count: 3;
  column-gap: 1.5rem;
}

:deep(.gallery-item) {
  display: inline-block;
  width: 100%;
  margin-bottom: 1.5rem;
}

@media (max-width: 992px) {
  .gallery-wrapper {
    column-count: 2;
  }
}
@media (max-width: 768px) {
  .gallery-wrapper {
    column-count: 1;
  }
}
</style>
