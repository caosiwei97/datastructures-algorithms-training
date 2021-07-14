import { Stack } from '../../index'

export function toBinary(num: number, base = 2): string {
  const stack = new Stack<number>()
  let dividend = num
  // 2-36进制表示
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // 入栈
  while (dividend !== 0) {
    stack.push(Math.floor(dividend % base))
    dividend = Math.floor(dividend / base)
  }

  // 出战
  let result = ''

  while (!stack.isEmpty()) {
    result += digits[stack.pop()]
  }
  return result
}
