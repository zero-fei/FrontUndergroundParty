/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0
    let hash = {}
    let max = 1 
    let i = j = 0;
    for (; j<s.length; j++) {
        const code = s[j]
        if (typeof hash[code] === 'number') {
            max = Math.max(max, j - i)
            if (hash[code] >= i) {
                i = hash[code] + 1
            }
           
        }
        hash[code] = j 
    }
    // console.log(i, j)
    return Math.max(max, j - i)
}; 
//pwwkew 
// ohvhjdml
// au
// abcabcbb
console.log(lengthOfLongestSubstring("abcabcbb"))