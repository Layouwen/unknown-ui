import { IInnerTreeNode, ITreeNode } from "./tree-type";

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0,
  path = [] as IInnerTreeNode[]
): IInnerTreeNode[] {
  level++;
  return tree.reduce((pre, cur) => {
    const o = { ...cur } as IInnerTreeNode;
    o.level = level;

    if (path.length > 0 && path[path.length - 1].level >= level) {
      while (path[path.length - 1]?.level >= level) {
        path.pop();
      }
    }
    path.push(o);

    const parentNode = path[path.length - 2];
    if (parentNode) {
      o.parentId = parentNode.id;
    }

    if (o.children) {
      const child = generateInnerTree(o.children, level, path);
      delete o.children;
      return pre.concat(o, child);
    } else {
      o.isLeaf = true;
      return pre.concat(o);
    }
  }, [] as IInnerTreeNode[]);
}
