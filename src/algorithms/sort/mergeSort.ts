import { Compare, defaultCompare, ICompareFunction } from '../../util'

function merge(left: number[], right: number[], compareFn: ICompareFunction<number>) {
  let i = 0
  let j = 0
  const result = []

  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++])
  }
  return result.concat(i < left.length ? left.slice(i) : right[j])
}

export function mergeSort(array: number[], compareFn = defaultCompare): number[] {
  if (array.length > 1) {
    const { length } = array
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle, length))
    return merge(left, right, compareFn)
  }
  return array
}
