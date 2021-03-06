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
const postorderTraversal = function (root) {
  const res = []
  const inorder = (root) => {
    if (root === null) return;
    inorder(root.left)
    inorder(root.right)
    res.push(root.val)
  }
  inorder(root)
  return res;
};