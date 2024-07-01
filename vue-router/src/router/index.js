import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import CarView from "@/views/CarView.vue";
import NotFoundView from "@/views/ContactView.vue";
import ContactView from "@/views/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
