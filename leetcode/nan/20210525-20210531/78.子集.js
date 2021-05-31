/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const n = nums.length
    const result = []
    const backtracking = (stack, start) => {
        result.push(stack.slice())

        for (let i = start; i < n; i++) {
            if (nums[i] === nums[i - 1] && i > start) continue

            stack.push(nums[i])
            backtracking(stack, i + 1)
            stack.pop()
        }
    }

    nums.sort((a, b) => a - b)
    backtracking([], 0)

    return result
};
// @lc code=end

console.log(subsets([1, 2, 3]), 'answer:', [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]);
console.log(subsets([0]), 'answer:', [[],[0]]);

