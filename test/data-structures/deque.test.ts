import { Deque } from '../../src/index'

const queue = new Deque<string>()

test('queue: isEmpty', () => {
  expect(queue.isEmpty()).toBe(true)
})

test('queue: enqueue & toString', () => {
  queue.addBack('John')
  queue.addBack('Jack')
  expect(queue.toString()).toBe('John,Jack')
})

test('queue: size&isEmpty', () => {
  queue.addBack('Camila')
  expect(queue.toString()).toBe('John,Jack,Camila')
  expect(queue.size()).toBe(3)
  expect(queue.isEmpty()).toBe(false)
  expect(queue.removeFront()).toBe('John')
  expect(queue.toString()).toBe('Jack,Camila')
})

test('queue: pop&size', () => {
  queue.removeBack() // 移除 Camila
  expect(queue.toString()).toBe('Jack')
})

test('queue: add', () => {
  queue.addFront('John')
  expect(queue.toString()).toBe('John,Jack')
})

test('queue: clear', () => {
  queue.clear()
  queue.addFront('John')
  queue.addFront('Jack')
  expect(queue.toString()).toBe('Jack,John')
})

test('queue: undefined', () => {
  queue.clear()
  expect(queue.removeFront()).toBe(undefined)
  expect(queue.removeBack()).toBe(undefined)
  expect(queue.peekFront()).toBe(undefined)
  expect(queue.peekBack()).toBe(undefined)
  expect(queue.toString()).toBe('')
})

test('queue: peek', () => {
  queue.addFront('John')
  expect(queue.peekFront()).toBe('John')
  expect(queue.peekBack()).toBe('John')
})
