<template>
  <main class="min-h-screen">
    <section 
      id="hero-section" 
      class="relative min-h-screen px-6 py-16 md:px-16 flex flex-col justify-end max-w-352 mx-auto border-x-0 md:border-x border-slate-300 dark:border-(--color-border)"
    >

      <!-- <div class="custom-bg absolute -inset-px w-[calc(100%+1px)] h-[calc(100%+1px)] z-0 pointer-events-none">
        <ol class="grid w-full h-full list-none p-0 m-0">
          <li v-for="i in 8" :key="i"></li>
        </ol>
      </div> -->

      <!-- add this here in this div if custom-bg will be used: relative z-10 and add overflow-hidden in the hero section -->
      <div class="flex flex-col max-w-5xl gap-6 pb-12">
        <h1 class="text-hero-display font-display text-5xl md:text-[80px] lg:text-[120px] leading-none text-balance tracking-tight">
          UX/UI Designer.
        </h1>
        <p class="text-slate-500 text-lg md:text-xl max-w-2xl">
          Delivering production-ready designs, for different industries and audiences.
        </p>

        <div class="flex flex-row gap-3 pt-2" v-if="ctaContents && ctaContents.length">
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
        </div>
      </div>
    </section>

    <section id="casestudy-section" class="py-20 max-w-352 mx-auto border-x-0 md:border-x border-slate-200 dark:border-(--color-border)">
    <h2 class="font-display text-2xl md:text-3xl text-center mb-12">Case Studies</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 border-t border-b border-slate-200 dark:border-(--color-border) caseStudies">
      <div 
        v-for="(study, index) in studies" 
        :key="study.id"
        class="caseStudies p-8 border-b md:border-r border-slate-200 dark:border-(--color-border) md::nth-child[2n]:border-r-0 md:nth-last-child[-n+2]:border-b-0"
      >
        <CaseStudyList :caseStudy="study" />
      </div>
    </div>
  </section>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { reactive } from 'vue'
import { studies } from '@/data/studies'

import CaseStudyList from '../CaseStudy/CaseStudyList.vue'
import Button from '../Layout/Button.vue'

import chanchan from '/src/assets/clientLogos/chanchangames.webp'
import excell from '/src/assets/clientLogos/excell.webp'
import healspace from '/src/assets/clientLogos/healspace.webp'
import others from '/src/assets/clientLogos/others.webp'

import figma from '/src/assets/toolLogos/figma.webp'
import miro from '/src/assets/toolLogos/miro.webp'
import wireframecc from '/src/assets/toolLogos/wireframecc.webp'
import rive from '/src/assets/toolLogos/rive.webp'
import medibang from '/src/assets/toolLogos/medibang.webp'

import { nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const greetings = [
  {
    language: `Hello! I'm Cath,`,
  },
  {
    language: `Hello! Ako si Cath,`,
  },
  {
    language: `Hallo! Ich bin Cath,`,
  },
]

const currentIndex = ref(0)
const currentGreeting = ref(greetings[0])

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % greetings.length
    currentGreeting.value = greetings[currentIndex.value]
  }, 5000)
})

const logos = [
  { url: healspace, alt: `Healspace logo`, name: `HealSpace Psychological Clinic` },
  { url: excell, alt: `Excell energy logo`, name: `Excell Energy Powergen Corp.` },
  { url: chanchan, alt: `Chanchan logo`, name: `ChanChan Games` },
  { url: others, alt: `Other clients`, name: `Sugar Moon Studio, DreamLab Therapy Center, etc.` },
]

const tools = [
  { url: figma, alt: `Figma Logo`, name: `Figma` },
  { url: miro, alt: `Miro Lgoo`, name: `Miro` },
  { url: wireframecc, alt: `Wireframe.cc Logo`, name: `Wireframe.cc` },
  { url: rive, alt: `Rive Logo`, name: `Rive` },
  { url: medibang, alt: `Medibang Paint Logo`, name: `Medibang Paint` },
]

const ctaContents = reactive([
  {
    label: `Let’s Connect`,
    url: `/contact`,
    link: false,
  },
  {
    label: `Read Bio`,
    url: `/about`,
    link: false,
  },
])

const highlightContents = reactive([
  {
    primaryText: `Available for Full-time and Contractual Work`,
    secondaryText: ``,
    theme: `highlight-status`,
  },
])

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await nextTick()

  gsap.set('.caseStudies', { 
    autoAlpha: 0, 
    y: 40 
  })

  ScrollTrigger.batch('.caseStudies', {
  onEnter: batch => {
    gsap.to(batch, {
      autoAlpha: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto'
    })
  },

  onEnterBack: batch => {
    gsap.to(batch, {
      autoAlpha: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto'
    })
  },

  onLeaveBack: batch => {
    gsap.to(batch, {
      autoAlpha: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.in',
      overwrite: 'auto'
    })
  }
})
})
</script>

<style scoped>
.greeting{
  color: var(--color-gray-400);
  font-size: 32px;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ol {
  all: unset;
  display: grid;
  grid-template-columns: repeat(34, 1fr);
  grid-template-rows: repeat(21, 1fr);
  list-style: none;

  li {
    aspect-ratio: 1 / 1;
    background: var(--bg);
    grid-area: var(--ga);
    overflow: hidden;
    position: relative;

    &::after {
      aspect-ratio: 1 / 1;
      background-color: rgba(255, 255, 255, .3);
      border-radius: 50%;
      content: '';
      display: block;
      inset: 0;
      position: absolute;
      scale: 2;
      translate: var(--tl);
    }

    &:nth-of-type(1) {
      border: 1px solid #cad5e2;
      --ga: 1 / 1 / 22 / 22;
      --tl: 50% 50%;
    }
    &:nth-of-type(2) {
      border: 1px solid #cad5e2;
      --ga: 1 / 22 / 23 / 35;
      --tl: -50% 50%;
    }
    &:nth-of-type(3) {
      border: 1px solid #cad5e2;
      --ga: 14 / 27 / 22 / 35;
      --tl: -50% -50%;
    }
    &:nth-of-type(4) {
      border: 1px solid #cad5e2;
      --ga: 17 / 22 / 22 / 27;
      --tl: 50% -50%;
    }
    &:nth-of-type(5) {
      border: 1px solid #cad5e2;
      --ga: 14 / 22 / 17 / 25;
      --tl: 50% 50%;
    }
    &:nth-of-type(6) {
      border: 1px solid #cad5e2;
      --ga: 14 / 25 / 17 / 27;
      --tl: -50% 50%;
    }
    &:nth-of-type(7) {
      border: 1px solid #cad5e2;
      --ga: 16 / 26 / 17 / 27;
      --tl: -50% -50%;
    }
    &:nth-of-type(8) {
      border: 1px solid #cad5e2;
      --ga: 16 / 25 / 17 / 26;
      --tl: 50% -50%;
    }
  }
} */
</style>