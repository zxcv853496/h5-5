import Vue from 'vue'
import App from './App.vue'
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
Vue.use(AOS);

AOS.init()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
