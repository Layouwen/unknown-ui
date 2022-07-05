const path = require("path");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
const fs = require("fs");
const fsExtra = require("fs-extra");

// 入口文件
const entryFile = path.resolve(__dirname, "./entry.ts");
// 输出目录
const outputDir = path.resolve(__dirname, "../build");
// 组件目录
const componentsDir = path.resolve(__dirname, "../src");

const baseConfig = defineConfig({
  configFIle: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// 创建时传入包名name
const createPackageJson = (name) => {
  // 根据传入name决定包名、主文件和主模块名称
  const fileStr = `{
    "name": "${name ? name : "unknown-ui"}",
    "version": "0.0.0",
    "main": "${name ? "index.umd.js" : "unknown-ui.umd.js"}",
    "module": "${name ? "index.es.js" : "unknown-ui.es.js"}",
    "author": "梁又文",
    "github": "",
    "description": "这是一个用于学习的 Vue3 组件库",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/layouwen/unknown-ui.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/layouwen/unknown-ui/issues"
    },
  }`;
  // 存在包名称，给单组件生成package.json文件
  if (name) {
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      "utf-8"
    );
  } else {
    fsExtra.outputFile(
      path.resolve(outputDir, "package.json"),
      fileStr,
      "utf-8"
    );
  }
};
// 单组件按需构建
const buildSingle = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: "index",
          fileName: "index",
          formats: ["es", "umd"],
        },
        outDir: path.resolve(outputDir, name),
      },
    })
  );

  createPackageJson(name);
};

//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: "unknown-ui",
          fileName: "unknown-ui",
          formats: ["es", "umd"],
        },
        outDir: outputDir,
      },
    })
  );
};

const buildLib = async () => {
  // 执行全量构建
  await buildAll();

  createPackageJson();
  // 执行单组件按需构建
  fs.readdirSync(componentsDir)
    .filter((name) => {
      // 过滤组件目录：只要目录不要文件，且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach((name) => {
      buildSingle(name);
    });
};

buildLib().then(() => console.log("打包成功"));
