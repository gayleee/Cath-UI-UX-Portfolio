<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      type="button"
      class="btn totop p-2"
      aria-label="Scroll to top"
    >
      <ArrowUp :size="16" />
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from '@lucide/vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const isVisible = ref(false)

const scrollToTop = () => {
  gsap.to(window, {
    duration: 0.8,
    scrollTo: { y: 0 },
    ease: 'power3.out'
  })
}

const handleScroll = () => {
  isVisible.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.btn {
  color: var(--color-white);
  border-radius: var(--border-radius-2);
  background-color: var(--brand-color);
  border: none;
  position: fixed;
  bottom: 56px;
  right: 16px;
  z-index: 49;
  cursor: pointer;
}

.btn:hover {
  background-color: var(--brand-color);
}

.btn:focus,
.btn:active:focus {
  box-shadow: none;
  outline: 0;
}

.btn:active,
.btn.active {
  background-color: var(--color-black-500);
  color: var(--white);
}

.btn:focus {
  box-shadow: 0 0 0 0.25rem color-mix(in srgb, var(--color-blue-900), transparent 50%);
}
</style>