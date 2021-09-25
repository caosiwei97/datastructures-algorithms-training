import LRUCache from '../../../src/algorithms/other/LRUCache'

let lRUCache: LRUCache

beforeAll(() => {
  lRUCache = new LRUCache(2)
})

test('cache capacity: 2', () => {
  expect(lRUCache.capacity).toBe(2)
})

test('cache put: 1', () => {
  expect(lRUCache.put(1, 1)).toBe(undefined)
})

test('cache put: 2', () => {
  expect(lRUCache.put(2, 2)).toBe(undefined)
})

test('cache get: 1', () => {
  expect(lRUCache.get(1)).toBe(1)
})

test('cache put: 3', () => {
  expect(lRUCache.put(3, 3)).toBe(undefined)
})

test('cache get: 2', () => {
  expect(lRUCache.get(2)).toBe(-1)
})

test('cache put: 4', () => {
  expect(lRUCache.put(4, 4)).toBe(undefined)
})

test('cache get: 1', () => {
  expect(lRUCache.get(1)).toBe(-1)
})

test('cache get: 3', () => {
  expect(lRUCache.get(3)).toBe(3)
})

test('cache get: 4', () => {
  expect(lRUCache.get(4)).toBe(4)
})
