import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change the page title tag when push to page
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Trending Movies`;
  next();
});

export default router;
