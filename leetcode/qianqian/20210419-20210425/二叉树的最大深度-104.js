/**
 *  * 二叉树的最大深度-104.js（https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/）
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
 var maxDepth = function(root) {
   if(!root) {
     return 0
   }
   const leftLength = maxDepth(root.left)
   const rightLength = maxDepth(root.right)
   return Math.max(leftLength,rightLength) + 1
};