<template>
  <Teleport to="#modal-root">
    <div 
      v-if="show" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      @click.self="$emit('close')"
    >
      <div class="relative flex flex-col w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl">
        
        <div class="flex items-center justify-between px-5 py-4">
          <span class="text-base font-semibold text-slate-200">{{ modal.name }}</span>
          <button 
            type="button"
            class="inline-flex items-center justify-center p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
            @click="$emit('close')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-0 text-center flex items-center justify-center overflow-hidden bg-black/40 cursor-pointer">
          <img
            :src="modal.imageUrl"
            :alt="modal.imageAlt"
            class="w-full h-full max-h-[75vh] object-contain"
          />
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  modal: Object,
  show: Boolean,
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

watch(
  () => props.show,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-backdrop-custom {
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow-y: auto;
  padding: var(--space-lg);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(from var(--black) r g b / 0.5);
  backdrop-filter: blur(8px);
}

.modal-content-custom {
  width: 100%;
  max-width: auto;
  margin: auto;
  /* margin: 0 auto; */
  background-color: var(--container-secondary);
  border-radius: var(--border-radius-4);
  display: flex;
  flex-direction: column;
  /* max-height: calc(100vh - 6rem); */
}

.modal-header {
  padding: 1rem;
}

.modal-image {
  max-width: 100%;
  max-height: 100vh;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
