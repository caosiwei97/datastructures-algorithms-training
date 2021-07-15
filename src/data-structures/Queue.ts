export default class Queue<T> {
  private items: any
  private count: number
  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0 // 控制队列大小
    this.lowestCount = 0 // 记录队列开头位置
  }

  // 入队
  enqueue(element: T) {
    this.items[this.count++] = element
  }

  // 出队
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    const value = this.items[this.lowestCount]
    delete this.items[this.lowestCount++]
    return value
  }

  // 查看队列顶端元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  // 判断队列是否为空
  isEmpty() {
    return this.size() === 0
  }

  // 返回队列的大小
  size() {
    return this.count - this.lowestCount
  }

  // 清空队列
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`

    // 循环拼接字符串
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
