/*
 * @tag 动态规划
 * @lc app=leetcode.cn id=62 lang=javascript
 * 
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let r = 0; r < m; r += 1) {
        for (let c = 0; c < n; c += 1) {
            if (r === 0 || c === 0) dp[r][c] = 1
            else dp[r][c] = dp[r][c - 1] + dp[r - 1][c]
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end

console.log(uniquePaths(3, 7), 28);
console.log(uniquePaths(3, 2), 3);
console.log(uniquePaths(7, 3), 28);
console.log(uniquePaths(3, 3), 6);
