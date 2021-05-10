const {generateTree} = require('../utils')

/**
 * 实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：
 * BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
 * boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
 * int next()将指针向右移动，然后返回指针处的数字。
 * 注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。
 *
 * 你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。
 * 方法一： 构造时直接保存中序遍历的结果
 * 方法二： next()时处理中序遍历，用栈去维护
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.index = 0
  this.arr = []
  this.inorderTraversal(root, this.arr)
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  const result = this.arr[this.index]
  this.index += 1;
  return result
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.index < this.arr.length
};

/**
 * 中序遍历
 * @param root
 * @param arr
 * @returns {*[]}
 */
BSTIterator.prototype.inorderTraversal = function(root, arr) {
  if (!root || root.val === null) {
    return
  }
  this.inorderTraversal(root.left, arr)
  arr.push(root.val)
  this.inorderTraversal(root.right, arr)
}

/**
 * @param {TreeNode} root
 */
var BSTIterator1 = function(root) {
  this.stack = []
  this.cur = root
};

/**
 * @return {number}
 */
BSTIterator1.prototype.next = function() {
  while (this.cur && this.cur.val !== null) {
    this.stack.push(this.cur)
    this.cur = this.cur.left
  }
  this.cur = this.stack.pop() // 取最后的左节点
  const result = this.cur.val
  this.cur = this.cur.right
  return result
};

/**
 * @return {boolean}
 */
BSTIterator1.prototype.hasNext = function() {
  return this.cur !== null || this.stack.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const test = [7, 3, 15, null, null, 9, 20]
const testTree = generateTree(test)

const bSTIterator = new BSTIterator1(testTree);
console.log(bSTIterator.next());    // 返回 3
console.log(bSTIterator.next());    // 返回 7
console.log(bSTIterator.hasNext()); // 返回 True
console.log(bSTIterator.next());    // 返回 9
console.log(bSTIterator.hasNext()); // 返回 True
console.log(bSTIterator.next());    // 返回 15
console.log(bSTIterator.hasNext()); // 返回 True
console.log(bSTIterator.next());    // 返回 20
console.log(bSTIterator.hasNext()); // 返回 False
