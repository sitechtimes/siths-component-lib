import Vue from "vue";
import Dev from "./serve.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import SithsComponentLib from "@/entry.esm";
Vue.use(SithsComponentLib);

library.add(faUser);
library.add(faClock);
library.add(faInstagramSquare);
library.add(faTwitter);
library.add(faFacebook);
library.add(faShare);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(Dev),
}).$mount("#app");

Vue.config.productionTip = false;
