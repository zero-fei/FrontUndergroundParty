/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const save_string = new Set()
    const n = s.length
    let right_cur = -1, ans = 0
    for(let i = 0; i<n;i+=1) {
        if(i!==0) {
            save_string.delete(s.charAt(i - 1))
        }
        while (right_cur + 1 < n && !save_string.has(s.charAt(right_cur + 1))) {
            // 不断地移动右指针
            save_string.add(s.charAt(right_cur + 1));
            ++right_cur;
        }
        ans = Math.max(ans, right_cur - i + 1);
    }
    return ans
};