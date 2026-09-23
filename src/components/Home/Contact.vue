<template>
  <main class="min-h-screen">
    <section 
      class="relative min-h-screen px-6 py-12 md:py-16 md:px-16 flex flex-col justify-center md:justify-end max-w-352 mx-auto border-x-0 md:border-x border-slate-300 dark:border-(--color-border) overflow-hidden"
    >
      <div class="relative z-10 flex flex-col max-w-5xl gap-6 pb-12">
        <h1 class="text-hero-display font-display text-5xl md:text-[80px] lg:text-[120px] leading-none text-balance tracking-tight">
          Let's Connect
        </h1>
        
        <p class="text-slate-500 text-lg md:text-xl max-w-2xl">
          Open to Full-time and Contract opportunities. You can contact me via email or connect with me on LinkedIn.
        </p>

        <div v-if="ctaContents && ctaContents.length" class="flex items-center gap-4 pt-2">
          <Button
            v-if="ctaContents[0]"
            :cta="ctaContents[0]"
            :url="ctaContents[0].url"
            :is-external="ctaContents[0].link"
            @click="copyEmail"
          />
          <Transition name="fade">
            <span 
              v-if="isCopied" 
              class="inline-flex items-center justify-center gap-2 px-3 py-1.5 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-body"
            >
              Email copied to clipboard!
              <button 
              type="button"
              @click="dismissToast">
                <XIcon class="w-6 h-6 stroke-current" :stroke-width="1" />
              </button>
            </span>
          </Transition>
  
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { XIcon } from '@lucide/vue'
import Button from '../Layout/Button.vue'

const isCopied = ref(false)
let timer = null

const copyEmail = () => {
  const realEmail = 'torrescathgaile888@gmail.com'

  if (navigator.clipboard) {
    navigator.clipboard.writeText(realEmail).then(() => {
      isCopied.value = true

      if (timer) clearTimeout(timer)

      timer = setTimeout(() => {
        isCopied.value = false
      }, 5000)
    }).catch(err => {
      console.error('Failed to copy email: ', err)
    })
  }
}

const dismissToast = () => {
  if (timer) clearTimeout(timer)
  isCopied.value = false
}

const ctaContents = reactive([
  {
    label: 'Copy Email',
    url: '#',
    link: false,
  },
])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>