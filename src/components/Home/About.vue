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
          Hello! I’m Cath. I am a recent graduate from the <span>Polytechnic University of the Philippines</span> with a bachelor's degree in information technology.<br><br>My UI/UX journey formally began right in this university, when my first web project turned a spark of curiosity into a genuine passion to know the 'whys' behind design decisions. Since then, I've explored different industries, taught myself to build design systems, and continually challenged myself to solve real-world problems for varied users and contexts.
          <!-- <br /><br />Today, I am actively seeking a
          role where I can contribute to building the foundation and recognition of a product.
          If you're looking for a designer, drop me a message! -->
        </p>
      </div>
    </section>
    
    <!-- <section id="casestudy-section" class="py-20 max-w-352 mx-auto border-x-0 md:border-x border-slate-200 dark:border-(--color-border)">
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
    </section> -->
  </main>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
span{
  color: var(--brand-color);
}
</style>