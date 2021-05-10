/**
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
   整数除法仅保留整数部分。
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate_err = function(s) {

  const stack = [0]
  const len = s.length
  let currIndex = 0
  let num = 0, preSign = '+'
  while(currIndex < len) {
    
    let curr = s[currIndex]
    if(curr === ' '){
      currIndex++
      continue 
    }
    if(Number.isNaN(Number(curr))) {
      preSign = curr
      currIndex++
      continue
    }
    curr = Number(curr)
    switch(preSign) {
      case '+':
        stack.push(curr)
        break
      case '-':
        stack.push(-curr)
        break
      case '*':
        stack.push(stack.pop() * curr)
        break
      case '/':
        stack.push(parseInt(stack.pop()/curr))
        console.log(stack)
        break
      default:
    }
    currIndex++

    // let ans = 0;
    // while (stack.length) {
    //     ans += stack.pop();
    // }
    // return ans;
    
  }
  return stack.reduce((curr, prev) => {
    return prev + curr
  }, 0)

};

// 上面解法没有考虑多个多位数的情况
// 能用for还是用for循环把，while写起来可真费劲
const calculate = function(s) {

  const stack = []
  const len = s.length
  let currIndex = 0
  let num = 0, preSign = '+'
  while(currIndex < len) {
    // console.log("currIndex", currIndex)

    let curr = s[currIndex]
    // if(curr === ' ' && currIndex !== len-1){ // currIndex !== len-1 最后一位是空格时，也要执行计算逻辑, 可以将这个判断移到数字的判断中
    //   currIndex++
    //   continue 
    // }
    if(!Number.isNaN(Number(curr)) && curr !== ' ') {
      num = num*10 + Number(curr)
    }
    if(Number.isNaN(Number(curr)) || currIndex === len-1) {
      switch(preSign) {
        case '+':
          stack.push(num)
          break
        case '-':
          stack.push(-num)
          break
        case '*':
          stack.push(stack.pop() * num)
          break
        default:
          console.log('/', curr)
          stack.push(parseInt(stack.pop()/num))
      }
      preSign = curr
      num = 0
    }
    currIndex++
  }

  return stack.reduce((curr, prev) => {
    return prev + curr
  }, 0)
}

console.log(calculate("3+2*2"))
console.log(calculate(" 3/2 "))
console.log(calculate(" 3+5 / 2 "))
console.log(calculate("42"))

