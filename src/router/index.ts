import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import store, {GET_USER, MAIN_STORE} from "@/store";
import {loginStateListener} from "@/api";
const ContactList = () => import("@/modules/chat/views/ContactList.view.vue");
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
          name: "ContactList",
        },
      },
      {
        path: "contact",
        name: "ContactList",
        component: ContactList,
      },
      {
        path: "box/:id",
        name: "Chat",
        component: Chat,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  const user = store.getters[`${MAIN_STORE}${GET_USER}`];
  const requireAuth = to.matched.some((x) => x.meta.requiresAuth);
  if (!user && requireAuth) next({name: "LoginPage"});
  else next();
});

export default router;
