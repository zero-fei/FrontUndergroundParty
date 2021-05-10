const {generateTree} = require('../utils')
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let isLeft = true;
  let stack = [root]
  let nextStack = []
  let result = []
  if (!root) {
    return []
  }
  while (stack.length) {
    let cur
    if (isLeft) {
      cur = stack.shift()
    } else {
      cur = stack.pop()
    }
    result[count] = result[count] || []
    result[count].push(cur.val)
    if (isLeft) {
      if (cur.left && cur.left.val !== null) {
        nextStack.push(cur.left)
      }
      if (cur.right && cur.right.val !== null) {
        nextStack.push(cur.right)
      }
    } else {
      if (cur.right && cur.right.val !== null) {
        nextStack.unshift(cur.right)
      }
      if (cur.left && cur.left.val !== null) {
        nextStack.unshift(cur.left)
      }
    }
    if (stack.length === 0 && nextStack.length) {
      stack = nextStack
      nextStack = []
      isLeft = !isLeft
    }
  }
  return result
};

const test = [3,9,20,null,null,15,7]
const test1 = [1,2,3,4,null,null,5]
const testTree = generateTree(test1)

console.log(zigzagLevelOrder(testTree))
