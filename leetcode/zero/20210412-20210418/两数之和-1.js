/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const  twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length ; i +=1) {
        if(map.has(target - nums[i])) {
           return [i,map.values(target - nums[i])];
        } else {
            map.set(nums[i], i);
        }
    }
    return []
};