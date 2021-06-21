/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
   let num = 0
   for (let index = 0; index < nums.length; index++) {
     for (let index2 = index + 1; index2 < nums.length; index2++) {
       if(nums[index] === nums[index2]){
         num ++
       }
     }
     
   }
   return num
};
