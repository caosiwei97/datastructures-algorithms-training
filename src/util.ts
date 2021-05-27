export type IEqualsFunction<T> = (a: T, b: T) => boolean

export function defaultEquals<T>(a: T, b: T) {
  return a === b
}
