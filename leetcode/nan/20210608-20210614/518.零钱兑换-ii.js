/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const n = coins.length
    const dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j < coins[i]) continue
            dp[j] += dp[j - coins[i]]
        }
    }
    return dp[amount]
};
// @lc code=end

console.log(change(5, [1, 2, 5]), 4);
console.log(change(3, [2]), 0);
console.log(change(10, [10]), 1);