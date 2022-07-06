import { render } from "@testing-library/vue";
import STree from "../src/tree";

describe("tree test", () => {
  test("tree init", async () => {
    render(STree);
  });
});
