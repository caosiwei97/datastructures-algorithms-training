function insertSort(array: number[]): void {
  const { length } = array
  for (let i = 1; i < length; i++) {
    const cur = array[i]
    let j = i - 1
    for (; j >= 0; --j) {
      if (array[j] > cur) {
        array[j + 1] = array[j]
      } else {
        break
      }
    }
    array[j + 1] = cur
  }
}
