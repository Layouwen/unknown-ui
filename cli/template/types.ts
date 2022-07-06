import { upperFirst } from "./uitls";

export default function getTypesTemplate(name: string) {
  const propsName = `${name}Props`;
  const propsTypeName = `${upperFirst(name)}Props`;

  return `\
import { PropType, ExtractPropTypes } from "vue";

export const ${propsName} = {} as const;

export type ${propsTypeName} = ExtractPropTypes<typeof ${propsName}>;
`;
}
