<template>
  <div class="flex w-full min-h-dvh justify-between">
    <aside class="relative max-lg:hidden">
      <div class="sticky top-8 h-[calc(100vh-3.5rem)] w-full overflow-y-auto p-12">
        <nav>
          <ul class="flex flex-col gap-8 text-sm border-l border-slate-200 dark:border-slate-800">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="`#${item.id}`"
                @click="activeSection = item.id"
                class="block -ml-px border-l-2 pl-4 transition-all duration-150 font-display"
                :class="
                  activeSection === item.id
                    ? 'border-(--brand-color) font-medium text-(--brand-color) dark:text-(--brand-color)'
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

    <main class="relative min-w-0 gap-12">
      
      <div v-if="currentStudy" class="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 py-24" id="overview">
        <Header :heading="currentStudy.name" class="font-display" />
        <div class="flex flex-wrap gap-2 tags-container">
          <div v-for="(item, index) in currentStudy.tag" :key="index">
            <Tag :label="item.name" :category="item.category" />
          </div>
        </div>
        <Introduction :intro="currentStudy.desc" />
        <IntroImage :introImage="currentStudy.introData" />

        <div class="flex flex-row w-full flex-wrap justify-between gap-4 items-center">
          <div class="flex flex-row gap-4 w-full grow">
            <Button
              v-if="!currentStudy.calloutData.isNDA"
              :cta="currentStudy.ctaData"
              :url="currentStudy.url"
              :isExternal="currentStudy.link"
            />
            <Callout 
              v-else 
              :callout="currentStudy.calloutData.ndaMessage" 
              class="w-full" 
            />
          </div>
        </div>

        <div class="py-16" id="role">
          <h2 class="text-subtitle-display font-display pb-4">My Role and Tools</h2>
          <div class="overflow-x-auto w-full border border-slate-200 dark:border-neutral-800">
            <table class="w-full min-w-600px text-left text-sm border-collapse">
              <thead>
                <tr class="bg-slate-50 dark:bg-neutral-900/50 border-b border-slate-200 dark:border-neutral-800 text-slate-500 dark:text-slate-400">
                  <th class="py-3 px-4 font-body">Role</th>
                  <th class="py-3 px-4 font-body">Tasks & Responsibilities</th>
                  <th class="py-3 px-4 font-body">Tools</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-neutral-800">
                <tr 
                  v-for="(item, index) in currentStudy.roleDesc" 
                  :key="index"
                  class="align-top hover:bg-slate-50/50 dark:hover:bg-neutral-900/30 transition-colors"
                >
                  <td class="py-4 px-4 text-(--brand-color) dark:text-(--brand-color) whitespace-nowrap font-display">
                    {{ item.role }}
                  </td>
                  <td class="py-4 px-4 text-slate-600 dark:text-slate-300">
                    <ul class="space-y-1.5">
                      <li 
                        v-for="(taskItem, tIndex) in item.task" 
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
                        v-for="(tool, toolIndex) in item.tools" 
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
        
        <div class="w-full mx-auto">
          <Pagination />
        </div>
      </div>
    </main>

    <aside class="relative max-lg:hidden w-56 shrink-0 border-l border-slate-300 dark:border-neutral-800">
      <div class="sticky top-12 p-4 flex flex-col gap-4">
        <p class="text-slate-400 dark:text-slate-200 font-display">
          Up Next
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { studies } from '@/data/studies'
import { computed } from 'vue'

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

const route = useRoute()
const studySlug = route.params.slug

const currentStudy = studies.find((s) => s.slug === studySlug)

const otherCaseStudies = computed(() => {
  if (!currentStudy) return studies
  return studies.filter((study) => study.slug !== currentStudy.slug)
})

// console.log(route.params)
// console.log(currentStudy.roleData.theme)

function openModal(img) {
  activeItem.value = {
    imageUrl: img.contentUrl,
    imageAlt: img.contentAlt,
    name: img.contentAlt,
  }
}

const activeSection = ref('overview')
const isManualScrolling = ref(false)

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'role', label: 'Role & tools' },
  { id: 'problem', label: 'The Problem' },
  { id: 'solution', label: 'The Solution' },
  { id: 'reflections', label: 'Reflections' },
]

const scrollToSection = (id) => {
  activeSection.value = id
  isManualScrolling.value = true

  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  setTimeout(() => {
    isManualScrolling.value = false
  }, 800)
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (isManualScrolling.value) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { 
      rootMargin: '-10% 0px -70% 0px' 
    }
  )

  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
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
