import { toBinary } from '../../../src/algorithms/stack/toBinary'

test('tobinary:2', () => {
  expect(toBinary(10)).toBe('1010')
  expect(toBinary(2)).toBe('10')
  expect(toBinary(1000)).toBe('1111101000')
  expect(toBinary(233)).toBe('11101001')
})

test('tobinary:8', () => {
  expect(toBinary(100345, 8)).toBe('303771')
})

test('tobinary:16', () => {
  expect(toBinary(100345, 16)).toBe('187F9')
})

test('tobinary:35', () => {
  expect(toBinary(100345, 35)).toBe('2BW0')
})
