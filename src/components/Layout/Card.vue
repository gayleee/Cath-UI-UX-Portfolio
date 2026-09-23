<template>
  <div class="icon-card-wrapper d-flex align-items-stretch">
    <div
      class="icon-box d-flex align-items-center justify-content-center"
      :class="{ 'card-text-color': card.award }"
    >
      <trophyfillIcon v-if="card.award" />
      <bookfillIcon v-else-if="card.workshop" />
      <envelopefillIcon v-else-if="card.contact" />
      <globeIcon v-else-if="card.language" />
      <lightbulbfillIcon v-else />
    </div>

    <div class="content-card">
      <span class="text-body-lg">{{ card.heading }}</span>
      <p v-if="card.desc" class="text-body mb-0">{{ card.desc }}</p>
    </div>
  </div>
</template>

<script setup>
// import lightbulbfillIcon from '../icons/lightbulbfillIcon.vue'
// import trophyfillIcon from '../icons/trophyfillIcon.vue'
// import bookfillIcon from '../icons/bookfillIcon.vue'
// import envelopefillIcon from '../icons/envelopefillIcon.vue'
// import globeIcon from '../icons/globeIcon.vue'

const props = defineProps({
  card: Object,
})
</script>

<style scoped>
.icon-box {
  flex: 0 0 5rem;
  width: 5rem;
  color: var(--white);
  padding-right: 8px;
  background-color: var(--container-primary);
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.3s ease;
  transform: translateX(8px);
}

.content-card {
  color: var(--text-secondary);
  background-color: var(--container-secondary);
  border: 1px solid var(--outline-tertiary);
  backdrop-filter: var(--blur-subtle);
  -webkit-backdrop-filter: var(--blur-subtle);
  border-radius: 0 var(--border-radius-4) var(--border-radius-4) 0;
  border-left: none;
  padding: 24px;
  height: auto;
}

.icon-card-wrapper:hover .icon-box {
  transform: translateX(0);
}

@keyframes rightToLeftFade {
  0% {
    opacity: 0;
    transform: translate(20px, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0, -50%);
  }
}
</style>
