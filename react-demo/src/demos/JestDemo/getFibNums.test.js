import { getFibNums } from './getFibNums'

//  you can have multiple expect in a single test case
// as long as you keep your unit tests atomic
test('base numbers', () => {
    expect(getFibNums(0)).toBe(0)
    expect(getFibNums(1)).toBe(1)
})

test('common case', () => {
    expect(getFibNums(4)).toBe(3)
    expect(getFibNums(10)).toBe(55)
})

// edge case
test('fib of -1', () => {
    expect(() => getFibNums(-1)).toThrow()
})
