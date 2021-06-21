
// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
function NestedInteger(val) {
  this.val = val
  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  // @return {boolean}
  this.isInteger = function() {
      return typeof this.val === "number"
  };

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  // @return {integer}
  this.getInteger = function() {
      if (this.isInteger()) {
        return this.val
      }
      return null
  };

  // Return the nested list that this NestedInteger holds, if it holds a nested list
  // Return null if this NestedInteger holds a single integer
  // @return {NestedInteger[]}
  this.getList = function() {
      if (this.isInteger()) {
        return null
      }
      return this.val
  };
};

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.val = [];
  this.index = 0;
  const dfs = (nestedList) => {
    for (let i = 0; i < nestedList.length; i++) {
      const net = nestedList[i];
      if (net.isInteger()) {
        this.val.push(net.getInteger())
      } else {
        dfs(net.getList())
      }
    }
  }
  dfs(nestedList)
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this.index < this.val.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  return this.val[this.index++]
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

const generateNestedList = function (list) {
  const dfs = (list) => {
    const result = [];
    for (let i = 0; i < list.length; i++) {
      const net = list[i];
      result.push(new NestedInteger(typeof net === "number" ? net : dfs(net)))
    }
    return result
  }
  return dfs(list)
}

const getNestedIterator = (nestedList) => {
  const i = new NestedIterator(nestedList);
  const a = [];
  while (i.hasNext()) {
    a.push(i.next())
  }
  return a
}

const test1 = [[1,1],2,[1,1]]
const _test1 = generateNestedList(test1)
// console.log(_test1)
console.log(getNestedIterator(_test1))
const test2 = [1,[4,[6]]]
const _test2 = generateNestedList(test2)
// console.log(_test2)
console.log(getNestedIterator(_test2))
