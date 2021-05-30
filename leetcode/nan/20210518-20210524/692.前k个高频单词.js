/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const n = words.length
    const map = new Map()
    for (let i = 0; i < n; i++) {
        const word = words[i]
        let count = map.get(word) || 0
        if (count) {
            count += 1
        } else {
            count = 1
        }
        map.set(word, count)
    }

    const result = new Array(k)
    for (let [word, count] of map) {
        const len = result.length
        if (!result[0]) {
            result[0] = word
            continue
        }
        let left = 0;
        let right = result.length - 1
        while (left <= right) {
            const middle = parseInt((left + right) / 2)
            const midWord = result[middle]
            const midCount = map.get(midWord)
            if (midCount > count || (midCount === count && midWord < word)) {
                left += 1
            } else {
                right -= 1
            }
        }
        if (left >= k) continue
        for (let i = k - 1; i > left; i--) {
            result[i] = result[i - 1]
        }
        result[left] = word
    }
    return result
};
// @lc code=end

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2), ["i", "love"]);
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3), ["i","love","coding"]);
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4), ["the", "is", "sunny", "day"]);