import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import CarView from "@/views/CarView.vue";

import { createRouter, createWebHistory } from "vue-router";

import ContactView from "@/views/ContactView.vue";
const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/cars/:id",
    name: "carView",
    component: CarView,
    children: [
      {
        path: "contact",
        component: ContactView,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
