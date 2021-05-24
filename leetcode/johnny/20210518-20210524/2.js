/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


const node1 = new ListNode(2)
const node2 = new ListNode(4)
const node3 = new ListNode(3)
const node4 = new ListNode(5)
const node5 = new ListNode(6)
const node6 = new ListNode(4)
node1.next = node2
node2.next = node3
node4.next = node5
node5.next = node6



var addTwoNumbers = function(l1, l2) {
    let str = ''
    let needAddOne = false
    let link1 = l1
    let link2 = l2
    while(link1 && link2) {
        let num = Number(link1.val) + Number(link2.val) + (needAddOne ? 1:0)
        if (num > 9) {
            needAddOne  = true
            num = Math.floor(num % 10)
        } else {
            needAddOne = false
        }
        str += num
        link1 = link1.next
        link2 = link2.next
    }
    while(link1) {
        let num = Number(link1.val) + (needAddOne ? 1:0)
        if (num > 9) {
            needAddOne  = true
            num = Math.floor(num % 10)
        } else {
            needAddOne = false
        }
        str += num
        link1 = link1.next
    }
    while(link2) {
        let num = Number(link2.val) + (needAddOne ? 1:0)
        if (num > 9) {
            needAddOne  = true
            num = Math.floor(num % 10)
        } else {
            needAddOne = false
        }
        str += num
        link2 = link2.next
    }
    if (needAddOne) {
        str+=1
    }
    const root = new ListNode(0)
    let node = root
    let i = 0
    while(i<str.length) {
        node.next = new ListNode(str[i])
        node = node.next
        i++
    }
    return root.next
};

console.log(addTwoNumbers(node1, node4))