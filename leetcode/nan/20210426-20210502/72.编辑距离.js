/*
 * @tag 动态规划
 *      字符串转换
 * 
 * @lc app=leetcode.cn id=72 lang=javascript
 * 
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length
    const n = word2.length
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) dp[i][0] = i
    for (let j = 1; j <= n; j++) dp[0][j] = j
    for (let i = 1; i <= m; i += 1) {
        for (let j = 1; j <= n; j += 1) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            }
        }
    }
    // console.log('dp: ', dp);
    return dp[m][n]
};
// @lc code=end

console.log(minDistance("horse", 'ros'), 3)
console.log(minDistance("intention", 'execution'), 5)
console.log(minDistance("zoologicoarchaeologist", "zoogeologist"), 10)