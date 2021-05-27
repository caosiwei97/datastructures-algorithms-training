export default function add(item: number, ...rest: number[]) {
  return rest.reduce((a: number, b: number) => a + b, item)
}
