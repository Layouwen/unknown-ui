import { upperFirst } from "./uitls";

export default function getTestTemplate(name: string) {
  const upperName = `S${upperFirst(name)}`;

  return `\
import { render } from "@testing-library/vue";
import ${upperName} from "../src/${name}";

describe("${name} test", () => {
  test("${name} init", async () => {
    render(${upperName});
  });
});
`;
}
