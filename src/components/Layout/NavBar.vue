<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b">
    <div class="max-w-352 mx-auto w-full flex items-center justify-between py-3 px-6 md:px-12">
      <router-link class="flex items-center justify-center" to="/">
        <img src="/src/assets/icon.svg" alt="icon" class="mr-2 w-6 h-6 brightness-0 dark:brightness-100 transition-all" />
        <span class="font-body">Cath_UX/UI</span>
      </router-link>

    <nav class="hidden md:flex items-center gap-6">
      <router-link class="nav-link font-body" to="/">Work</router-link>
      <router-link class="nav-link font-body" to="/about">About</router-link>
      <router-link class="nav-link font-body" to="/contact">Contact</router-link>
      <ToggleTheme />
    </nav>

    <button 
      @click="isOpen = !isOpen"
      type="button" 
      class="md:hidden p-2 text-slate-500 hover:text-white focus:outline-none"
      aria-label="Toggle navigation"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16"/>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <Teleport to="body">
      <div 
        v-if="isOpen" 
        @click="isOpen = false" 
        class="fixed inset-0 z-40"
      ></div>

      <div 
        class="fixed top-0 right-0 border-l border-(--color-border) bottom-0 w-64 z-50 p-4 flex flex-col justify-between transform transition-all duration-300 md:hidden sliding-panel"
        :class="isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 invisible'"
      >
        <div class="flex items-center justify-between">
          <span class="font-display">Menu</span>
          <button @click="isOpen = false" class="text-slate-500 hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <ul class="flex flex-col gap-4 my-auto">
          <li>
            <router-link class="nav-link font-body" @click="isOpen = false" to="/">Work</router-link>
          </li>
          <li>
            <router-link class="nav-link font-body" @click="isOpen = false" to="/about">About</router-link>
          </li>
          <li>
            <router-link class="nav-link font-body" @click="isOpen = false" to="/contact">Contact</router-link>
          </li>
        </ul>

        <div class="pt-4 border-t flex items-start justify-between border-(--color-border)">
          <span class="font-body">Theme</span>
          <ToggleTheme />
        </div>
      </div>
    </Teleport>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import ToggleTheme from './ToggleTheme.vue';

const isOpen = ref(false)
</script>

<style scoped>
header{
  background-color: var(--color-container-bg);
  border-color: var(--color-border);
}

.sliding-panel{
  background-color: var(--color-container-bg);
}

.nav-link{
  font-size: 14px;
}
</style>
