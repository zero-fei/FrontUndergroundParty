/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const swap = (nums, i, j) => {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

var permute = function(nums) {
    const n = nums.length
    const result = []
    const dfs = (stack, start) => {
        if (start === n) {
            result.push(stack.slice())
            return
        }

        for (let i = start; i < n; i++) {
            swap(nums, start, i)
            stack.push(nums[start])
            dfs(stack, start + 1)
            swap(nums, i, start)
            stack.pop()
        }
    }

    dfs([], 0)
    return result
};
// @lc code=end

console.log(permute([1, 2, 3]), 'answer:', [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
console.log(permute([0,1]), 'answer:', [[0,1],[1,0]]);
console.log(permute([1]), 'answer:',[[1]]);
