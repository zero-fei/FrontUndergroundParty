/**
 * 序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。
 *
 * 解法一： 使用栈去处理节点
 * 解法二： 入度和出度
 *        背景知识：
 *        入度：有多少个节点指向它；
 *        出度：它指向多少个节点。
 *        我们知道在树（甚至图）中，所有节点的入度之和等于出度之和。可以根据这个特点判断输入序列是否为有效的！
 *
 *        在一棵二叉树中：
 *
 *        每个空节点（ "#" ）会提供 0 个出度和 1 个入度。
 *        每个非空节点会提供 2 个出度和 1 个入度（根节点的入度是 0）
 */


/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  const list = preorder.split(',');
  const len = list.length;
  const stack = [];
  // if (list.length === 1 && list[0] === '#') {
  //   return true;
  // }
  for (let i = 0; i < len; i++) {
    const char = list[i];
    if (stack.length === 1 && stack[0] === '#') {
      return false
    }
    if (char ==='#' && stack.length) {
      stack.push(char);
      while (stack.length >= 2 && stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#') {
        stack.pop()
        stack.pop()
        stack[stack.length - 1] = '#'
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 1 && stack[0] === '#';
};

/**
 * 这里解释一下为什么下面的代码中 diff 的初始化为 1。
 * 因为，我们加入一个非空节点时，都会对 diff 先减去 1（入度），再加上 2（出度）。
 * 但是由于根节点没有父节点，所以其入度为 0，出度为 2。
 * 因此 diff 初始化为 1，是为了在加入根节点的时候，diff 先减去 1（入度），再加上 2（出度），此时 diff 正好应该是2.
 * @param preorder
 * @returns {boolean}
 */
const isValidSerialization1 = (preorder) => {
  const list = preorder.split(',');
  const len = list.length;
  let diff = 1
  for (let i = 0; i < len; i++) {
    const char = list[i];
    diff -= 1;
    if (diff < 0) {
      return false
    }
    if (char !== '#') {
      diff += 2
    }
  }
  return diff === 0
}

const test1 = "9,3,4,#,#,1,#,#,2,#,6,#,#"
console.log('-----------------')
console.log(isValidSerialization(test1))
console.log(isValidSerialization1(test1))

const test2 = "1,#"
console.log('-----------------')
console.log(isValidSerialization(test2))
console.log(isValidSerialization1(test2))

const test3 = "9,#,#,1"
console.log('-----------------')
console.log(isValidSerialization(test3))
console.log(isValidSerialization1(test3))

const test4 = "1,#,#,#,#"
console.log('-----------------')
console.log(isValidSerialization(test4))
console.log(isValidSerialization1(test4))

const test5 = '#'
console.log('-----------------')
console.log(isValidSerialization(test5))
console.log(isValidSerialization1(test5))

const test6 = "7,2,#,2,#,#,#,6,#"
console.log('-----------------')
console.log(isValidSerialization(test6))
console.log(isValidSerialization1(test6))
