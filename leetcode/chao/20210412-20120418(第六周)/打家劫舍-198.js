/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，
 * 一夜之内能够偷窃到的最高金额。
 */

// dp方程：dp[i] = max(dp[i-2] + num[i], dp[i-1])

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length === 1){
    return nums[0]
  } 
  if(nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }
  const dps = []
  dps[0] = nums[0]
  dps[1] = Math.max(nums[0], nums[1])
  for(let i = 2; i < nums.length; i++) {
    dps[i] = Math.max(dps[i-2] + nums[i], dps[i-1])
  }
  return dps[dps.length-1]
};

const test = [1,2,3,4]
console.log(rob(test))