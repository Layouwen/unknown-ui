import * as inquirer from 'inquirer';
import { red } from 'kolorist';

const CREATE_TYPES = ['component', 'lib-entry'];

export async function onCreate (args = {type: ''}) {
  let {type} = args;
  if (!type) {
    const result = await inquirer.prompt({
      // 保存的字段名
      name: 'type',
      type: 'list',
      message: '（必填）请选择创建类型',
      choices: CREATE_TYPES,
      default: 0,
    });
    type = result.type;
  }

  if (!CREATE_TYPES.includes(type)) {
    console.log(red(`不支持的类型：${type}`));
    return onCreate();
  }

  console.log(type);
}
