/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
   if (n <= 0) {
     return 
   }
   let result = start
   for (let index = 1; index < n; index++) {
    result = result ^ (start + 2*index)
   }
   return result
};