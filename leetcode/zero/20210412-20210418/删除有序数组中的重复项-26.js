/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if(nums.length === 0) return 0
    let fast = 1, slow = 1
    while(fast < nums.length) {
        if(nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow ++
        }
        fast ++
    }
    return slow
};