/**
 * 对称二叉树-101[https://leetcode-cn.com/problems/symmetric-tree/]
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 左子树的左节点等于右子树的右节点
 * 左子树的右节点等于右子树的右节点
 * */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  if(!root) {
    return true
  }

  const dfs = function(left,right) {
    if(left === null && right === null) {
      return true
    }
    if(left && right) {
      return left.val === right.val && dfs(left.left,right.right) && dfs(left.right,right.left)
    }
    return false
  }

  return dfs(root.left,root.right)
};


