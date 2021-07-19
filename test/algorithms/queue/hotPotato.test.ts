import { hotPotato } from '../../../src/index'

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']

test('hotPotato:7', () => {
  const result = hotPotato(names, 7)
  expect(result.winner).toBe('John')
  expect(result.elimitatedList.toString()).toEqual(['Camila', 'Jack', 'Carl', 'Ingrid'].toString())
})
