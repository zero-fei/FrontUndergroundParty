const {generateTree} = require('./utils')
/**
 * 常规解法：递归
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
 * 递归1
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) {
    return []
  }
  if (!root.left && !root.right) {
    return [root.val]
  }
  return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right))
};

const test1 = [1, null, 3, 2]
const test2 = [1, 2, 3, 4, 5, 6, 7, 8]

const result1 = generateTree(test1)
const result2 = generateTree(test2)

console.log(result1)
console.log(result2)
