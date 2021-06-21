/**
 * @param {number[]} coins
 * @return {number}
 */
 var minCount = function(coins) {
   let result = 0
   coins.forEach(coin => {
     result += Math.ceil(coin / 2)
   })
   return result
};