  /**
   * 求根节点到叶节点数字之和-129(https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/)
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
  
   let root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right:{
      val: 3,
      left: null,
      right: null
    }
  }
  var sumNumbers = function(root) {
    if(root === null) {
      return 0
    }
    const res = [0]
    dfs(root,[],res)
    return res[0]
  };
console.log("sumNumbers",sumNumbers(root));
  function dfs (root,temp,res) {
    temp.push(root.val)
    if (root.left === null && root.right === null) {
      const tempNum = Number(temp.join(""))
      res[0] += tempNum
      return res
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