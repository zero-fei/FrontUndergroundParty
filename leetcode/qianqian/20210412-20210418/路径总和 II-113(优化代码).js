/**
 * 113. 路径总和 II(https://leetcode-cn.com/problems/path-sum-ii/)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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
  tempArr.push(root.val)
  temp = temp + root.val
  if (root.left === null && root.right === null) {
    if (temp === targetSum) {
      res.push(tempArr.concat([]))
    }
   
  } else {
    dfs(root.left, temp, tempArr , targetSum, res)
    dfs(root.right, temp, tempArr, targetSum, res)
  }
  tempArr.pop()
}

pathSum(root,22)