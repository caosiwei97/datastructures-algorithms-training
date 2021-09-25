export { default as StackArray } from './data-structures/StackArray'
export { default as Stack } from './data-structures/Stack'
export { default as Queue } from './data-structures/Queue'
export { default as Deque } from './data-structures/Deque'

type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

type MyRequired<T> = {
  [K in keyof T]-?: T[K]
}

interface Foo {
  name: string
  age?: number
}

const foo: MyPartial<Foo> = {
  name: 'cao',
  age: 12
}

const arr: Array<Required<Foo>> = [
  {
    name: 'cao',
    age: 12
  }
]
