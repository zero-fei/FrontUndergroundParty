/**
 * @param {string} s
 * @return {number}
 */

// 对于复杂的情况可以先将输入预处理成较为简单的情况，但这种处理大部分需要全量遍历，从性能上来说不是最优

class SimpleQueue {
  constructor() {
    this.queue = []
  }

}

const priorityMap = {
  '+': 1,
  '-': 1,
  '*': 2,
  '%': 2,
  '/': 2,
  '^': 3
}

const _calc = function(nums, ops) {

  for(let i = 0; i< ops.length; i++) {

  }
}

var calculate = function(s) {
  const stack = []
  const ops = []
  let preSign = '+' 

  // 预处理空格，(-, (+
  s.replace(/\s/g, '')
  s.replace(/\(\-/g, '(0-')
  s.replace(/\(\+/g, '(0+')

  for(let i = 0; i < s.length; i++) {
    const symbol = s[i]
    if(symbol=== '(') {
      ops.push(symbol)
    }else if(symbol ===  ')') {
      while(!ops.length) {
        const n = ops[ops.length-1]
        i++
        if(n==='(') {

          break
        }else {
          _calc(nums, ops)
        }        
      }
    }else {
      if(Number.isNumber(Number(symbol))) {
        nums.push(Number(symbol))
      }else {
        if(map[preSign] > map[symbol]) {
          while(ops.length && ops[ops.length-1]!=='(') {
            _calc(nums, ops)
            i++
          }
        }
        preSign = symbol
      }
    }
  }

};
let s = "(0+5)+6*3"

console.log(calculate(s))