/**
 * 二叉树的最小深度-111.js（https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/）
 * 注意子节点为null时
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
 var minDepth = function(root) {
   if(!root) {
     return 0
   } else if (root.left && root.right) {
    const leftLength = minDepth(root.left)
    const rightLength = minDepth(root.right)
    return Math.min(leftLength,rightLength) + 1
   } else if(root.left) {
     return 1 + minDepth(root.left)
   } else if(root.right) {
    return 1 + minDepth(root.right)
  }
  return 1
};