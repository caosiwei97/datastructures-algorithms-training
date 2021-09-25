// 实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

// https://leetcode-cn.com/problems/lru-cache/

/**
 * 算法思路：
 * 1.数据被访问时删除原来位置，将该数据挪到最前面
 * 2.数据更新时：
 *  2.1 数据存在 -> 更新值
 *  2.2 数据不存在：
 *    2.2.1 缓存满了 -> 删除尾部最后一个值，将最新的值放到最前面
 *    2.2.2 没满 -> 直接放到最前面
 * 3. 使用 Map 存储，访问时间复杂度O(1)
 */
class LRUCache extends Map {
  constructor(public capacity: number) {
    super()
  }

  get(key: number): number {
    if (this.has(key)) {
      const value = super.get(key)
      this.delete(key)
      this.set(key, value)
      return value
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this.has(key)) {
      this.delete(key)
    }
    if (this.size > this.capacity) {
      this.delete(this.keys().next().value)
    }
    this.set(key, value)
  }
}

export default LRUCache
