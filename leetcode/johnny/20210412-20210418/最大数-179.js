/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const newNums = nums.sort(function (a, b) {
    console.log(`${a}${b}`-`${b}${a}`)
    return `${b}${a}` - `${a}${b}` 
  })

  if (Number(newNums[0]) === 0) return '0'
  return newNums.join("")
};