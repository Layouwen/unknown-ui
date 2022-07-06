import { ensureDirSync } from "fs-extra";
import { lightBlue, lightGreen } from "kolorist";
import { resolve } from "path";
import { writeFileSync, WriteFileOptions } from "fs";
import getIndexTemplate from "../template";
import getCoreTemplate from "../template/core";
import getStyleTemplate from "../template/style";
import getTestTemplate from "../template/test";
import getTypesTemplate from "../template/types";

const WRITE_FILE_OPTION = { encoding: "utf-8" } as WriteFileOptions;

export interface ComponentMeta {
  name: string;
  title: string;
  category: string;
}

export default function createComponent(meta: ComponentMeta) {
  const { name } = meta;

  const componentDir = resolve("../src", name);
  const compSrcDir = resolve(componentDir, "src");
  const compStyleDir = resolve(componentDir, "style");
  const compTestDir = resolve(componentDir, "test");

  ensureDirSync(compSrcDir);
  ensureDirSync(compStyleDir);
  ensureDirSync(compTestDir);

  const coreFilePath = resolve(compSrcDir, name + ".tsx");
  writeFileSync(coreFilePath, getCoreTemplate(name), WRITE_FILE_OPTION);

  const typesFilePath = resolve(compSrcDir, name + "-type.ts");
  writeFileSync(typesFilePath, getTypesTemplate(name), WRITE_FILE_OPTION);

  const styleFilePath = resolve(compStyleDir, name + ".scss");
  writeFileSync(styleFilePath, getStyleTemplate(name), WRITE_FILE_OPTION);

  const testFilePath = resolve(compTestDir, name + ".test.ts");
  writeFileSync(testFilePath, getTestTemplate(name), WRITE_FILE_OPTION);

  const indexFilePath = resolve(componentDir, "index.ts");
  writeFileSync(indexFilePath, getIndexTemplate(name), WRITE_FILE_OPTION);

  console.log(lightGreen(`✔️ 创建组件 ${name} 成功！`));
  console.log(lightBlue(`✔️ 组件目录为 ${componentDir}`));
}
