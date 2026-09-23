<template>
  <div class="inline-flex">
    <a
      v-if="url && isExternal"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      :class="buttonClasses"
    >
      <slot>{{ label || cta?.label }}</slot>
    </a>

    <router-link
      v-else-if="targetUrl"
      :to="targetUrl"
      :class="buttonClasses"
    >
      <slot>{{ label || cta?.label || (toHome ? 'Back to Home' : '') }}</slot>
    </router-link>

    <button
      v-else
      type="button"
      :class="buttonClasses"
      @click="$emit('action')"
    >
      <slot>{{ label || cta?.label }}</slot>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  label: { type: String, default: '' },
  cta: { type: Object, default: null },
  url: { type: String, default: null },
  isExternal: { type: Boolean, default: false },
  toHome: { type: Boolean, default: false },
})

defineEmits(['action'])

const targetUrl = computed(() => {
  if (props.toHome) return '/'
  return props.url
})

const variantStyles = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const buttonClasses = computed(() => {
  return [
    'inline-flex items-center justify-center font-medium transition-all duration-150 border focus:outline-none cursor-pointer',
    variantStyles[props.variant] || variantStyles.primary,
    sizeStyles[props.size] || sizeStyles.md,
  ]
})
</script>

<style scoped>
.btn-primary{
  display: inline-block;
  background-color: var(--color-button-bg);
  border: none;
  color: var(--color-slate-50);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.btn-secondary{
  display: inline-block;
  text-decoration: none;
  border: 1px solid var(--color-button-bg);
  color: var(--color-button-bg);
  background-color: transparent;
  transition: all 0.3s ease-in-out;
}

.btn-outline{
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.btn-ghost{
  border: none;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.cta:active,
.cta.router-link-active:active {
  transform: translateY(0);
  filter: brightness(0.9);
}
</style>
