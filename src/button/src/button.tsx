import { defineComponent, toRefs } from "vue";
import { buttonProps, ButtonProps } from "./button-type";

export default defineComponent({
  name: "FkButton",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props);
    return () => {
      const defaultSlot = slots.default?.() || "按钮";
      return (
        <button class={`fk-btn fk-btn--${type.value}`}>{defaultSlot}</button>
      );
    };
  },
});
