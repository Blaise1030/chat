import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
const ContactList = () => import("@/modules/chat/views/ContactList.view.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Contact",
    component: ContactList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
