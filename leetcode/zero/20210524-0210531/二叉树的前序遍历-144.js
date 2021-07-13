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
var preorderTraversal = function (root) {
  const res = []
  const inorder = (root) => {
    if (root === null) return;
    res.push(root.val)
    inorder(root.left)
    inorder(root.right)
  }
  inorder(root)
  return res;
};