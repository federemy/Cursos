import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";

import msToMm from "@/filters/ms-to-mm";
import blur from "@/directives/blur";

import routes from "@/routes";
import store from "@/store";
import i18n from "@/i18n";

import EventBus from "@/plugins/event-bus";

Vue.use(VueRouter);
Vue.use(EventBus);
Vue.use(msToMm);
Vue.use(blur);

const router = new VueRouter({ routes, mode: "history" }); // necesitamos una instancia global y pasarle las rutas para generar el routeo por parametro

new Vue({
  el: "#app",
  render: h => h(App),
  router, // a la instancia de vue le pasamos el router con las rutas
  store,
  i18n
});
