<template>
  <div class="d-flex align-items-center justify-content-center my-4 pt-4">
    <router-link v-if="isHomePage" to="/about">
      <img :src="profile" alt="Profile Image" />
    </router-link>

    <img v-else :src="profile" alt="Profile Image" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import profile from '@/assets/profile.webp'

const route = useRoute()

const isHomePage = computed(() => {
  return route.path !== '/about'
})
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: var(--border-radius-4);
}
</style>
