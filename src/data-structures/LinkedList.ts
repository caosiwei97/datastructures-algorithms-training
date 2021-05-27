import { Node } from './models/linked-list-models'
import { defaultEquals, IEqualsFunction } from '../util'

export default class LinkedList<T> {
  protected count = 0
  protected head: Node<T> | undefined

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {}

  /**
   * 向链表尾部添加一个元素
   * @param element 要添加的元素
   */
  push(element: T) {
    // 要插入的新节点
    const node = new Node(element)
    // 当前指针（引用）
    let current

    // 链表为空的清空
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  /**
   * 删除某个位置的节点
   * @param index 某个位置
   */
  removeAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let current = this.head

      if (index === 0) {
        this.head = current?.next
      } else {
        // 找到要删除节点的上一个元素
        const previousNode = this.getElementAt(index - 1)
        if (previousNode) {
          current = previousNode?.next
          previousNode.next = current?.next
        }
      }
      this.count--
      return current?.element
    }
    return undefined
  }

  /**
   * 在某个位置插入一个元素
   * @param element 要插入的元素
   * @param index 要插入的位置
   */
  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      // 插入第一个位置或最后一个位置
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        // 在中间某个位置插入
        const previousNode = this.getElementAt(index - 1)
        if (previousNode) {
          node.next = previousNode.next
          previousNode.next = node
        }
      }
      this.count++
      return true
    }
    return false
  }

  /**
   * 获取某个位置的节点
   * @param index 要查找的位置
   * @returns {Node}
   */
  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head

      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  /**
   * 获取节点的位置
   * @param element 要查找的节点
   * @returns {index} 查找节点的位置
   */
  indexOf(element: T) {
    let current = this.head

    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  /**
   * 移除某个元素
   * @param element
   * @returns
   */
  remove(element: T) {
    // 查找该元素的位置
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  /**
   * 链表是否为空
   * @returns
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 链表长度
   * @returns
   */
  size() {
    return this.count
  }

  /**
   * 获取头节点
   * @returns
   */
  getHead() {
    return this.head
  }

  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next

    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}
