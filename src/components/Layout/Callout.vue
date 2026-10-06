<template>
  <div v-if="displayMessage" class="grow mt-2">
    <div class="w-full">
      <div 
        class="flex items-start gap-2 border p-2 text-xs sm:p-4 sm:text-sm wrap-break-word
               text-[#FF3300] border-[#FF3300] bg-[#FF3300]/10 
               dark:text-[#FF6B3B] dark:border-[#FF6B3B] dark:bg-[#FF6B3B]/10"
      >
        <CircleAlert class="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
        <span class="font-display leading-relaxed">{{ displayMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { CircleAlert } from '@lucide/vue'

const props = defineProps({
  callout: {
    type: [Object, String],
    default: null,
  },
})

const DEFAULT_NDA_MESSAGE = 'This project is under a Non-Disclosure Agreement (NDA). Sensitive details have been modified or omitted.'

const displayMessage = computed(() => {
  if (!props.callout) return ''

  if (typeof props.callout === 'string') {
    return props.callout
  }

  if (props.callout.isNDA) {
    return props.callout.ndaMessage || DEFAULT_NDA_MESSAGE
  }

  return props.callout.ndaMessage || ''
})
</script>