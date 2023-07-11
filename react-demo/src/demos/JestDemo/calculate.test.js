import { add } from './calculate'

describe('Add', () => {
    // common case
    test('1 + 1 is 2', () => {
        expect(add(1, 1)).toBe(2)
    })

    // base case
    test('0 + 0 is 0', () => {
        expect(add(0, 0)).toBe(0)
    })

    // edge case
    test('missing parameters', () => {
        expect(add()).toBe(NaN)
    })
})

// TODO: add subtract, divide, multiply test cases
