/**
 * 112. 路径总和(https://leetcode-cn.com/problems/path-sum/)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  return dfs(root,0, targetSum)
};

function dfs (root,tamp,targetSum) {
 if (root === null ){
   return false
 }
 if(root.left === null && root.right === null) {
  return tamp + root.val === targetSum
 }
 return  dfs(root.left,tamp + root.val,targetSum ) || dfs(root.right,tamp + root.val,targetSum )
}