// 单链表中的节点
export class Node<T> {
  constructor(public element: T, public next?: Node<T>) {}
}

// 双向链表节点
export class DoublyNode<T> extends Node<T> {
  constructor(public element: T, public pre?: DoublyNode<T>, public next?: DoublyNode<T>) {
    super(element, next)
  }
}
