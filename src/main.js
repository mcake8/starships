import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import router from './router'

Vue.config.productionTip = false;

const axsState = axios.create({
  baseURL: "https://swapi.co/api/",
  timeout: 1000 * 30
});

Vue.prototype.$axios = axsState;
Vue.use(axsState);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
