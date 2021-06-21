/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
   const maxCandies = Math.max(...candies)
   const result = []
   for (let index = 0; index < candies.length; index++) {
     if(candies[index] + extraCandies >= maxCandies) {
      result[index] = true
     } else {
      result[index] = false
     }
   }
   return result
};
