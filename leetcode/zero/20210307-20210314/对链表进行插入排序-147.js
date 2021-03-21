function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (head === null) {
    return head // 链表为空直接返回
  }
  const dummyHead = new ListNode(0); // 作用类似null节点
  dummyHead.next = head; // 初始next指向head
  let lastSorted = head, curr = head.next; // 初始化节点
  while (curr !== null) {
    if (lastSorted.val <= curr.val) { // curr应该lastSorted后面 
      lastSorted = lastSorted.next; // 将lastSorted后移一位,curr变成新的lastSorted
    } else {
      let prev = dummyHead; // 从链表头开始遍历 prev是插入节点curr位置的前一个节点
      while (prev.next.val <= curr.val) { // 循环退出的条件是找到curr应该插入的位置
        prev = prev.next;
      }
       // 以下三行是为了完成对curr的插入
      lastSorted.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
    }
    curr = lastSorted.next;
  }       
  return dummyHead.next
};