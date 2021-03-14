/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  const stack = []
  for (let i = 0; i<S.length; i++) {
    const w = S[i]
    let needP = true
    while(stack.length >=1 && stack[stack.length-1] === w) {
      needP = false
      stack.pop()
    } 
    if (needP) {
      stack.push(w) 
    }
    
  }
  return stack.join("")
};