import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import newStory from "./components/newStory.vue";
import Login from "./components/login";
import signup from "./components/signup";
import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      //redirect every path that does not exist to login
      path: "*",
      redirect: '/login'
    },
    {
      path: "/",
      redirect: '/login'
    },
    {
      path: "/new",
      name: "newStory",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: newStory
    },
    {
      path: "/login",
      name: 'Login',
      component: Login
    },
    {
      path: "/signup",
      name: 'signup',
      component: signup
    },
    {
      //only access the home path if require auth
      path: "/home",
      name: 'Home',
      component: Home,
      meta:{
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  //this gets the current user
  const currentUser = firebase.auth().currentUser;

  //this gets the
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else if(!requiresAuth && currentUser) next('home');
  else next();
});

//must include for compilation
export default router;
