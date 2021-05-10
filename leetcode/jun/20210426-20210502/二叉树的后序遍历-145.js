const {generateTree} = require('../utils')
/**
 * 后续遍历
 */
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root || root.val === null) {
    return []
  }
  if (!root.left && !root.right) {
    return [root.val]
  }
  return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat([root.val])
};

const test1 = [1, null, 3, 2]
const test2 = [1, 2, 3, 4, 5, 6, 7, 8]

const result1 = generateTree(test1)
const result2 = generateTree(test2)

console.log(result1)
console.log(result2)

console.log(postorderTraversal(result1))
console.log(postorderTraversal(result2))
