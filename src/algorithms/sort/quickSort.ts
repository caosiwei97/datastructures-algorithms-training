import { Compare, defaultCompare, ICompareFunction, swap } from '../../util'

function quick(array: number[], left: number, right: number, compareFn: ICompareFunction<number>) {
  let index
  if (array.length > 1) {
    index = getPivot(array, left, right, compareFn)
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn)
    }
    if (index < right) {
      quick(array, index, right, compareFn)
    }
  }
  return array
}

function getPivot(
  array: number[],
  left: number,
  right: number,
  compareFn: ICompareFunction<number>
): number {
  const pivot = array[Math.floor((left + right) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  return i
}

export function quickSort(array: number[], compareFn = defaultCompare): number[] {
  return quick(array, 0, array.length - 1, compareFn)
}
