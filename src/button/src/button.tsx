import { defineComponent } from "vue";

export default defineComponent({
  name: "FkButton",
  setup(props, { slots }) {
    return () => {
      const defaultSlot = slots.default?.() || "按钮";
      return <button>{defaultSlot}</button>;
    };
  },
});
