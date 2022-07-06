import { ensureDirSync } from "fs-extra";
import { lightBlue, lightGreen } from "kolorist";
import { resolve } from "path";
import { writeFileSync } from "fs";
import getCoreTemplate from "../template/core";

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

  const coreFilePath = resolve(compSrcDir, name) + ".tsx";
  writeFileSync(coreFilePath, getCoreTemplate(name));

  console.log(lightGreen(`✔️ 创建组件 ${name} 成功！`));
  console.log(lightBlue(`✔️ 组件目录为 ${componentDir}`));
}
