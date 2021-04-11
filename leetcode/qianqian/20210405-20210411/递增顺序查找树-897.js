/**
 * 递增顺序查找树-897.j（https://leetcode-cn.com/problems/increasing-order-search-tree/）
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let res = []
  dfs(root, res)
  let result
  if (res.length) {
    let temp = new TreeNode(res[0])
    result = temp
    res.forEach((item, index) => {
      if (index !== 0) {
        temp.right = new TreeNode(item)
        temp = temp.right
      }
    })
    return result
  } else {
    return []
  }
}
function dfs(root, res) {
  if(root === null) {
    return
  }
  dfs(root.left, res)
  res.push(root.val)
  dfs(root.right, res)
}
