import DefaultTheme from "vitepress/theme";
import "vitepress-theme-demoblock/theme/styles/index.css";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import { Tree } from "../../../src/tree";
import type { App } from "vue";

export default {
  ...DefaultTheme,
  // 扩展实例
  enhanceApp({ app }: { app: App }) {
    // 注册 DemoBlock 组件
    app.component("DemoBlock", DemoBlock);
    app.component("Demo", Demo);
    // 注册组件
    app.component("STree", Tree);
  },
};
