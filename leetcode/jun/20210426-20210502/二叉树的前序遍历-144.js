const {generateTree} = require('./utils')
/**
 * 前序遍历
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
var preorderTraversal = function(root) {
  if (!root || root.val === null) {
    return []
  }
  if (!root.left && !root.right) {
    return [root.val]
  }
  return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
};

const test1 = [1, null, 3, 2]
const test2 = [1, 2, 3, 4, 5, 6, 7, 8]

const result1 = generateTree(test1)
const result2 = generateTree(test2)

console.log(result1)
console.log(result2)

console.log(preorderTraversal(result1))
console.log(preorderTraversal(result2))
