import { defineComponent, toRefs } from "vue";
import { useTree } from "./composables/use-tree";
import { treeProps, TreeProps } from "./tree-type";

export default defineComponent({
  name: "STree",
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props);
    const { expendedTree, toggleExpend } = useTree(data);

    return () => {
      return (
        <div class="s-tree">
          {expendedTree.value.map((treeNode) => (
            <div
              class="s-tree-node"
              style={{ paddingLeft: `${(treeNode.level - 1) * 24}px` }}
            >
              {treeNode.isLeaf ? (
                <span
                  style={{
                    display: "inline-block",
                    width: "25px",
                  }}
                />
              ) : (
                <svg
                  style={{
                    width: "25px",
                    height: "16px",
                    display: "inline-block",
                    transform: treeNode.expanded ? "rotate(90deg)" : "",
                  }}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => toggleExpend(treeNode)}
                >
                  <path
                    fill="currentColor"
                    d="M384 192v640l384-320.064z"
                  ></path>
                </svg>
              )}
              {treeNode.label}
            </div>
          ))}
        </div>
      );
    };
  },
});
