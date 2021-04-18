/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 
 */

// 分为两个区间计算dps方程
// dp方程：dp[i] = max(dp[i-2] + num[i], dp[i-1])

/**
 * @param {number[]} nums
 * @return {number}
 */
const robRange = function(nums, start, end) {
  // const dps = [] 可以用变量代替滚动数组实现
  let first = nums[start], second = Math.max(nums[start], nums[start+1])
  let temp
  for(let i = start+2; i<=end; i++) {
    temp = second
    second = Math.max(first+nums[i], second)
    console.log(second)
    first = temp
  }
  return second
}
const rob = function(nums) {
  if(nums.length === 1) {
      return nums[0]
  }
  if(nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }
  return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1))
};


const test = [200,3,140,20,10]
console.log(rob(test))