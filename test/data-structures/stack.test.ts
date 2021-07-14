import { Stack } from '../../src/index'

const stack = new Stack<number>()

test('stack: isEmpty', () => {
  expect(stack.isEmpty()).toBe(true)
})

test('stack: peek', () => {
  stack.push(5)
  stack.push(8)
  expect(stack.peek()).toBe(8)
})

test('stack: size&isEmpty', () => {
  stack.push(11)
  expect(stack.size()).toBe(3)
  expect(stack.isEmpty()).toBe(false)
})

test('stack: pop&size', () => {
  stack.push(15)
  stack.pop()
  stack.pop()
  expect(stack.size()).toBe(2)
})

test('stack: toString', () => {
  expect(stack.toString()).toBe('5,8')
})

test('stack: clear', () => {
  stack.clear()
  expect(stack.size()).toBe(0)
})

test('stack: empty', () => {
  stack.clear()
  expect(stack.toString()).toBe('')
})
