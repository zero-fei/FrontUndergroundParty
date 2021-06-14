/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function(s) {
//   const stack = []
//   let curr = ''
//   for (let i = 0; i < s.length; i++) {
//     const ele = s.charAt(i)
//     switch (ele) {
//       case '[':
//         if (curr) {
//           stack.push({
//             num: Number(curr),
//             str: ''
//           })
//           curr = ''
//         }
//         break;
//       case ']':
//         if (curr) {
//           stack[stack.length - 1].str = curr;
//           curr = ''
//         }
//         if (stack.length > 1) {
//           const back = stack.pop()
//           let _str = ''
//           for (let _i = 0; _i < back.num; _i++) {
//             _str += back.str
//           }
//           stack[stack.length - 1].str = stack[stack.length - 1].str + _str
//         }
//         break;
//       default:
//         curr += ele
//     }
//   }
//   let result = ''
//   while (stack.length) {
//     const back = stack.pop()
//     let _str = ''
//     for (let _i = 0; _i < back.num; _i++) {
//       _str += back.str
//     }
//     result += _str
//   }
//   if (curr) {
//     result += curr
//   }
//   return result
// };

var decodeString = function(s) {
  let mulStack = [], strStack = [], num = 0, res = ''
  for (const c of s) {
    if (!isNaN(c)) {
      num = num * 10 + (c - '0')
    } else if (c === '[') {
      strStack.push(res)
      mulStack.push(num)
      res = ''
      num = 0
    } else if (c === ']') {
      res = strStack.pop() + res.repeat(mulStack.pop())
    } else {
      res += c
    }
  }
  return res;
};

const test1 = "3[a]2[bc]"
console.log('============ aaabcbc ==============')
console.log(decodeString(test1))
const test2 = "3[a2[c]]"
console.log('============ accaccacc ==============')
console.log(decodeString(test2))
const test3 = "2[abc]3[cd]ef"
console.log('============ abcabccdcdcdef ==============')
console.log(decodeString(test3))
const test4 = "abc3[cd]xyz"
console.log('============ abccdcdcdxyz ==============')
console.log(decodeString(test4))