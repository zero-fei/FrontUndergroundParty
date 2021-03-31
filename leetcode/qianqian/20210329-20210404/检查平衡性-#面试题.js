/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 let root = {
    val: 3,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right:{
      val: 20,
      left: {
        val: 15,
        left: null,
        right: null
      },
      right:  {
        val: 7,
        left: null,
        right: null
      }
    }
  }

 let root2 = {
    val: 3,
    left: {
      val: 9,
      left: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null
          },
        right: {
            val: 4,
            left: null,
            right: null
          }
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    },
    right:{
      val: 20,
      left:  null,
    right: null,
    }
  }
  
 var isBalanced = function(root) {
     if(!root) {
         return true
     }
     if(!root.left && !root.right) {
         return true
     }
     dfs(root)
     const leftLevel = root.left && root.left.level || 0
     const rigtLevel = root.right && root.right.level || 0
     return Math.abs(leftLevel - rigtLevel) <= 1 && isBalanced(root.left) && isBalanced(root.right)
     
    };
    function dfs (node) {
        if(!node) return 0
        if(node.level) {
            return node.level
        }
        node.level = 1 +  Math.max(dfs(node.left),dfs(node.right))
        return node.level
    }

console.log(isBalanced(root));
console.log(isBalanced(root2));