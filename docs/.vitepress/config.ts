const sidebar = {
  "/": [
    { text: "快速开始", link: "/", items: [] },
    {
      text: "通用",
      items: [
        { text: "Button 按钮", link: "/components/button/index.md", items: [] },
      ],
    },
    { text: "导航", items: [] },
    { text: "反馈", items: [] },
    { text: "数据录入", items: [] },
    {
      text: "数据展示",
      items: [
        { text: "Tree 树", link: "/components/tree/index.md", items: [] },
      ],
    },
    { text: "布局", items: [] },
  ],
};

const config = {
  base: '/unknown-ui/',
  themeConfig: {
    sidebar,
  },
  markdown: {
    config(md: any) {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin, {
        scriptReplaces: [
          {
            searchValue: /import ({.*}) from "vue"/g,
            replaceValue: (s: string, s1: string) => `const ${s1} = Vue`,
          },
        ],
      });
    },
  },
};

export default config;
