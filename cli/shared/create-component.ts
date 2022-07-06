import { ensureDirSync } from "fs-extra";
import { resolve } from "path";

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
}
