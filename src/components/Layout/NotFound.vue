<template>
  <div class="wrapper d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-md-8 col-lg-6 text-center d-flex flex-column align-items-center">
          <h1 class="mb-4">404: Page Not Found</h1>
          <p class="mb-4">
            This link is a bit lost in the sauce! We couldn't find the page you requested.
          </p>
        </div>
        <SecondaryButton />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '@/Composable/theme'

import SecondaryButton from './SecondaryButton.vue'

const { isDark } = useTheme()
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: var(--bg-main);
}
</style>
