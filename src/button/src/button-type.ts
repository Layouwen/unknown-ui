import { PropType, ExtractPropTypes } from "vue";

export type IButtonType = "primary" | "secondary" | "text";
export type IButtonSize = "small" | "medium" | "large";

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: "secondary",
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: "medium",
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  block: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
