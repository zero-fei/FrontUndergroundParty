function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * 二叉树小最深度
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function (root) {
  if (root === null) return 0
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  if (left === 0) return left + 1;
  if (right === 0) return right + 1;
  return left < right ? left + 1 : right + 1
};
