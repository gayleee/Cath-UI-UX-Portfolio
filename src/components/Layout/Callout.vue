<template>
  <div class="grow mt-2">
    <div class="w-full">
      <div 
        class="flex items-start gap-2 border p-2 text-xs sm:p-4 sm:text-sm wrap-break-word
               text-[#FF3300] border-[#FF3300] bg-[#FF3300]/10 
               dark:text-[#FF6B3B] dark:border-[#FF6B3B] dark:bg-[#FF6B3B]/10"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="1" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="lucide lucide-circle-alert shrink-0"
        >
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" x2="12" y1="8" y2="12"/>
          <line x1="12" x2="12.01" y1="16" y2="16"/>
        </svg>
        <span class="font-display leading-relaxed">{{ callout }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  callout: String,
})
</script>

<!-- <style scoped>
.callout-container {
  width: 100%;
}

.callout {
  color: var(--brand-color);
  background-color: rgba(175, 87, 10, 0.1);
  border: 1px solid var(--brand-color);
  border-radius: var(--border-radius-4);
  padding: 1rem 1.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@media (max-width: 414px) {
  .callout {
    padding: 1rem;
    font-size: 0.85rem;
  }
}
</style> -->
