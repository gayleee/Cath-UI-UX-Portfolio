<template>
  <div class="flex w-full min-h-screen justify-between overflow-x-hidden">
    <aside class="relative max-lg:hidden w-64 shrink-0 border-r border-slate-300 dark:border-neutral-800">
      <div class="fixed top-20 left-8 w-48 max-h-[calc(100vh-6rem)] overflow-y-auto z-10">
        <nav>
          <ul class="flex flex-col gap-8 text-sm border-l border-slate-200 dark:border-slate-800">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="`#${item.id}`"
                @click.prevent="scrollToSection(item.id)"
                class="block -ml-px border-l-2 pl-4 transition-all duration-150 font-display"
                :class="
                  activeSection === item.id
                    ? 'border-(--brand-color) font-medium text-(--brand-color)'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                "
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <main class="relative min-w-0 flex-1 px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-0">
      <div v-if="currentStudy" class="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 py-8 md:py-24" id="overview">
        <Header :heading="currentStudy.name" class="font-display" />
        <div v-if="currentStudy.award" class="flex gap-2 pb-2 items-center award-container" style="color: var(--brand-color);">
          <Trophy size="16" />
          <p class="font-display">{{ currentStudy.award }}</p>
        </div>

        <Introduction :description="currentStudy.description" />
        <IntroImage :intro="currentStudy?.intro" />

        <div class="flex flex-row w-full flex-wrap justify-between gap-4 items-center">
          <div class="flex flex-row gap-4 w-full grow">
            <Button
              v-if="!currentStudy.callout?.isNDA && currentStudy.cta"
              :label="currentStudy.cta.label"
              :url="currentStudy.cta.url"
              :is-external="currentStudy.cta.isExternal"
            />
            <Callout :callout="currentStudy.callout" />
          </div>
        </div>

        <div v-if="currentStudy.roles?.length" class="py-12 md:py-16" id="role">
          <h2 class="text-subtitle-display font-display pb-4">My Role and Tools</h2>
          <div class="overflow-x-auto w-full border border-slate-200 dark:border-neutral-800">
            <table class="w-full min-w-150 text-left text-sm border-collapse">
              <thead>
                <tr class="bg-slate-50 dark:bg-neutral-900/50 border-b border-slate-200 dark:border-neutral-800 text-slate-500 dark:text-slate-400">
                  <th class="py-3 px-4 font-body">Role</th>
                  <th class="py-3 px-4 font-body">Tasks & Responsibilities</th>
                  <th class="py-3 px-4 font-body">Tools/Technologies</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-neutral-800">
                <tr 
                  v-for="(roleItem, index) in currentStudy.roles" 
                  :key="roleItem.title || index"
                  class="align-top hover:bg-slate-50/50 dark:hover:bg-neutral-900/30 transition-colors"
                >
                  <td class="py-4 px-4 text-(--brand-color) whitespace-nowrap font-display">
                    {{ roleItem.title }}
                  </td>
                  <td class="py-4 px-4 text-slate-600 dark:text-slate-300">
                    <ul class="space-y-1.5">
                      <li 
                        v-for="(taskItem, tIndex) in roleItem.tasks" 
                        :key="tIndex" 
                        class="flex items-start gap-2"
                      >
                        <span class="inline-block w-1.5 h-1.5 rounded-full bg-(--brand-color) mt-2 shrink-0"></span>
                        <span class="cursor-default font-body">{{ taskItem }}</span>
                      </li>
                    </ul>
                  </td>
                  <td class="py-4 px-4">
                    <div class="flex flex-wrap gap-1.5">
                      <span 
                        v-for="(tool, toolIndex) in roleItem.tools" 
                        :key="toolIndex"
                        class="inline-flex font-body items-center px-2.5 py-1 bg-neutral-100 text-slate-700 border border-neutral-200 dark:bg-neutral-800 dark:text-slate-300 dark:border-neutral-700"
                      >
                        {{ tool }}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-for="section in currentStudy.sections" :key="section.id">
          <div 
            v-if="section.id !== 'overview'"
            :id="section.id" 
            class="py-12 border-t border-slate-200 dark:border-neutral-800"
          >
            <h2 v-if="section.title" class="text-subtitle-display font-display pb-4">
              {{ section.title }}
            </h2>
            
            <p 
              v-if="section.description" 
              v-html="section.description"
              class="font-body whitespace-pre-line leading-relaxed mb-6"
            ></p>

            <div v-if="section.images?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure v-for="(img, imgIdx) in section.images" :key="imgIdx" class="flex flex-col">
                <img :src="img.url" :alt="img.alt || 'Section image'" class="w-full object-cover" />
                <figcaption v-if="img.caption" class="text-xs text-slate-500 mt-4">
                  {{ img.caption }}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div v-if="currentStudy.cards?.length" id="reflections" class="pb-12">
          <h2 class="text-subtitle-display font-display">Reflections</h2>
          <div class="flex flex-col gap-4 py-8">
            <div 
              v-for="(card, cardIdx) in currentStudy.cards" 
              :key="cardIdx" 
              class="p-6 border border-slate-200 dark:border-neutral-800 bg-slate-50/50 dark:bg-neutral-900/30"
            >
              <div class="flex flex-row gap-2 items-center mb-4">
                <BookOpenCheck size="16" class="text-(--brand-color)" />
                <h3 class="text-lg font-display text-(--brand-color)">
                  {{ card.title }}
                </h3>
              </div>
              <p v-if="card.description" class="text-sm font-body text-slate-600 dark:text-slate-300">{{ card.description }}</p>
            </div>
          </div>
        </div>

        <div class="w-full mx-auto">
          <Pagination />
        </div>
      </div>

      <div v-else class="mx-auto max-w-xl text-center py-24 px-4">
        <h1 class="text-2xl font-display font-bold mb-2">Case Study Not Found</h1>
        <p class="text-slate-500 dark:text-slate-400 mb-6 font-body">
          The project you are looking for is currently loading.
        </p>
        <router-link to="/" class="underline text-blue-600 font-body">Return to Home</router-link>
      </div>
    </main>

    <aside class="relative max-lg:hidden w-56 shrink-0 border-l border-slate-300 dark:border-neutral-800">
      <div class="fixed top-20 right-4 w-48 flex flex-col gap-4 max-h-[calc(100vh-6rem)] overflow-y-auto z-10">
        <p class="text-slate-400 dark:text-slate-200 font-display">
          Explore More
        </p>
        <div class="sidebar-card-compact flex flex-col gap-4">
          <CaseStudyList
            v-for="study in otherCaseStudies"
            :key="study.slug"
            :caseStudy="study"
          />
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { studies } from '@/data/studies'

import Tag from '../Layout/Tag.vue'
import Header from '../Layout/Header.vue'
import Introduction from '../Layout/Introduction.vue'
import Button from '../Layout/Button.vue'
import IntroImage from '../Layout/IntroImage.vue'
import Callout from '../Layout/Callout.vue'
import Pagination from '../Layout/Pagination.vue'
import CaseStudyList from '../CaseStudy/CaseStudyList.vue'

import Highlight from '../Layout/Highlight.vue'
import Content from '../Layout/Content.vue'
import Modal from '../Layout/Modal.vue'
import { BookOpenCheck, Trophy } from '@lucide/vue'

const route = useRoute()

const currentStudy = computed(() => {
  const slug = route.params.slug
  if (!slug) return null
  return studies.find((s) => s.slug === slug) || null
})

const otherCaseStudies = computed(() => {
  if (!currentStudy.value) return studies
  return studies.filter((study) => study.slug !== currentStudy.value.slug)
})

const activeSection = ref('overview')
const isManualScrolling = ref(false)
let scrollTimeout = null
let observer = null

const navItems = computed(() => {
  if (!currentStudy.value) return []

  const items = [{ id: 'overview', label: 'Overview' }]

  if (currentStudy.value.roles?.length) {
    items.push({ id: 'role', label: 'Role & Tools' })
  }

  if (currentStudy.value.sections?.length) {
    currentStudy.value.sections.forEach((sec) => {
      if (sec.id !== 'overview') {
        items.push({
          id: sec.id,
          label: sec.sectionName || sec.title || sec.id
        })
      }
    })
  }

  if (currentStudy.value.cards?.length) {
    items.push({ id: 'reflections', label: 'Reflections' })
  }

  return items
})

const scrollToSection = (id) => {
  activeSection.value = id
  isManualScrolling.value = true

  if (scrollTimeout) clearTimeout(scrollTimeout)

  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  scrollTimeout = setTimeout(() => {
    isManualScrolling.value = false
  }, 800)
}

const handleScroll = () => {
  if (isManualScrolling.value) return

  if (window.scrollY < 100) {
    activeSection.value = 'overview'
    return
  }

  const totalHeight = document.documentElement.scrollHeight
  const scrollPosition = window.innerHeight + window.scrollY

  if (scrollPosition >= totalHeight - 50) {
    const lastItem = navItems.value[navItems.value.length - 1]
    if (lastItem) {
      activeSection.value = lastItem.id
    }
  }
}

const setupObserver = () => {
  if (observer) observer.disconnect()

  observer = new IntersectionObserver(
    (entries) => {
      if (isManualScrolling.value) return

      const totalHeight = document.documentElement.scrollHeight
      const scrollPosition = window.innerHeight + window.scrollY
      if (window.scrollY < 100 || scrollPosition >= totalHeight - 50) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { 
      rootMargin: '-15% 0px -60% 0px',
      threshold: 0.1
    }
  )

  nextTick(() => {
    navItems.value.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
  })
}

onMounted(() => {
  console.log('test')
  console.log('Raw route.params:', route.params)
  console.log('Route slug:', route.params.slug)
  console.log('Loaded studies data:', studies)
  console.log('Current study match:', currentStudy.value)

  window.addEventListener('scroll', handleScroll, { passive: true })
  setupObserver()
})

watch(
  () => route.params.slug,
  () => {
    setupObserver()
  }
)

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
  if (scrollTimeout) clearTimeout(scrollTimeout)
})
</script>

<style scoped>
aside{
  border-right: 1px solid var(--color-border);
}

li{
  cursor: pointer;
}

button{
  background-color: var(--color-button-bg); 
  border-radius: var(--border-radius);
}

th, td, thead{
  border-color: var(--color-border);
}

.active{
  color: var(--color-info-text);
  background-color: var(--color-info-bg);
}

.sidebar-card-compact :deep(.video-container) {
  height: 72px !important;
  max-height: 72px !important;
  width: 100% !important;
  overflow: hidden !important;
}

.sidebar-card-compact :deep(video),
.sidebar-card-compact :deep(.thumbnail-video) {
  height: 72px !important;
  max-height: 72px !important;
  width: 100% !important;
  object-fit: cover !important;
}

.sidebar-card-compact :deep(.study-name-text) {
  color: var(--color-text-secondary) !important;
  font-size: 0.75rem !important;
  line-height: 1rem !important;
  font-weight: 500 !important;
  display: block;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.sidebar-card-compact :deep(.study-length-text),
.sidebar-card-compact :deep(.read-time-text),
.sidebar-card-compact :deep(small) {
  font-size: 0.65rem !important;
  line-height: 0.85rem !important;
  color: var(--color-text-tertiary) !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.sidebar-card-compact :deep(.grid) {
  gap: 0.25rem !important;
}
</style>
