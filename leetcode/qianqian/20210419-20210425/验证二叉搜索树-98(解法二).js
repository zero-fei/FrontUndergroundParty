/**
 * 验证二叉搜索树-98(解法二)（https://leetcode-cn.com/problems/validate-binary-search-tree/）
 * 使用中序遍历的方式，中序遍历存入一个数组，
 * 若是二叉搜索树：那数组的后面的项一定需要大于前面的项
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
   let temp = -Infinity
   let stack = []
   while(stack.length || root !== null) {
     while(root !== null) {
       stack.push(root)
       root = root.left
     }
     
     root = stack.pop()
     if(root.val <= temp) {
       return false
     }

     temp = root.val
     root = root.right
   }
   return true
};

