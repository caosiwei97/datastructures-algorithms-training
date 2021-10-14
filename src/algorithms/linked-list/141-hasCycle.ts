class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0
    this.next = next || null
  }
}

// 解法一：记录所有以访问的节点，当当前访问节点已经存在集合时，说明有环。
function hasCycle1(head: ListNode | null): boolean {
  // 边界条件判断: 链表节点为空 or 只有一个节点的时候肯定不是环
  if (head === null || head.next === null) return false
  const set = new Set()
  if (head !== null) {
    if (set.has(head)) return true
    set.add(head)
    head = head.next
  }
  return false
}

// 解法二：快慢指针法

function hasCycle2(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false
  let slow = head
  let fast = head.next

  while (slow !== fast) {
    if (fast === null || fast.next === null) return false
    fast = fast.next.next!
    slow = slow.next!
  }
  return true
}
