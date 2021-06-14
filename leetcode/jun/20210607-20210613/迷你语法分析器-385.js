/**
 * 主要注意点是构造NestedInteger要与题目一致
 */
// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
function NestedInteger() {
  this._integer = null
  this._list = null
  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  // @return {boolean}
  this.isInteger = function() {
    return !!this._integer
  };

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  // @return {integer}
  this.getInteger = function() {
    return this._integer || null
  };

  // Set this NestedInteger to hold a single integer equal to value.
  // @return {void}
  this.setInteger = function(value) {
    this._integer = value
  };

    // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
    // @return {void}
    this.add = function(elem) {
      if (this._list === null) {
        this._list = []
      }
      this._list.push(elem)
    };

    // Return the nested list that this NestedInteger holds, if it holds a nested list
    // Return null if this NestedInteger holds a single integer
    // @return {NestedInteger[]}
    this.getList = function() {
      return this._list
    };
};

/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  let stack = [];
  let str = '';
  for (let i = 0; i < s.length; i++) {
    const ele = s.charAt(i)
    console.log(ele)
    switch (ele) {
      case '[':
       stack.push(new NestedInteger())
        break;
      case ']':
        console.log(str)
        if (str) {
          const $ele = new NestedInteger()
          $ele.setInteger(str)
          stack[stack.length - 1].add($ele)
          str = ''
        }
        if (stack.length > 1) {
          const back = stack.pop();
          console.log(back)
          stack[stack.length - 1].add(back)
        }
        break;
      case ',':
        if (str) {
          const $ele = new NestedInteger()
          $ele.setInteger(str)
          stack[stack.length - 1].add($ele)
          str = '';
        }
        break;
      default:
        str += ele
    }
  }
  if (str) {
    const $ele = new NestedInteger()
    $ele.setInteger(str)
    stack.push($ele)
  }
  return stack[0]
};