class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0
    this.next = next || null
  }
}

// 解法一： 迭代。
// 使用双指针 pre -> 指向前一个节点 cur 指向当前节点。
// 让 cur.next 指向 pre
// 迭代前先保存 cur 原先的 下一个节点引用，否则会断掉链表
export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null
  let cur = head

  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
}

// 解法二：递归。
// 将大问题拆分为子问题，每次只反转两个。
export function reverseList2(head: ListNode | null): ListNode | null {
  // 递归结束条件
  if (head === null || head.next === null) return head
  // 递归
  const p = reverseList2(head.next)
  // 两个节点之间反转
  head.next.next = head
  head.next = null
  return p
}
