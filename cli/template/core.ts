import { upperFirst } from "./uitls";

export default function getCoreTemplate(name: string) {
  const compName = `S${upperFirst(name)}`;
  const className = `s-${name}`;
  const propsName = `${name}Props`;
  const propsTypeName = `${upperFirst(name)}Props`;
  const propsFileName = `${name}-type`;

  return `import { defineComponent } from "vue";
import { ${propsName}, ${propsTypeName} } from "${propsFileName}";

export default defineComponent({
  name: "${compName}",
  props: ${propsName},
  setup(props: ${propsTypeName}) {
    console.log(props);
    return () => {
      return <div class="${className}">${name}</div>;
    };
  },
});
`;
}
