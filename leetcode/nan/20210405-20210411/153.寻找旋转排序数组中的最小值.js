/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const len = nums.length
  if (len === 1) return nums[0]
  let l = 0
  let r = len - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[l] === nums[mid] && nums[r] === nums[mid]) {
      l++
      r--
    } else if (nums[l] <= nums[mid]) {
      if (mid !== len - 1 && nums[mid] > nums[mid + 1]) {
        return nums[mid + 1]
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < nums[mid - 1]) {
        return nums[mid]
      } else {
        r = mid - 1
      }
    }
  }
  return nums[0]
};