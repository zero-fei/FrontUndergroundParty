/**
 * 53. 最大子序和(https://leetcode-cn.com/problems/maximum-subarray/)
 * 动态规划：
 * dp[i]: 计算数组中到达i元素的最大子序和
 * dp[i]:
 * 1：dp[i]
 * 2：dp[i-1] + 当前值
 * dp[i]取最大，即dp[i-1] > 0
 * 
 * 获取数组dp中最大的元素即为所求
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
   let dp = [nums[0]]
   for (let index = 1; index < nums.length; index++) {
     const element = nums[index];
     if(dp[index-1] > 0) {
       dp[index] = element + dp[index-1]
     } else {
       dp[index] = element
     }
   }
   return Math.max.apply(null,dp)
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))