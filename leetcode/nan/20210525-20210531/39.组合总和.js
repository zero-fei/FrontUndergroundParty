/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    const n = candidates.length
    const backtracking = (stack, index, rest) => {
        if (rest === 0) {
            result.push(stack.slice())
            return
        }
        if (rest < 0 || index >= n) {
            return
        }
        for (let i = index; i < n; i++) {
            const num = candidates[i]
            stack.push(num)
            backtracking(stack, i, rest - num)
            stack.pop()
        }
    }

    backtracking([], 0, target)
    return result
};
// @lc code=end

console.log(combinationSum([2, 3, 6, 7], 7), [[7], [2,2,3]]);
console.log(combinationSum([2, 3, 5], 8), [[2,2,2,2], [2,3,3], [3,5]]);

