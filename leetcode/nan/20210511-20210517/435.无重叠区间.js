/*
 * @tag 贪心算法-区间调度
 *      动态规划
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @贪心算法
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    const n = intervals.length
    if (n <= 1) return 0
    intervals.sort((a, b) => a[1] - b[1])
    let count = 1
    let lEnd = intervals[0][1]
    for (let i = 1; i < n; i++) {
        const [start, end] = intervals[i]
        if (start >= lEnd) {
            count++
            lEnd = end
        }
    }
    return n - count
};

/**
 * @动态规划
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    if (!Array.isArray(intervals)) return 0
    const n = intervals.length
    if (n <= 1) return 0
    const sortedArr = intervals.slice()
    sortedArr.sort((a, b) => a[0] - b[0])
    const result = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (sortedArr[j][1] <= sortedArr[i][0]) {
                result[i] = Math.max(result[i], result[j] + 1)
            }
        }
    }
    return n - Math.max(...result)
};
// @lc code=end

console.log(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]), 1);
console.log(eraseOverlapIntervals([ [1,2], [1,2], [1,2] ]), 2);
console.log(eraseOverlapIntervals([ [1,2], [2,3] ]), 0);