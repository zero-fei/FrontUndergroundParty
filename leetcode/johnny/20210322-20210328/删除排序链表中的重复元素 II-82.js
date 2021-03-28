/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) {
    return null
  }
  const root = new ListNode()
  root.next = head
  let pre = root
  let isRepeat = false
  while(head.next) {
    const curVal = head.next.val
    const preVal = head.val
    if (curVal !== preVal) {
      if (!isRepeat) {
        pre.next = head  
        pre = head
      }
      isRepeat = false
    } else {
      isRepeat = true
      pre.next = null
    }
    head = head.next
  }
  if (!isRepeat) {
    pre.next = head
  }
  return root.next
};