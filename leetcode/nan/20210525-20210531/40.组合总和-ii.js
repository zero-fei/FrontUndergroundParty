/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */
// var combinationSum2 = function(candidates, target) {
//     const n = candidates.length
//     candidates.sort((a, b) => a - b)
//     const result = []
//     const dfs = (combine, rest, index) => {
//         if (rest === 0) {
//             result.push(combine.slice())
//             return
//         }
//         if (rest < 0 || index >= n) return

//         const num = candidates[index]
//         let next = index
//         while (num === candidates[next]) {
//             next += 1
//         }
//         dfs(combine, rest, next)

//         combine.push(num)
//         dfs(combine, rest - num, index + 1)
//         combine.pop()
//     }

//     dfs([], target, 0)
//     return result
// };

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const n = candidates.length
    candidates.sort((a, b) => a - b)
    const result = []
    const dfs = (combine, rest, index) => {
        if (rest === 0) {
            result.push(combine.slice())
            return
        }
        if (rest < 0 || index >= n) return

        for (let i = index; i < n; i++) {
            const num = candidates[i]
            if (num === candidates[i - 1] && i > index) continue
            combine.push(num)
            dfs(combine, rest - num, i + 1)
            combine.pop()
        }
    }

    dfs([], target, 0)
    return result
};
// @lc code=end

console.log(combinationSum2([10,1,2,7,6,1,5], 8), 'answer:', [
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6]
]);
console.log(combinationSum2([2,5,2,1,2], 5), 'answer:', [
    [1,2,2],
    [5]
]);