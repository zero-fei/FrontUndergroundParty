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
 * @return {number}
 */
// var minDiffInBST = function(root) {
//     if (!root) return 0
//     const arr = []
//     const stack = []
//     let cur = root
//     while (cur) {
//         stack.push(cur)
//         cur = cur.left
//     }
//     while (cur = stack.pop()) {
//         arr.push(cur.val) 
//         cur = cur.right
//         while (cur) {
//             stack.push(cur)
//             cur = cur.left
//         }
//     }
//     let min = Number.MAX_SAFE_INTEGER
//     for (let i = 0; i < arr.length - 1; i += 1) {
//         min = Math.min(min, arr[i + 1] - arr[i])
//     }
//     return min
// };

var minDiffInBST = function (root) {
  if (!root) return 0
  const arr = []
  const stack = []
  let cur = root
  let pre = -1
  let min = Number.MAX_SAFE_INTEGER
  while (cur) {
    stack.push(cur)
    cur = cur.left
  }
  while (cur = stack.pop()) {
    const n = cur.val
    if (pre !== -1) {
      min = Math.min(min, n - pre)
    }
    pre = n
    arr.push(n)
    cur = cur.right
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
  }
  return min
};
