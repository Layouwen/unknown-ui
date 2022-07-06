import { upperFirst } from "./uitls";

export default function getIndexTemplate(name: string) {
  const upperName = upperFirst(name);

  return `\
import { App } from "vue";
import ${upperName} from "./src/${name}";

export { ${upperName} };

export default {
  install(app: App) {
    app.component(${upperName}.name, ${upperName});
  },
};
`;
}
