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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
   let res = []
   dfs(root,[],res)
   return res
};

function dfs(root,temp,res){
  temp.push(root.val)
  if(!root.left && !root.right) {
    if(temp.length) {
      res.push(temp.join("->"))
    }
  }
  if(root.left) {
    dfs(root.left,temp,res)
    temp.pop()
  }
  if(root.right) {
    dfs(root.right,temp,res)
    temp.pop()
  }
}