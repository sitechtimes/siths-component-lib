import Vue from "vue";
import Dev from "./serve.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faCalendar);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

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
// library.add(faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import { createDateFilter } from "vue-date-fns";
Vue.filter("date", createDateFilter("LLLL do, yyyy"));

new Vue({
  render: (h) => h(Dev),
}).$mount("#app");
