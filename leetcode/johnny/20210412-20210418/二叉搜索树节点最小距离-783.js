/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
  if (!root|| (!root.left && !root.right)) return null
  let min = Number.MAX_SAFE_INTEGER
  let pre = null
  function dfs(node, ) {
    if (!node) return null
    dfs(node.left, node.val)
    if (!pre) {
      pre = node
    } else {
      const val = node.val
      const preVal = pre.val
      min = Math.abs(val - preVal) > min ? min : Math.abs(val - preVal)
      pre = node
    }
    dfs(node.right, node.val)
  } 
  dfs(root)
  return min
};