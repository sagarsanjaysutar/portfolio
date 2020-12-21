import Vue from "vue";
import "jquery";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import AOS from "aos";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


AOS.init();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
