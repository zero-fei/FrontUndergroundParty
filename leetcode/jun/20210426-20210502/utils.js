function TreeNode (val) {
  this.val = val
  this.left = null
  this.right = null
}

const generateTree = (list) => {
  let root = null, _l = [], _curIndex = 0, index = 0;
  while (index < list.length) {
    const curVal = list[index];
    if (_l.length) {
      const cur = _l[_curIndex]
      const curNode = new TreeNode(curVal)
      if (!cur.left) {
        cur.left = curNode
      } else {
        cur.right = curNode
        _curIndex++
      }
      if (curVal !== null) {
        _l.push(curNode)
      }
    } else {
      root = new TreeNode(curVal)
      _l.push(root)
    }
    index++;
  }
  return root
}

module.exports = {
  generateTree
}

// const test1 = [1, null, 3, 2]
// const test2 = [1, 2, 3, 4, 5, 6, 7, 8]
//
// const result1 = generateTree(test1)
// const result2 = generateTree(test2)
//
// console.log(result1)
// console.log(result2)
