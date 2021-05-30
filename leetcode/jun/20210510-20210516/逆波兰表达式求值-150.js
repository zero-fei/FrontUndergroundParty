/**
 * 逆波兰式（Reverse Polish notation，RPN，或逆波兰记法），也叫后缀表达式（将运算符写在操作数之后）
 * 一个表达式E的后缀形式可以如下定义：
 * （1）如果E是一个变量或常量，则E的后缀式是E本身。
 * （2）如果E是E1 op E2形式的表达式，这里op是任何二元操作符，则E的后缀式为E1'E2' op，这里E1'和E2'分别为E1和E2的后缀式。
 * （3)如果E是（E1）形式的表达式，则E1的后缀式就是E的后缀式。
 * 如：我们平时写a+b，这是中缀表达式，写成后缀表达式就是：ab+
 * (a+b)*c-(a+b)/e的后缀表达式为：
 * (a+b)*c-(a+b)/e
 * →((a+b)*c)((a+b)/e)-
 * →((a+b)c*)((a+b)e/)-
 * →(ab+c*)(ab+e/)-
 * →ab+c*ab+e/-
 */

/**
 * 计算
 * @param {number} a
 * @param {number} b
 * @param {string} op
 * @returns {number}
 */
var cal = function (a, b, op) {
  switch (op) {
    case '+':
      return Number(a) + Number(b);
    case '-':
      return Number(a) - Number(b);
    case '*':
      return Number(a) * Number(b);
    case '/':
      return parseInt(String(Number(a) / Number(b)));
    default:
      return 0;
  }
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const nums = [];
  const op = ['+', '-', '*', '/']
  while (tokens.length) {
    const cur = tokens.shift()
    if (op.includes(cur)) { // 当前是操作运算符
      const right = nums.pop();
      const left = nums.pop();
      const result = cal(left, right, cur)
      nums.push(result)
      console.log('------%s %s %s = %s-------', left, cur, right, result)
    } else {
      nums.push(cur)
    }
  }
  return nums[0]
};

console.log(">>>>>>>>>>>>>>>>>>>>>")
const tokens = ["2","1","+","3","*"]
console.log(evalRPN(tokens));

console.log(">>>>>>>>>>>>>>>>>>>>>")
const tokens1 = ["4","13","5","/","+"]
console.log(evalRPN(tokens1))

console.log(">>>>>>>>>>>>>>>>>>>>>")
const tokens2 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens2))