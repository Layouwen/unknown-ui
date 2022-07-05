import { createApp } from "vue";
import App from "./App.vue";
// import Button from "./button";
import "./index.scss";

import UnknownUI from "../build/sheep-ui.es.js";

createApp(App)
  // .use(Button)
  .use(UnknownUI)
  .mount("#app");
