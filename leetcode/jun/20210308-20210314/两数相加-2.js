/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 *
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let curNode, result = new ListNode(0), addNum = 0, b1 = l1, b2 = l2;
  while(b1 || b2 || addNum > 0){
    let node = new ListNode(0);
    let val1 = b1 ? b1.val : 0;
    let val2 = b2 ? b2.val : 0;
    b1 = b1 ? b1.next : null;
    b2 = b2 ? b2.next : null;
    node.val = (val1 + val2 + addNum) % 10;
    addNum = parseInt((val1 + val2 + addNum) / 10);
    if(!curNode){
      result.next = node;
    }else{
      curNode.next = node;
    }
    curNode = node;
  }
  return result.next;
};
