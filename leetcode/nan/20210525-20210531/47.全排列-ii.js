/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// const swap = (nums, i, j) => {
//     const temp = nums[i]
//     nums[i] = nums[j]
//     nums[j] = temp
// }

// var permuteUnique = function(nums) {
//     const n = nums.length
//     const result = []
//     nums.sort((a, b) => a - b)

//     const dfs = (stack, start) => {
//         if (start === n) {
//             result.push(stack.slice())
//             return
//         }
//         const set = new Set()
//         for (let i = start; i < n; i++) {
//             if (set.has(nums[i])) {
//                 continue
//             }
//             swap(nums, start, i)
//             debugger
//             stack.push(nums[start])
//             dfs(stack, start + 1)
//             stack.pop()
//             swap(nums, i, start)
//             set.add(nums[i])
//         }
//     }

//     dfs([], 0)
//     return result
// };

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const n = nums.length
    const visited = new Array(n)
    const result = []

    const dfs = (stack, start) => {
        if (stack.length === n) {
            result.push(stack.slice())
            return
        }
        for (let i = 0; i < n; i++) {
            if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
                continue
            }
            stack.push(nums[i])
            visited[i] = true
            dfs(stack, start + 1)
            stack.pop()
            visited[i] = false
        }
    }

    nums.sort((a, b) => a - b)
    dfs([], 0)
    return result
};
// @lc code=end

console.log(permuteUnique([1,1,2]), 'answer:', [
    [1,1,2],
    [1,2,1],
    [2,1,1]
]);
console.log(permuteUnique([1,2,3]), 'answer:', [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
console.log(permuteUnique([0,1,0,0,9]), 'answer:', [[0,0,0,1,9],[0,0,0,9,1],[0,0,1,0,9],[0,0,1,9,0],[0,0,9,0,1],[0,0,9,1,0],[0,1,0,0,9],[0,1,0,9,0],[0,1,9,0,0],[0,9,0,0,1],[0,9,0,1,0],[0,9,1,0,0],[1,0,0,0,9],[1,0,0,9,0],[1,0,9,0,0],[1,9,0,0,0],[9,0,0,0,1],[9,0,0,1,0],[9,0,1,0,0],[9,1,0,0,0]]);