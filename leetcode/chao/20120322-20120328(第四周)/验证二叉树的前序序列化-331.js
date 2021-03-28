/**
 * 例如，上面的二叉树可以被序列化为字符串 "9,3,4,#,#,1,#,#,2,#,6,#,#"，其中 # 代表一个空节点。
    给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。
    每个以逗号分隔的字符或为一个整数或为一个表示 null 指针的 '#' 。
    你可以认为输入格式总是有效的，例如它永远不会包含两个连续的逗号，比如 "1,,3" 。
 * 
 */

/**
 * @param {string} preorder
 * @return {boolean}
 */

// 栈--维护每个点槽位的数量
const isValidSerialization1 = function(preorder) {
  const targetArr = preorder.split(",");
  const stack = [], len = targetArr.length
  stack.push(1)
  for(let i = 0 ; i < len; i++) {
    if(stack.length === 0) {
      return false
    }
    let top = stack[stack.length-1]
    if(targetArr[i] === '#') { // 如果是空位置，栈顶值-1
      stack[stack.length-1] -= 1
      if(stack[stack.length-1] === 0) {
        stack.pop()
      }
    }else { // 如果是数字， 栈顶值-1， 压入新的计数2
      stack[stack.length-1] -= 1
      if(stack[stack.length-1] === 0) {
        stack.pop()
      }
      stack.push(2)
    }
  }
  return stack.length === 0
}



// 栈 优化-- 计算整体的槽位数量,本质上就是计算出入度
// 出入度 
// 入度：多少个结点指向它 出度: 它指向多少个节点
// 图和二叉树中，所有节点的入度之和等于出度之和
// diff为出度与入度的差值，每加入一个非空节点，入度+1，出度+2； 根节点入度为0， diff初始值应该为1 
const isValidSerialization2 = function(preorder) {
  const targetArr = preorder.split(",");
  const len = targetArr.length
  let diff = 1
  for(let i = 0; i < len; i++) {
    if(diff <= 0) {
      return false
    }
    if(targetArr[i] === '#') {
      diff--
    }else {
      diff++
    }
  }
  return diff === 0
}


const testStr1 = "9,3,4,#,#,1,#,#,2,#,6,#,#"
const testStr2 = "#,7,6,9,#,#,#"
const testStr3 = "1,#,#,#,#"
console.log(isValidSerialization1(testStr1))
console.log(isValidSerialization1(testStr2))
console.log(isValidSerialization1(testStr3))

console.log(isValidSerialization2(testStr1))
console.log(isValidSerialization2(testStr2))
console.log(isValidSerialization2(testStr3))
