import { computed, ref, Ref, unref } from "vue";
import { IInnerTreeNode, ITreeNode } from "../tree-type";
import { generateInnerTree } from "../utils";

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)));

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
  return {
    toggleExpend,
    getChildren,
    expendedTree,
  };
}
