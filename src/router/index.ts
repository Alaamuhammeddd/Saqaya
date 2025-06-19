import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Products from "@/components/Products.vue";
import Home from "@/components/Home.vue";
import Contact from "@/components/Contact.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
