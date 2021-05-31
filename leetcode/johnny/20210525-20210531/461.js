/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let num = 0
    while(x || y) {
        const bX = x & 1
        const bY = y & 1
        num += (bX !== bY) ? 1:0
        x = x >> 1;
        y = y >> 1;
    }
    return num
};