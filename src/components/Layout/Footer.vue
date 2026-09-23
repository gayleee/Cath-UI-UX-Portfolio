<template>
  <footer class="flex flex-col sm:flex-row justify-between items-center border-t w-full gap-4 sm:gap-0 py-6 sm:py-4 px-4 sm:px-8">
    <div class="flex flex-row gap-4">
      <div class="flex flex-row gap-4">
        <a
        href="https://www.linkedin.com/in/catherine-torres-60215a34a"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        aria-label="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
      </a>
      <a
        href="https://x.com/cath_uiux"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        aria-label="X"
      >
        <svg role="img" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>
      </a>
      <a
        href="https://bsky.app/profile/cath-uiux.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        aria-label="BlueSky"
      >
        <svg role="img" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"/></svg>
      </a>
      </div>
    </div>
    <small class="font-body text-slate-400 dark:text-slate-200" style="font-size: var(--font-size-xs);">&copy; 2026 Cath_UI/UX Portfolio. All rights reserved.</small>
  </footer>
</template>

<script setup>
const props = defineProps({
  type: Object,
  required: true,
})
</script>

<style scoped>
.border-t{
  color: var(--color-border);
}
svg {
  color: var(--color-gray-400);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
svg:hover {
  color: var(--brand-color);
  transform: scale(1.2) translateY(-5px);
}
</style>
