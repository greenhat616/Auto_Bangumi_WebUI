import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('@/pages/Home.vue');

const routes = [
  {
    path: '/',
    component: Home,
    // children: [
      // {
      //   path: 'bangumi',
      //   component: YBangumi
      // },
    // ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;