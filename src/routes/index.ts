import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import App from '@/App.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App',
    component: App,
    redirect: '/editor',
    children: [
      {
        path: '/editor',
        name: 'editor',
        component: () => import(/* webpackChunkName: "editor" */ '@/views/Editor.vue')
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

router.beforeEach((from, to, next) => {
  NProgress.start();
  setTimeout(() => {
    next();
    NProgress.done();
  }, Math.random() * 300);
});

export default router;
