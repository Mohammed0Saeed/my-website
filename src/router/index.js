import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillView from "../views/SkillView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/skills",
    name: "skills view",
    component: SkillView,
  },
  {
    path: "/portfolio",
    name: "portfolio view",
    component: PortfolioView,
  },
  {
    path: "/contact",
    name: "contactView",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
