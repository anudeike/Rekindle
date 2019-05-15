import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import newStory from "./views/newStory.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/new",
      name: "newStory",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: newStory
    }
  ]
});
