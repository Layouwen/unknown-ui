import { defineComponent, toRefs } from "vue";
import tree from "../index";
import { useTree } from "./composables/use-tree";
import { treeProps, TreeProps } from "./tree-type";

const NODE_HEIGHT = 24;
const NODE_INDENT = 24;

export default defineComponent({
  name: "STree",
  props: treeProps,
  setup(props: TreeProps) {
    const { data, checkable } = toRefs(props);
    const { expendedTree, toggleExpend, getChildren, toggleCheckNode } =
      useTree(data);

    return () => {
      return (
        <div class="s-tree">
          {expendedTree.value.map((treeNode) => (
            <div
              class="s-tree-node hover:bg-gray-100 relative"
              style={{ paddingLeft: `${(treeNode.level - 1) * NODE_INDENT}px` }}
            >
              {/* 显示连接线 */}
              {!treeNode.isLeaf && treeNode.expanded && (
                <span
                  class="s-tree-node__vline absolute w-px bg-gray-100"
                  style={{
                    height: `${NODE_HEIGHT * getChildren(treeNode).length}px`,
                    left: `${NODE_INDENT * (treeNode.level - 1) + 11}px`,
                    top: `${NODE_HEIGHT}px`,
                  }}
                />
              )}
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

              {checkable.value && (
                <input
                  type="checkbox"
                  v-model={treeNode.checked}
                  onClick={() => toggleCheckNode(treeNode)}
                />
              )}
              {treeNode.label}
            </div>
          ))}
        </div>
      );
    };
  },
});
