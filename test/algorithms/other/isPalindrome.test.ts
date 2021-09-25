import isPalindrome from '../../../src/algorithms/other/isPalindrome'

test('1221', () => {
  expect(isPalindrome(1221)).toBe(true)
})

test('12321', () => {
  expect(isPalindrome(12321)).toBe(true)
})

test('-12321', () => {
  expect(isPalindrome(-12321)).toBe(false)
})

test('123210', () => {
  expect(isPalindrome(123210)).toBe(false)
})
