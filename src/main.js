import Vue from "vue";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";

import App from "./App.vue";

Vue.config.productionTip = false;






AOS.init();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
