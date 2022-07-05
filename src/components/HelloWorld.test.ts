import { render } from "@testing-library/vue";
import { test } from "vitest";
import { Button } from "../button";

test("HelloWorld", async () => {
  const { getByText } = render(Button);
  getByText("按钮");
});
