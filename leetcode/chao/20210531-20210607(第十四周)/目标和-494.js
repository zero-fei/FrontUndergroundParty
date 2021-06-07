/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 暴力递归
var findTargetSumWays1 = function(nums, target) {
  let total = 0
  sum_loop(0, nums.length)
  return total

  function sum_loop(sum, loop) {
    if(loop <= 0) {
      if(sum === target) {
        total++
      }
      return 
    }else {
      const p = nums.length - loop
      sum_loop(sum+nums[p], loop-1)
      sum_loop(sum-nums[p], loop-1)
    }
  }
};

// dfs优化
var findTargetSumWays2 = function(nums, target) {
  return dfs(nums, target, 0, 0)
  function dfs(nums, target, loop, sum) {
    if(loop === nums.length) {
      return target === sum ? 1 : 0
    }
    const left = dfs(nums, target, loop+1, sum+nums[loop])
    const right = dfs(nums, target, loop+1, sum-nums[loop])
    return left + right
  }
}

// console.log(findTargetSumWays2([1,1,1,1,1], 3))

// 动态规划
// DP[loop][target] = DP[loop-1][target-sums[loop-1]] + DP[loop-1][target+sums[loop-1]]
var findTargetSumWays3 = function(nums, target) {
  
  let max_sum = 0;
  for(let i = 0; i < nums.length; i++) {
    max_sum += Math.abs(nums[i])
  }
  const dp = new Array(nums.length+1).fill(0).map(() => new Array(2*max_sum+1).fill(0))
  dp[0][max_sum] = 1
  // dp[0][0] = 0
  for(let loop = 1; loop<=nums.length; loop++) {
    console.log(loop)
    const x = nums[loop-1]
    for(let j = -max_sum; j<=max_sum; j++) {
      if(j-x+max_sum >= 0) {
        dp[loop][j+max_sum] += dp[loop-1][j-x+max_sum]
      }else {
        console.log("invalid -", j, x, j-x)
      }
      if(j+x+max_sum <= 2*max_sum) {
        dp[loop][j+max_sum] += dp[loop-1][j+x+max_sum]
      }else {
        console.log("invalid +", j, x, j+x)
      }
    }
  }
  console.log(dp)
  return dp[nums.length][target+max_sum]
}

console.log(findTargetSumWays3([1,1,1,1,1], 3))


// 动态规划优化
// 令「负值部分」的绝对值总和为 m, s为数组总和，即可得：(s−m)−m=s−2∗m=target, m = (s-target)/2
// 问题简化为，负值总和为m时的方案数，每次考虑当前数选或者不选即可
// dp[loop][m] = dp[loop-1][m] + dp[loop-1][m-sums[loop-1]]