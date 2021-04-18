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
 * @param {number} targetSum
 * @return {number[][]}
 */


 let root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
          val: 7,
          left: null,
          right: null
        },
      right: {
          val: 2,
          left: null,
          right: null
        }
    },
    right: null
  },
  right:{
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 11,
        left: null,
        right: null
      },
      right: null
    }
  }
}

var pathSum = function (root, targetSum) {
  let result = []
  dfs(root, 0, [], targetSum, result)
  return result
}

function dfs(root, temp, tempArr, targetSum, res) {
  if (root === null) {
    return res
  }
  if (root.left === null && root.right === null) {
    if (temp + root.val === targetSum) {
      tempArr.push(root.val)
      res.push(tempArr.concat([]))
      tempArr.pop()
    }
  }
  
  if(root.left) {
    tempArr.push(root.val)
    dfs(root.left, temp + root.val, tempArr , targetSum, res)
    tempArr.pop()
  }
  if(root.right) {
    tempArr.push(root.val)
    dfs(root.right, temp + root.val, tempArr, targetSum, res)
    tempArr.pop()
  }
}

pathSum(root,22)