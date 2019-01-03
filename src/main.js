// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Pets from "./views/Pets";
import Favorites from "./views/Favorites";
import "vuetify/dist/vuetify.min.css";

const routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets },
  { path: "/favorites", component: Favorites }
];

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false;
const router = new VueRouter({ routes });
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
