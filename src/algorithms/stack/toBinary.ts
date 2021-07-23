import { Stack } from '../../index'

export function toBinary(num: number, base = 2): string {
  const stack = new Stack<number>()
  let divided = num
  // 2-36进制表示
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // 入栈
  while (divided !== 0) {
    stack.push(Math.floor(divided % base))
    divided = Math.floor(divided / base)
  }

  // 出栈
  let result = ''

  while (!stack.isEmpty()) {
    result += digits[stack.pop()]
  }
  return result
}
