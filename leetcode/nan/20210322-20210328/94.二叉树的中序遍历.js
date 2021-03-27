var inorderTraversal = function (root) {
  const stack = []
  const vals = []
  let cur = root
  while (cur) {
    stack.push(cur)
    cur = cur.left
  }
  while (stack.length) {
    cur = stack.pop()
    vals.push(cur.val)
    if (cur.right) {
      cur = cur.right
      while (cur) {
        stack.push(cur)
        cur = cur.left
      }
    }
  }
  return vals
};