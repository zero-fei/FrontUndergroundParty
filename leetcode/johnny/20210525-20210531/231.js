/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if (n <= 0) return false
    while(n) {
        if (n === 1) return true
        if (n & 0x1 === 1) return false 
        n = n >>>1
    }
    return true
};