import { palindromeChecker } from '../../../src/index'

test('a', () => {
  expect(palindromeChecker('a')).toBe(true)
})

test('aa', () => {
  expect(palindromeChecker('aa')).toBe(true)
})

test('kayak', () => {
  expect(palindromeChecker('kayak')).toBe(true)
})

test('level', () => {
  expect(palindromeChecker('level')).toBe(true)
})

test('Was it a car or a cat I saw', () => {
  expect(palindromeChecker('Was it a car or a cat I saw')).toBe(true)
})

test('Step on no pets', () => {
  expect(palindromeChecker('Step on no pets')).toBe(true)
})

test('ac', () => {
  expect(palindromeChecker('ac')).toBe(false)
})
