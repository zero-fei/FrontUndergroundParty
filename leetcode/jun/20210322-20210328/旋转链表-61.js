/**
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 *
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 *
 * 误解：以为是循环链表
 * 解法一： 记住链表长度，取余后获取新的head  ×
 *
 * 正确：
 * 解法一：取余后重构链表
 * 解法二：取余后移动链表节点
 *
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 *
 * 解法一
 * @param {ListNode} head
 * @param {number} k [0, 2 * 10^9]
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0) {
    return head;
  }
  const stack = [];
  let cur = head;
  while (cur) {
    // 队列有数据且已经遍历回到头部
    if (stack.length && stack[0] === cur) {
      cur = null;
    } else {
      stack.push(cur);
      cur = cur.next;
    }
  }
  console.log(stack);
  const realK = k % stack.length;
  return createList(stack.slice(stack.length - realK).concat(stack.slice(0, stack.length - realK + 1)).map(item =>item.val))
};

/**
 *
 * 解法二
 * @param {ListNode} head
 * @param {number} k [0, 2 * 10^9]
 * @return {ListNode}
 */
var rotateRight2 = function(head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }
  let cur = head;
  let n = 1;
  while (cur.next) {
    n++;
    cur = cur.next
  }
  console.log(n);
  let left = n - k % n;
  // 取余后为0，即k次右移之后回到原先head节点
  if (left === n) {
    return head
  }

  // 先造环 后解环
  cur.next = head
  while (left) {
    cur = cur.next // 节点左移
    left--;
  }

  const result = cur.next;
  cur.next = null; // 解环

  return result;
};


/**
 *
 * @param {number}val [-100, 100]
 * @param {ListNode}next
 * @constructor
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function createList(list) {
  let head = null;
  let cur = head;
  let val = list.shift();
  while (val !== undefined) {
    if (!head) {
      head = new ListNode(Number(val), null)
      cur = head;
    } else {
      cur.next = new ListNode(Number(val), null)
      cur = cur.next
    }
    val = list.shift();
  }
  // cur.next = head;
  return head;
}

const test1 = [1,2,3,4,5], k1 = 2;
const test2 = [0,1,2], k2 = 4;

const testList = createList(test1)
console.log(testList);
const result = rotateRight2(testList, k1);
console.log(result)
