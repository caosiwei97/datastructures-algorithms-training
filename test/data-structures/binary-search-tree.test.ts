import { BinarySearchTree } from '../../src/index'

const tree = new BinarySearchTree<number>()
const print = (value: number) => console.log(value)

test('BinarySearchTree: insert', () => {
  tree.insert(11)
  tree.insert(7)
  tree.insert(15)
  tree.insert(5)
  tree.insert(3)
  tree.insert(9)
  tree.insert(8)
  tree.insert(10)
  tree.insert(13)
  tree.insert(12)
  tree.insert(14)
  tree.insert(20)
  tree.insert(18)
  tree.insert(25)
  tree.insert(6)
  tree.inOrderTraverse(print)
  // expect(tree.inOrderTraverse(print)).toBe(
  //   [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25].forEach(print)
  // )
})
