import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import BootstrapVue from 'bootstrap-vue';
import VueResource from "vue-resource";
import 'vuetify/dist/vuetify.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Firebase from "firebase";

Vue.config.productionTip = false;

let app = '';
//firebase config
// Your web app's Firebase configuration - in production make sure to get rid of this and put
//in a process file or some security file
var firebaseConfig = {
  apiKey: "AIzaSyACyXCdRKkIy3EhFZnzWfpBDSaI87vFxTI",
  authDomain: "rekindle-f3fdc.firebaseapp.com",
  databaseURL: "https://rekindle-f3fdc.firebaseio.com",
  projectId: "rekindle-f3fdc",
  storageBucket: "rekindle-f3fdc.appspot.com",
  messagingSenderId: "951035308176",
  appId: "1:951035308176:web:dbd0dd4ece068c1b"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

//make sure I use all my libraries
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueResource);
Vue.use(Firebase);

//on auth state changed
Firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});


//
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");
