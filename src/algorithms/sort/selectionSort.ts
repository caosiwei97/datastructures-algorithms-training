import { Compare, defaultCompare, swap } from '../../util'

function selectionSort(array: number[], compareFn = defaultCompare) {
  const { length } = array
  let minIndex
  for (let i = 0; i < length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < length; j++) {
      if (compareFn(array[minIndex], array[j]) === Compare.BIGGER_THAN) {
        swap(array, minIndex, j)
      }
    }
  }
  return array
}
