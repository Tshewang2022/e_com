import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      // this are the components that is routed inside the defaultlayout using the router-link
      {
        path: "/",
        name: "Home",
        component: Home,
      },

      // mapping with the id
      {
        path: "/letter/:letter",
        name: "byLetters",
        component: MealList,
      },

      // meals by name
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },

      // meals by ingredients
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },

      // meals by letter
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
    ],
  },

  //routes for the guest layouts
  {
    path: "/guest",
    name: "GuestLayout",
    component: GuestLayout,
    children: [
      // this component should be rendered inside the guestLayout, then only it will work. both logically and practically
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
