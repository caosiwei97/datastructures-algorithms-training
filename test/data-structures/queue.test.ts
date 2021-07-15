import { Queue } from '../../src/index'

const queue = new Queue<string>()

test('queue: isEmpty', () => {
  expect(queue.isEmpty()).toBe(true)
})

test('queue: enqueue & toString', () => {
  queue.enqueue('John')
  queue.enqueue('Jack')
  expect(queue.toString()).toBe('John,Jack')
})

test('queue: size&isEmpty', () => {
  queue.enqueue('Camila')
  expect(queue.toString()).toBe('John,Jack,Camila')
  expect(queue.size()).toBe(3)
  expect(queue.isEmpty()).toBe(false)
  expect(queue.peek()).toBe('John')
})

test('queue: pop&size', () => {
  queue.dequeue() // 移除 John
  queue.dequeue() // 移除 Jack
  expect(queue.toString()).toBe('Camila')
})

test('queue: clear', () => {
  queue.clear()
  expect(queue.size()).toBe(0)
})

test('queue: undefined', () => {
  expect(queue.dequeue()).toBe(undefined)
  expect(queue.peek()).toBe(undefined)
  expect(queue.toString()).toBe('')
})
