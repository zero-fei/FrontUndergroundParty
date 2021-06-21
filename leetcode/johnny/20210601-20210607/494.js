/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let times = 0 
  const length = nums.length
  function dp(index, sum, operate) {
    const item = nums[index]
    const curSum = sum + item * operate
    if (index === length -1) {
      if (curSum === target) {
        times ++
      }
      return 
    } 
    dp(index+1, curSum, 1)
    dp(index+1, curSum, -1)
  }
  dp(0, 0, 1)
  dp(0, 0, -1)
  return times
};