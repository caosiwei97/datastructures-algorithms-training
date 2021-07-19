// 树的节点
export class Node<K> {
  // 左右节点的引用
  left: Node<K> | null = null
  right: Node<K> | null = null

  // 节点的值
  constructor(public key: K) {}

  toString() {
    return `${this.key}`
  }
}
