/*
 * @tag 动态规划
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length
    if (n <= 1) return n
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < n; i++) dp[i][i] = 1
    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
            }
        }
    }
    return dp[0][n - 1]
};
// @lc code=end

console.log(longestPalindromeSubseq("bbbab"), 4);
console.log(longestPalindromeSubseq("cbbd"), 2);