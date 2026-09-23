<template>
  <div class="mx-auto max-w-5xl">
    <div class="flex flex-row items-center justify-between">
      <button
        @click="prevStudy"
        :disabled="currentIndex === 0"
        class="flex items-center gap-2 bg-transparent transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        :class="currentIndex === 0 ? 'text-(--text-muted)' : 'text-(--text-primary)'"
      >
        <ChevronLeft class="w-6 h-6 stroke-current" :stroke-width="1" />
        <span class="font-body font-bold">Previous</span>
      </button>

      <span class="font-body">
        <strong class="text-(--brand-color)">{{ currentIndex + 1 }}</strong> / {{ studies.length }}
      </span>

      <button
        @click="nextStudy"
        :disabled="currentIndex === studies.length - 1"
        class="flex items-center gap-2 bg-transparent transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        :class="currentIndex === studies.length - 1 ? 'text-(--text-muted)' : 'text-(--brand-color)'"
      >
        <span class="font-body font-bold">Next</span>
        <ChevronRight class="w-6 h-6 stroke-current" :stroke-width="1" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { studies } from '@/data/studies'
import { ChevronLeft, ChevronRight } from '@lucide/vue'

const route = useRoute()
const router = useRouter()

const currentIndex = ref(0)

const setIndexFromRoute = () => {
  const index = studies.findIndex((s) => s.slug === route.params.slug)
  if (index !== -1) {
    currentIndex.value = index
  }
}

onMounted(() => {
  setIndexFromRoute()
})

watch(
  () => route.params.slug,
  () => {
    setIndexFromRoute()
  },
)

const currentStudy = computed(() => studies[currentIndex.value])

const nextStudy = () => {
  if (currentIndex.value < studies.length - 1) {
    const nextSlug = studies[currentIndex.value + 1].slug
    router.push({ name: 'CaseStudy', params: { slug: nextSlug } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStudy = () => {
  if (currentIndex.value > 0) {
    const prevSlug = studies[currentIndex.value - 1].slug
    router.push({ name: 'CaseStudy', params: { slug: prevSlug } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
