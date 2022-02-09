import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from '@/views/Home/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/requestListMain'
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: 'requestListMain',
        component: import(/* webpackChunkName: "RequestListMain" */ "@/views/RequestList/index.vue"),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
