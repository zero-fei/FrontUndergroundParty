// 定义链表
const arr = [1, 2, 3, 4, 5]
function Node (val) {
  this.val = val
  this.next = null
}

function List (array) {
  this.head = null
  let i = 0, temp = null
  while (i < array.length) {
    if (i === 0) {
      this.head = new Node(array[i])
      temp = this.head
    } else {
      let newNode = new Node(array[i])
      temp.next = newNode
      temp = temp.next
    }
    i++
  }
}

const val = new List(arr)

// 反转链表  - 遍历链表的方式
const reverseList = (head) => {
  // null或下一个节点为null可返回了
  if (!head || !head.next) return head
  let pre = null // 记录上一个节点
  let cur = head // 记录游标节点
  while (cur) {
    const temp = cur.next // 记录下一个节点
    cur.next = pre // 每个节点的下一个指向上一个，第一个指向null
    pre = cur // pre 重新指向当前节点
    cur = temp // 游标走到下一个节点，一直到null
  }
  return pre
}

const aa = reverseList(val.head)

console.info(aa)
