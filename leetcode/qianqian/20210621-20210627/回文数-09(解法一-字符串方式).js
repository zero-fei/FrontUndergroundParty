/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  if(x < 0) {
    return false
  }
  if(x === 0) {
    return true
  }
  
  const str = String(x)
  const strLength = str.length
  const middle = Math.floor(strLength / 2)
 for (let i = 0; i <= middle; i++) {
   if(str[i] !== str[strLength - 1 - i]) {
     return false
   }
 }
 return true
};
isPalindrome(121)