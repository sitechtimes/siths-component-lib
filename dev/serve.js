import Vue from "vue";
import Dev from "./serve.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import SithsComponentLib from "@/entry.esm";
Vue.use(SithsComponentLib);

library.add(faUser);
library.add(faClock);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(Dev),
}).$mount("#app");

Vue.config.productionTip = false;
