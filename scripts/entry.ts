import type { App } from "vue";
import ButtonPlugin, { Button } from "../src/button";
import TreePlugin, { Tree } from "../src/tree";

const installs = [ButtonPlugin, TreePlugin];

export { Button, Tree };

export default {
  install(app: App) {
    installs.forEach((c) => app.use(c));
  },
};
