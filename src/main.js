import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import BootstrapVue from 'bootstrap-vue'
import VueResource from "vue-resource"
import 'vuetify/dist/vuetify.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueResource);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
