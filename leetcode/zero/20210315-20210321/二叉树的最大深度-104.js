function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (root != null) {
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return left > right ? left + 1 : right + 1
  }
  return 0
};
