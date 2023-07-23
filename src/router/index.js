import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AiComponent from "../views/AiComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/:pathMatch(.*)", name: "NotFound", component: Home },
  {
    path: "/ai",
    name: "Ai",
    component: AiComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
