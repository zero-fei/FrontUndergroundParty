/**
 * 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。
 * 请你从 nums 中找出并返回总和为 target 的元素组合的个数。
    题目数据保证答案符合 32 位整数范围。
 * 
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 官方解法
var combinationSum4 = function(nums, target) {
  const dp = new Array(target+0).fill(0)
  dp[0] = 1
  for(let i = 1; i<target+1; i++){
    for(let j = 0; j < nums.length; j++) {
      nums[j] <= i && (dp[i] += dp[i - nums[j]])
    }
  }
  console.log(dp)
  return dp[target]
};   

// 宫水三叶解法
// dp方程：dp[len][taget] = sum(dp[len-1][target-num[i]]) (0<=i<=len)
var combinationSum4_2 = function(nums, target) {
  const dp = new Array(target+1).fill(new Array[nums.length].fill(0))
  dp[0][0] = 1
  for(let i = 1; i <= target; i++) {

  }
}; 

const nums = [1,2,3], target = 4
console.log(combinationSum4(nums, target))