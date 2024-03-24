// https://leetcode.com/problems/path-sum/description/
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function isLeaf(node: TreeNode): boolean {
  return node.left === null && node.right === null;
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const dfs = (node: TreeNode | null, sum: number): boolean => {
    if (node === null) {
      return false;
    }

    sum += node.val;

    if (isLeaf(node)) {
      return sum === targetSum;
    }

    return dfs(node.left, sum) || dfs(node.right, sum);
  };

  return dfs(root, 0);
};


