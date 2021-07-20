import { Compare, defaultCompare, ICompareFunction } from '../util'
import { Node } from './models/node'

type INode<T> = Node<T> | null
export default class BinarySearchTree<T> {
  protected root: INode<T> = null

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

  // 中序遍历方式遍历所有节点。
  inOrderTraverse(callback: (param: T) => any) {
    this.inOrderTraverseNode(this.root, callback)
  }

  protected inOrderTraverseNode(node: INode<T>, callback: (param: T) => any) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 先序遍历方式遍历所有节点
  preOrderTraverse(callback: (param: T) => any) {
    this.preOrderTraverseNode(this.root, callback)
  }

  protected preOrderTraverseNode(node: INode<T>, callback: (param: T) => any) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  // 后序遍历方式遍历所有节点
  postOrderTraverse(callback: (param: T) => any) {
    this.postOrderTraverseNode(this.root, callback)
  }

  protected postOrderTraverseNode(node: INode<T>, callback: (param: T) => any) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  // 树中最小的值/键
  min() {
    return this.minNode(this.root)
  }

  protected minNode(node: INode<T>) {
    let current = node
    while (current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }

  /// 树中最大的值/键
  max() {
    return this.maxNode(this.root)
  }

  protected maxNode(node: INode<T>) {
    let current = node
    while (current !== null && current.right !== null) {
      current = current.right
    }
    return current
  }

  // 查找一个键。如果节点存在，则返回 true；如果不存在，则返回false
  search(key: T): boolean {
    return this.searchNode(this.root, key)
  }

  protected searchNode(node: INode<T>, key: T): boolean {
    if (node === null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    }
    return true
  }

  // 移除某个节点
  remove(key: T) {
    return this.removeNode(this.root, key)
  }

  protected removeNode(node: INode<T>, key: T): INode<T> {
    if (node === null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 找到值了
      // 移除叶节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      // 移除只有一个子节点的节点
      if (node.left === null) {
        node = node.right
        return node
      }
      if (node.right === null) {
        node = node.left
        return node
      }
      // 移除有两个子节点的节点
      // 找到该节点右子节点及后代最小的节点进行替换
      const rightMinNode = this.minNode(node.right) as Node<T>

      node.key = rightMinNode.key
      // 移除最小节点
      node.right = this.removeNode(node.right, rightMinNode.key)
      return node
    }
  }
}
