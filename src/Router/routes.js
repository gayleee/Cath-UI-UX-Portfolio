import HomePage from '@/components/Home/HomePage.vue'
import About from '@/components/Home/About.vue'
import Contact from '@/components/Home/Contact.vue'
import CaseStudy from '@/components/CaseStudy/CaseStudy.vue'
import NotFound from '@/components/Layout/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NoAccess from '@/components/Layout/NoAccess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/index.html', redirect: '/' },
    { path: '/about', component: About, name: 'about' },
    { path: '/contact', component: Contact, name: 'contact' },
    // { path: '/casestudy/:caseStudyId', name: 'CaseStudy', component: CaseStudy },
    { path: '/casestudy/:slug', name: 'CaseStudy', component: CaseStudy },
    { path: '/noaccess', component: NoAccess, name: 'noaccess' },
    { path: '/:catchAll(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
