import { ref, watch } from 'vue'

const initialTheme = () => {
  const saved = localStorage.getItem('isSavedDark')
  return saved ? JSON.parse(saved) : true
}

export const isDark = ref(initialTheme())

const applyTheme = (val) => {
  if (val) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
}

applyTheme(isDark.value)

watch(isDark, (val) => {
  localStorage.setItem('isSavedDark', JSON.stringify(val))
  applyTheme(val)
})

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
}