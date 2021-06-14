  /**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let X_arr = nums.splice(0,n)
  let result = []
  for (let index = 0; index < X_arr.length; index++) {
    result.push(X_arr[index])
    result.push(nums[index])
  }
  return result
};
