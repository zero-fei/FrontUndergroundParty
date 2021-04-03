/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length
  const n = text2.length
  if (!m || !n) return 0
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const isSame = text1[row] === text2[col] ? 1 : 0
      let curRes = 0
      if (row === 0 || col === 0) {
        if (isSame) {
          curRes = 1
        } else {
          if (row === 0 && col === 0) {
            curRes = 0
          }
          else {
            curRes = row === 0 ? arr[0][col - 1] : arr[row - 1][0]
          }
        }
      } else {
        curRes = arr[row - 1][col - 1] + isSame
        curRes = Math.max.apply(this, [curRes, arr[row - 1][col], arr[row][col - 1]])
      }
      arr[row][col] = curRes
    }
  }
  return arr[m - 1][n - 1]
};
// @lc code=end

console.log(longestCommonSubsequence('abcde', 'ace'))
console.log(longestCommonSubsequence('abc', 'abc'))
console.log(longestCommonSubsequence('abc', 'def'))