import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
const ContactList = () => import("@/modules/chat/views/ContactList.view.vue");
const MobileLayout = () => import("@/layouts/Mobile.layout.vue");
const Chat = () => import("@/modules/chat/views/Chat.view.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/chat",
    name: "chat",
    component: MobileLayout,
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

export default router;
