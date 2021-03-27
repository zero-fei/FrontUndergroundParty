var deleteDuplicates = function (head) {
  const temp = new ListNode(0, head)
  let cur = head
  let pre = temp
  while (cur) {
    let someSame = false
    while (cur.next && cur.val === cur.next.val) {
      someSame = true
      cur = cur.next
    }
    if (someSame) {
      pre.next = cur.next
      cur = cur.next
    } else {
      pre = cur
      cur = cur.next
    }
  }
  return temp.next
};