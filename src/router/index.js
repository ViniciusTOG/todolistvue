import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import About from "../About.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  routes
})

export default router
