// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// https://leetcode-cn.com/problems/palindrome-number/
export default function isPalindrome(x: number): boolean {
  // 边界判断：负数、个位数为0的一定不是回文数
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false

  // 存储反转数字，从个位数开始
  // 当反转的数字与原来的数字相同时说明循环到了中间位置
  // 避免越界
  let revertedNumber = 0
  while (revertedNumber < x) {
    // 个位数 * 10 + 十位数 => 反转数字
    revertedNumber = (x % 10) + revertedNumber * 10
    x = Math.floor(x / 10)
  }
  return revertedNumber === x || Math.floor(revertedNumber / 10) === x
}
