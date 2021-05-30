/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let pre = cur = 0
  const length = nums.length
  while(cur < length) {
    const num = nums[cur]
    if (num === val) {
      cur ++
      continue  
    }
    nums[pre] = nums[cur]
    cur ++
    pre ++
  }
  nums.splice(pre, cur-pre)
  return nums.length
};