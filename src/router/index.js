import { createRouter, createWebHistory } from 'vue-router'
import Default from "@/pages/Default.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default
    },
  ]
})

export default router
