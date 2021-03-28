/**
 * 叶子相似的树-872.(https://leetcode-cn.com/problems/leaf-similar-trees/)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
   if(root1 === null || root2 === null){
     return false
   }
   let t1 = []
   let t2 = []
   dfs(root1,t1)
   dfs(root2,t2)
   return t1.toString() === t2.toString()
    
};

function dfs(root,res) {
  if(root.left === null && root.right === null) {
    res.push(root.val)
    return 
  }
  if(root.left) {
    dfs(root.left,res)
  }
  if(root.right) {
    dfs(root.right,res)
  }
}

