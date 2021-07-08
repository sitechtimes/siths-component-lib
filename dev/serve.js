import Vue from "vue";
import Dev from "./serve.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCalendar);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import SithsComponentLib from "@/entry.esm";
Vue.use(SithsComponentLib);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount("#app");
