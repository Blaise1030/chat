import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import store, {GET_USER} from "@/store";
const MobileLayout = () => import("@/layouts/Mobile.layout.vue");
const Chat = () => import("@/modules/chat/views/Chat.view.vue");
const LoginPage = () => import("@/views/Login.view.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: MobileLayout,
    children: [
      {
        path: "",
        name: "LoginPage",
        component: LoginPage,
      },
    ],
  },
  {
    path: "/chat",
    name: "Chat",
    component: MobileLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        redirect: {
          name: "Chat",
        },
      },
      {
        path: "box",
        name: "ChatBox",
        component: Chat,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _, next) => {
  const requireAuth = to.matched.some((x) => x.meta.requiresAuth);
  const user = store.getters[GET_USER];
  if (!user && requireAuth) next({name: "LoginPage"});
  else next();
});

export default router;
