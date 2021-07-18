export default class Deque<T> {
  private items: any
  private count: number
  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0 // 控制队列大小
    this.lowestCount = 0 // 记录队列开头位置
  }

  // 在双端队列前端添加新的元素。
  addFront(element: T) {
    // 队列为空的情况
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      // 队列前端已经有元素删除的情况
      this.items[--this.lowestCount] = element
    } else {
      // 在队列第一个位置插入
      // 将队列往后挪一位。从后面开始循环防止数值丢失
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      // 腾出的第一位给新加入的元素
      this.items[0] = element
      this.lowestCount = 0
      this.count++
    }
  }

  // 在双端队列后端添加新的元素
  addBack(element: T) {
    this.items[this.count++] = element
  }

  // 从双端队列前端移除第一个元素
  removeFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    const value = this.items[this.lowestCount]
    delete this.items[this.lowestCount++]
    return value
  }

  removeBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    const value = this.items[this.count - 1]
    delete this.items[--this.count]
    return value
  }

  // 返回双端队列前端的第一个元素
  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  // 该方法返回双端队列后端的第一个元素
  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
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
