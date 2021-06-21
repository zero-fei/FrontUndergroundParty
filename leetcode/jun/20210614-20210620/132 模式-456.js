/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  const len = nums.length;
  const stack_k = [nums[len - 1]]
  let max_k = -Number.MAX_SAFE_INTEGER

  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < max_k) {
      return true
    }
    while (stack_k.length && nums[i] > stack_k[stack_k.length - 1]) {
      max_k = stack_k.pop()
    }
    if (nums[i] > max_k) {
      stack_k.push(nums[i])
    }
  }
  return false
};

console.log(find132pattern([1,2,3,4]), false)
console.log(find132pattern([3,1,4,2]), true)
console.log(find132pattern([-1,3,2,0]), true)