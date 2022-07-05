import type { App } from "vue";
import ButtonPlugin, { Button } from "../src/button";

const installs = [ButtonPlugin];

export { Button };

export default {
  install(app: App) {
    installs.forEach((c) => app.use(c));
  },
};
