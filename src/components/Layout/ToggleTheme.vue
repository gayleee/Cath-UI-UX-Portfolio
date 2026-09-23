<template>
  <label for="themeToggle" class="inline-flex items-center gap-2 cursor-pointer select-none">
    <span class="font-body" style="font-size: 14px;">
      {{ isDark ? 'Dark' : 'Light' }}
    </span>
    <div 
      class="relative h-5.4 w-10 border border-neutral-200 bg-neutral-200 p-0.5 transition-colors duration-300 ease-in-out dark:border-neutral-700 dark:bg-neutral-800" style="border-radius: var(--border-radius-2);"
    >
      <input
        id="themeToggle"
        type="checkbox"
        v-model="isDark"
        class="sr-only"
      />
      <div 
        class="flex h-4 w-4 transform items-center justify-center bg-white text-black shadow-xs transition-transform duration-300 ease-in-out dark:bg-black dark:text-white"
        :class="isDark ? 'translate-x-4' : 'translate-x-0'"
      >
        <Moon v-if="isDark" size="10px" />
        <Sun v-else size="10px" />
      </div>
    </div>
  </label>
</template>

<script setup>
import { useTheme } from '@/Composable/theme'
import { Sun } from '@lucide/vue';
import { Moon } from '@lucide/vue';
const { isDark, toggleTheme } = useTheme()
</script>