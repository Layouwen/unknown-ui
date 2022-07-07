import { computed, defineComponent, ref, toRefs } from "vue";
import { IInnerTreeNode, treeProps, TreeProps } from "./tree-type";
import { generateInnerTree } from "./utils";

export default defineComponent({
  name: "STree",
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props);
    const innerData = ref(generateInnerTree(data.value));

    const expendedTree = computed(() => {
      const result = [] as IInnerTreeNode[];
      // 将需要收缩的父节点中所有子节点存入数组，循环的时候排除它
      let excludeNode = [] as IInnerTreeNode[];
      for (const node of innerData.value) {
        if (excludeNode.includes(node)) continue;

        // 如果该节点需要收缩，则获取他所有子节点
        if (!node.expanded) {
          excludeNode = getChildren(node);
        }
        result.push(node);
      }
      return result;
    });

    const getChildren = (node: IInnerTreeNode) => {
      const result = [] as IInnerTreeNode[];
      // 找到该节点开始位置
      const index = innerData.value.findIndex((i) => i === node);
      // 往后遍历找到所有子节点
      for (
        let i = index + 1;
        i < innerData.value.length && node.level < innerData.value[i].level;
        i++
      ) {
        result.push(innerData.value[i]);
      }
      return result;
    };

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
