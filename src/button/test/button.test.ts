import { render } from "@testing-library/vue";
import Button from "../src/button";

// 基础按钮
test("it should work", () => {
  const { getByRole } = render(Button);
  getByRole("button");
});

test("default slot should be 按钮", () => {
  const { getByText } = render(Button);
  getByText("按钮");
});

test("default slot should work", () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return "hello";
      },
    },
  });
  getByText("hello");
});

test("default type should be secondary", () => {
  const { getByRole } = render(Button);
  const button = getByRole("button");
  expect(button.classList.contains("s-btn--secondary")).toBe(true);
});

test("type should work", () => {
  const { getByRole } = render(Button, {
    props: {
      type: "primary",
    },
  });
  const button = getByRole("button");
  expect(button.classList.contains("s-btn--primary")).toBe(true);
});
