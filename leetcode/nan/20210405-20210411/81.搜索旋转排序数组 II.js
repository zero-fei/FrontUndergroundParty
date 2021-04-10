/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const len = nums.length
  if (len === 0) return false
  if (len === 1) return nums[0] === target
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const n = nums[middle]
    // console.log('n: ', left, right, n);
    if (n === target) return true
    if (n === nums[left] && n === nums[right]) {
      left++
      right--
    } else if (nums[left] <= n) {
      if (nums[left] <= target && target < n) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    } else {
      if (n < target && target <= nums[len - 1]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return false
};