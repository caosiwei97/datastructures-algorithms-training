export default class StackArray<T> {
  private items: T[]

  constructor() {
    this.items = []
  }

  // 入栈
  push(element: T) {
    this.items.push(element)
  }

  // 出栈
  pop() {
    return this.items.pop()
  }

  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }

  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0
  }

  // 返回栈的大小
  size() {
    return this.items.length
  }

  // 清空栈
  clear() {
    this.items.length = 0
  }
}
