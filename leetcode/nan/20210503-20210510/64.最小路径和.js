/*
 * @tag 动态规划
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {
//     const m = grid.length
//     if (m <= 0) return 0
//     const n = grid[0].length
//     if (n <= 0) return 0
//     const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
//     for (let r = 0; r < m; r++) {
//         for (let c = 0; c < n; c++) {
//             if (r === 0 && c === 0) dp[0][0] = grid[0][0]
//             else if (r === 0) dp[0][c] = dp[r][c] = grid[r][c] + dp[r][c - 1]
//             else if (c === 0) dp[r][0] = dp[r][c] = grid[r][c] + dp[r - 1][c]
//             else {
//                 dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + grid[r][c]
//             }
//         }
//     }
//     return dp[m - 1][n - 1]
// };

/**
 * @desc 优化版
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    const m = grid.length
    if (m <= 0) return 0
    const n = grid[0].length
    if (n <= 0) return 0
    const dp = new Array(m).fill(0)
    dp[0] = grid[0][0]
    for (let c = 1; c < n; c++) dp[c] = dp[c - 1] + grid[0][c]
    
    for (let r = 1; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (c === 0) dp[0] += grid[r][c]
            else {
                dp[c] = Math.min(dp[c], dp[c - 1]) + grid[r][c]
            }
        }
    }
    return dp[n - 1]
};
// @lc code=end

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]), 7);
console.log(minPathSum([[1,2,3],[4,5,6]]), 12);