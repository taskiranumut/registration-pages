import Vue from "vue";
import VueRouter from "vue-router";
import SignInPage from "../views/SignInPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignInPage",
    component: SignInPage,
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: () => import("@/views/SignUpPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
