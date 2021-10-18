import { Compare, defaultCompare, swap } from '../../util'

export function bubbleSort(array: number[], compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    let hasSorted = true
    for (let j = 0; j < length - i - 1; j++) {
      if (compareFn<number>(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1)
        hasSorted = false
      }
    }
    if (hasSorted) break
  }
}
