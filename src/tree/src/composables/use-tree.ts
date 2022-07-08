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

  const getChildren = (node: IInnerTreeNode, recursive = true) => {
    const result = [] as IInnerTreeNode[];
    // 找到该节点开始位置
    const index = innerData.value.findIndex((i) => i === node);
    // 往后遍历找到所有子节点
    for (
      let i = index + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (recursive) {
        result.push(innerData.value[i]);
      } else if (node.level === innerData.value[i].level - 1) {
        result.push(innerData.value[i]);
      }
    }
    return result;
  };

  const toggleExpend = (node: IInnerTreeNode) => {
    const cur = innerData.value.find((item) => item.id === node.id);
    if (cur) {
      cur.expanded = !cur.expanded;
    }
  };

  const toggleCheckNode = (node: IInnerTreeNode) => {
    // 防止 checked 为 undefined
    node.checked = !node.checked;

    getChildren(node).forEach((n) => (n.checked = node.checked));

    // 判断有没有父节点，没有就不联动
    const parentNode = innerData.value.find(
      (item) => item.id === node.parentId
    );
    if (!parentNode) return;

    // 获取所以子节点，判断是否全部勾选
    const children = getChildren(parentNode, false);
    parentNode.checked = children.every((item) => item.checked);
  };

  return {
    toggleExpend,
    getChildren,
    expendedTree,
    toggleCheckNode,
  };
}
