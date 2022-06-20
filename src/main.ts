import { createApp } from "vue";
import App from "./App.vue";
import Button from "./button";
import "./index.scss";

createApp(App).use(Button).mount("#app");
