const path = require("path");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");

// 入口文件
const entryFile = path.resolve(__dirname, "./entry.ts");
// 输出目录
const outputDir = path.resolve(__dirname, "../build");

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

//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: "sheep-ui",
          fileName: "sheep-ui",
          formats: ["es", "umd"],
        },
        outDir: outputDir,
      },
    })
  );
};

const buildLib = async () => {
  await buildAll();
};

buildLib();
