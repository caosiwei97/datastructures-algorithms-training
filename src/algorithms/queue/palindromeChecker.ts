import { Deque } from '../../index'

function palindromeChecker(str: string): boolean {
  // 判断是否为合法字符串
  if (str == null || !str.length) return false

  const queue = new Deque<string>()
  let isEqual = true
  str = str.toLowerCase().split(' ').join('')
  // 入队
  for (let i = 0; i < str.length; i++) {
    queue.addBack(str[i])
  }
  // 判断是否为回文字符
  while (queue.size() > 1 && isEqual) {
    const first = queue.removeFront()
    const last = queue.removeBack()

    if (first !== last) {
      isEqual = false
    }
  }

  return isEqual
}

export { palindromeChecker }
