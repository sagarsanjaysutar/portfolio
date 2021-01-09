import Vue from "vue";
import "jquery";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import AOS from "aos";
import App from "./App.vue";
import VueAnimate from "vue-animate-scroll";

Vue.config.productionTip = false;
Vue.use(VueAnimate);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.mixin({
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
  },
});

AOS.init();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
