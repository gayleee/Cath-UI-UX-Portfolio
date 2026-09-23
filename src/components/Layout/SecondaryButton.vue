<template>
  <router-link to="/" class="btn">Return to Home</router-link>
</template>

<style scoped>
.btn {
  display: inline-block;
  align-self: center;
  padding: 8px 16px;
  font-family: var(--font-inter);
  font-size: var(--font-size-s);
  font-weight: var(--weight-regular);
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  background-color: var(--color-button-bg);
  border-radius: var(--border-radius-2);
  border: 1px solid var(--outline-secondary);
}
.btn:hover,
.btn.router-link-active:hover,
.btn.router-link-exact-active:hover {
  color: var(--secondary-text);
  background-color: var(--color-button-bg);
  border: 1px solid var(--outline-secondary);
  transform: translateY(-3px);
}

.btn:active,
.btn.router-link-active:active {
  background-color: var(--container-secondary);
  border: 1px solid var(--outline-secondary);
  transform: translateY(0);
  filter: brightness(0.9);
}
</style>
