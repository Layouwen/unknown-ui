import * as inquirer from "inquirer";
import { red } from "kolorist";
import createComponent from "../shared/create-component";

const CREATE_TYPES = ["component", "lib-entry"];
const COMPONENT_CATEGORY = ["通用", "导航", "反馈", "数据展示", "数据录入"];

export async function onCreate(args = { type: "" }) {
  let { type } = args;
  if (!type) {
    const result = await inquirer.prompt({
      // 保存的字段名
      name: "type",
      type: "list",
      message: "（必填）请选择创建类型",
      choices: CREATE_TYPES,
      default: 0,
    });
    type = result.type;
  }

  if (!CREATE_TYPES.includes(type)) {
    console.log(red(`不支持的类型：${type}`));
    return onCreate();
  }

  try {
    switch (type) {
      case "component":
        const info = await inquirer.prompt([
          {
            name: "name",
            type: "input",
            message: "（必填）请输入组件名称，用作文件和目录名。如：button",
            validate: (value: string) => {
              if (value.trim() === "") {
                return "组件名称不能为空";
              }
              return true;
            },
          },
          {
            name: "title",
            type: "input",
            message: "（必填）请输入组件中文名称，用作文档名显示。如：按钮",
            validate: (value: string) => {
              if (value.trim() === "") {
                return "组件名称不能为空";
              }
              return true;
            },
          },
          {
            name: "category",
            type: "list",
            message: "（必填）请输入组件分类名称，用作分类显示",
            choices: COMPONENT_CATEGORY,
          },
        ]);
        createComponent(info);
        break;
      default:
        break;
    }
  } catch (e) {
    console.log(e);
  }
}
