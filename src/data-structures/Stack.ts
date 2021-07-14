export default class Stack<T> {
  private items: any
  private count: number

  constructor() {
    this.items = {}
    this.count = 0 // 记录栈的大小
  }

  // 入栈
  push(element: T) {
    this.items[this.count++] = element
  }

  // 出栈
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    const popValue = this.items[--this.count]
    delete this.items[this.count]
    return popValue
  }

  // 查看栈顶元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  // 判断栈是否为空
  isEmpty() {
    return this.count === 0
  }

  // 返回栈的大小
  size() {
    return this.count
  }

  // 清空栈
  clear() {
    while (!this.isEmpty()) {
      delete this.items[--this.count]
    }
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`

    // 循环拼接字符串
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
