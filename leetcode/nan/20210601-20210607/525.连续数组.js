/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map()
    let max = 0
    let prev = 0
    map.set(-1, -1)
    for (let i = 0; i < nums.length; i++) {
        prev += nums[i]
        const base = i - 2 * prev
        if (map.has(base)) {
            max = Math.max(max, i - map.get(base))
        } else {
            map.set(base, i)
        }

    }
    return max
};
// @lc code=end

console.log(findMaxLength([0,1]), 2);
console.log(findMaxLength([0,1,0]), 2);
console.log(findMaxLength([0,1,0,1]), 4);
console.log(findMaxLength([1,1,0,1,1,1,0,0,0]), 8);
console.log(findMaxLength([1,1,1,1,1,1,0,0,0]), 6);