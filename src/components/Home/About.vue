<template>
  <main class="min-h-screen">
    <section  
      class="relative min-h-screen px-6 py-16 md:px-16 flex flex-col justify-end max-w-352 mx-auto border-x-0 md:border-x border-slate-300 dark:border-(--color-border)"
    >
      <div class="flex flex-col max-w-5xl gap-6 pb-12">
        <h1 class="text-hero-display font-display text-5xl md:text-[80px] lg:text-[120px] leading-none text-balance tracking-tight">
          About Me.
        </h1>
        <p class="text-slate-500 md:text-xl max-w-2xl">
          Hello! I’m Cath. I am a recent graduate from the <span>Polytechnic University of the Philippines</span> with a bachelor's degree in information technology.<br><br>My UI/UX journey formally began right in this university, when my first web project turned a spark of curiosity—asking 'why' things are built the way they are—into a genuine passion. Since then, I've explored different industries, taught myself to build design systems, and continually challenged myself to solve real-world problems for varied users and contexts.
          <!-- <br /><br />Today, I am actively seeking a
          role where I can contribute to building the foundation and recognition of a product.
          If you're looking for a designer, drop me a message! -->
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { activitiesData } from '@/data/activities'
import { ref } from 'vue'

const activities = ref(activitiesData)
</script>

<style scoped>
span{
  color: var(--brand-color);
}
</style>