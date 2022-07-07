import { computed, defineComponent, ref, toRefs } from "vue";
import { IInnerTreeNode, treeProps, TreeProps } from "./tree-type";
import { generateInnerTree } from "./utils";

export default defineComponent({
  name: "STree",
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props);
    const innerData = ref(generateInnerTree(data.value));

    // TODO: 筛选出只需要展示的节点
    const expendedTree = computed(() => {
      return innerData.value;
    });

    const toggleExpend = (node: IInnerTreeNode) => {
      const cur = innerData.value.find((item) => item.id === node.id);
      if (cur) {
        cur.expanded = !cur.expanded;
      }
    };

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
