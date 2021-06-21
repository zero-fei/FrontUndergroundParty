/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  strs.forEach(str => {
    const ones = str.split('').filter(c => c === '1').length
    const zeros = str.length - ones
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1)
      }
    }
  })

  return dp[m][n]
};
// @lc code=end

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3), 4);
console.log(findMaxForm(["10", "0", "1"], 1, 1), 2);
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 50, 50), 5);