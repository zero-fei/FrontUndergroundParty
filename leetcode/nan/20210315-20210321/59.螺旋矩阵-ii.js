/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left = 0
  let right = n - 1
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let num = 1
  while (left <= right) {
    for (let col = left; col < right; col++) {
      res[left][col] = num++
    }
    for (let row = left; row < right; row++) {
      res[row][right] = num++
    }
    for (let col = right; col > left; col--) {
      res[right][col] = num++
    }
    for (let row = right; row > left; row--) {
      res[row][left] = num++
    }
    if (left === right) res[left][right] = num
    left += 1
    right -= 1
  }
  return res
};
// @lc code=end
console.log(generateMatrix(3))
