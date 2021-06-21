/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const stack = [];
  for (let i = 0; i < num.length; i++) {
    const cur = num.charAt(i);
    while (stack.length && stack[stack.length - 1] > cur && k) {
      stack.pop();
      k-=1;
    }
    stack.push(cur)
  }
  for (let i = 0; i < k; i++) {
    stack.pop()
  }
  let ans = '';
  let isLeadingZero = true;
  for (let i = 0; i < stack.length; i++) {
    const cur = stack[i]
    if (isLeadingZero && cur === '0') {
      continue;
    }
    isLeadingZero = false;
    ans += cur
  }
  return ans ? ans : '0'
};

console.log(removeKdigits('1432219', 3), '1219')
console.log(removeKdigits('10200', 1), '200')
console.log(removeKdigits('10', 2), '0')