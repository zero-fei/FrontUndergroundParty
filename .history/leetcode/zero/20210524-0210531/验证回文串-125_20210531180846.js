/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) return true;
  var str1 = '';
  for (var i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
  }
  if (str === str1) {
    return true
  } else {
    return false
  }
};