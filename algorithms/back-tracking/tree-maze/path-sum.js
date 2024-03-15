class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function isLeaf(node) {
    return node.left === null && node.right === null;
}
function hasPathSum(root, targetSum) {
    const dfs = (node, sum) => {
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
}
;
