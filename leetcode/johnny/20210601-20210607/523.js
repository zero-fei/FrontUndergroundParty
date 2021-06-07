/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {  
  if (nums.length < 2) return false 
  let num = 0
  const map = new Map();
  map.set(0, -1)
  for (let i = 0; i < nums.length; i++) {
    num = (num + nums[i]) % k
    if (map.has(num)) {
      if ((i - map.get(num)) >= 2) return true
    } else {
      map.set(num, i)
    }
  }
  
  return false
};
