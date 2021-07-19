import { Compare, defaultCompare, ICompareFunction } from '../util'
import { Node } from './models/node'

export default class BinarySearchTree<T> {
  protected root: Node<T> | null = null

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {}

  // 插入一个新的键
  insert(key: T) {
    // 判断根节点是否存在
    if (this.root === null) {
      // 创建根节点
      this.root = new Node<T>(key)
    } else {
      // 调用辅助方法插入节点
      this.inserNode(this.root, key)
    }
  }

  protected inserNode(node: Node<T>, key: T) {
    // 将节点的键与根节点进行比较
    // 比较的方式需要使用compareFn来进行比较，因为值可能是一个引用类型
    if (this.compareFn(node.key, key) === Compare.BIGGER_THAN) {
      // 插入左边节点
      // 判断左边节点是否为空
      if (node.left === null) {
        node.left = new Node<T>(key)
      } else {
        // 不为空递归
        this.inserNode(node.left, key)
      }
    } else if (this.compareFn(node.key, key) === Compare.LESS_THAN) {
      // 插入右边节点
      if (node.right === null) {
        node.right = new Node<T>(key)
      } else {
        // 不为空递归
        this.inserNode(node.right, key)
      }
    }
  }

  // 查找一个键。如果节点存在，则返回 true；如果不存在，则返回false
  // search(key: T): boolean

  // 中序遍历方式遍历所有节点。
  inOrderTraverse(callback: (param: T) => any) {
    this.inOrderTraverseNode(this.root, callback)
  }

  protected inOrderTraverseNode(node: Node<T> | null, callback: (param: T) => any) {
    if (node !== null) {
      // 递归遍历左节点
      this.inOrderTraverseNode(node.left, callback)
      // 遍历根节点
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 先序遍历方式遍历所有节点
  // preOrderTraverse()

  // 后序遍历方式遍历所有节点
  // postOrderTraverse()

  // 树中最小的值/键
  // min()

  // 树中最大的值/键
  // max()

  // 从树中移除某个键
  // remove(key)
}
