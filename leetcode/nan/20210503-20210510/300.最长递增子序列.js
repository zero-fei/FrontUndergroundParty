/*
 * @tag 动态规划
 *      贪心算法
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length
    if (n <= 1) return n
    const dp = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i;j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
};
// @lc code=end

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]), 4);
console.log(lengthOfLIS([0,1,0,3,2,3]), 4);
console.log(lengthOfLIS([7,7,7,7,7,7,7]), 1);