// 方法1
var subsetsWithDup = function (nums) {
  const res = []
  nums.sort()
  const set = new Set()
  const dfs = (stack, index) => {
    const str = stack.join('+')
    if (!set.has(str)) {
      res.push(stack.slice())
      set.add(str)
    }
    for (let i = index + 1; i < nums.length; i++) {
      stack.push(nums[i])
      dfs(stack, i)
      stack.pop()
    }
  }
  dfs([], -1)
  return res
};

// 方法2
var subsetsWithDup = function (nums) {
  const res = []
  nums.sort((a, b) => a - b)

  const dfs = (stack, index) => {
    res.push(stack.slice())
    for (let i = index; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && i > index)
        continue
      stack.push(nums[i])
      dfs(stack, i + 1)
      stack.pop()
    }
  }

  dfs([], 0)
  return res
};