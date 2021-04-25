/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const length = nums.length
  if (length === 1) {
    return nums[0]
  }
  function rob1(start, end) {
    let pre = cur = 0
    for (let i = start; i < end; i ++) {
      const num = nums[i]
      let maxNum = Math.max(num + pre, cur)
      pre = cur
      cur = maxNum
    }
    // console.log(cur)
    return cur
  }
  return Math.max(rob1(0, length - 1), rob1(1, length))
  
};