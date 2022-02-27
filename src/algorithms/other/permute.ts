function permute(nums: number[]): number[][] {
  const result: number[][] = []

  function _permute(nums: number[], start: number, end: number) {
    // 只有一个元素
    if (start === end) {
      result.push(Array.from(nums))
    }

    // 1. 遍历数组
    for (let cur = start; cur <= end; cur++) {
      // 2. 当前遍历元素与第一个元素交换
      swap(nums, start, cur)
      // 3. 让剩余元素进行排列
      _permute(nums, start + 1, end)
      // 4. 还原被交换的元素
      swap(nums, start, cur)
    }
  }

  _permute(nums, 0, nums.length - 1)

  return result
}

function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(permute([1, 2, 3, 4]))
