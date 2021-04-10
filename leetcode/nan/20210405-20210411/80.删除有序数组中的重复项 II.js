/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法1:
// var removeDuplicates = function(nums) {
//     if (nums.length < 2) return nums.length
//     let i = 2
//     while (i < nums.length) {
//         const n = nums[i]
//         if (n === nums[i - 2]) {
//             nums.splice(i, 1)
//         } else {
//             i++
//         }
//     }
//     return nums.length
// };

// 方法2：
var removeDuplicates = function (nums) {
  const len = nums.length
  if (len < 2) return len
  let slow = 2
  let fast = 2
  while (fast < len) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
};