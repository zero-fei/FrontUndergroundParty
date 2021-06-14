/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const nums = []
    let base = 1
    const sqrtN = Math.sqrt(n)
    while (base <= sqrtN) {
        nums.push(Math.pow(base, 2))
        base += 1
    }

    const dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > i) break
            dp[i] = Math.min(dp[i], dp[i - nums[j]] + 1)
        }
    }

    return dp[n]
};
// @lc code=end

console.log(numSquares(13), 2);
console.log(numSquares(12), 3);
console.log(numSquares(2), 2);