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
 * @return {boolean}
 */
 var isValidBST = function(root) {
   return dfs(root,-Infinity,Infinity)
};

function dfs(root,lower,upper) {
  if(root === null) {
    return true
  }
  if(root.val >= upper || root.val <= lower) {
    return false
  } 
  return dfs(root.left,lower,root.val) && dfs(root.right,root.val,upper)
}