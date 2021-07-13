import { StackArray } from '../../src/index'

const stackArray = new StackArray()

test('stack-array: isEmpty', () => {
  expect(stackArray.isEmpty()).toBe(true)
})

test('stack-array: peek', () => {
  stackArray.push(5)
  stackArray.push(8)
  expect(stackArray.peek()).toBe(8)
})

test('stack-array: size&isEmpty', () => {
  stackArray.push(11)
  expect(stackArray.size()).toBe(3)
  expect(stackArray.isEmpty()).toBe(false)
})

test('stack-array: pop&size', () => {
  stackArray.push(15)
  stackArray.pop()
  stackArray.pop()
  expect(stackArray.size()).toBe(2)
})

test('stack-array: clear', () => {
  stackArray.clear()
  expect(stackArray.size()).toBe(0)
})
