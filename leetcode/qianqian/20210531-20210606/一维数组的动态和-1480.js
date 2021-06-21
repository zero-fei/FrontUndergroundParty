/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
   let result = [nums[0]]
   for (let index = 1; index < nums.length; index++) {
     result[index] = result[index - 1] + nums[index]
   }
   return result
};