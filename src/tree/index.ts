import { App } from "vue";
import Tree from "./src/tree";

export { Tree };

export default {
  install(app: App) {
    app.component(Tree.name, Tree);
  },
};
