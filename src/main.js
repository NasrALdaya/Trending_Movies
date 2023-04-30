import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Paginate from "vuejs-paginate";

/* add all icons to the library */
library.add(fas, fab, far);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("paginate", Paginate)
  .use(store)
  .use(router)
  .mount("#app");
