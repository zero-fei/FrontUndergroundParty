/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) return true;
  let low = 0;
  let high = s.length - 1;

  let status = true;
  let reg = /[0-9a-zA-Z]/;
  while (low <= high) {
    if (!reg.test(s[low])) {
      low++;
      continue;
    }

    if (!reg.test(s[high])) {
      high--;
      continue;
    }

    if (s[low].toLowerCase() != s[high].toLowerCase()) {
      status = false;
      break;
    } else {
      low++;
      high--;
    }
  }

  return status;
};