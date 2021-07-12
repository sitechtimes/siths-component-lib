import Vue from "vue";
import Dev from "./serve.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCalendar);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

import moment from "moment";

Vue.prototype.moment = moment;

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
