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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let depthX = 0, depthY = 0
  let preNodeX = null, preNodeY = null
  function pre(node, depth, preNode) {
    if (!node) return
    depth += 1
    const { val } = node
    if (val === x) {
      preNodeX = preNode
      depthX = depth
    } else if (val === y) {
      preNodeY = preNode
      depthY = depth
    }
    if (node.left) {
      pre(node.left, depth, node)
    }
    if (node.right) {
      pre(node.right, depth, node)
    }
  }
  pre(root, 0, null)
  if (depthX === depthY && preNodeX !== preNodeY) {
    return true
  } else {
    return false
  }
};