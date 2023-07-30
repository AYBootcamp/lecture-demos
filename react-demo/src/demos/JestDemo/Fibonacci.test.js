import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Fibonacci from './Fibonacci'
import { getFibNums } from './getFibNums'

// jest.mock('./getFibNums', () => {
//     const actualMathModule = jest.requireActual('./getFibNums')
//     return {
//         ...actualMathModule,
//         getFibNums: jest.fn().mockReturnValue(0),
//     }
// })

jest.mock('./getFibNums')
test('should render without error', () => {
    render(<Fibonacci />)
})

// Since we tested getFibNums, we only need to verify it's being used in this component
test('getFibNums is called correctly', async () => {
    // mock return value
    getFibNums.mockReturnValue(0)

    // trigger getFibNums
    render(<Fibonacci />)
    const GetFibButton = await screen.getByTestId('get-fib-btn')
    await userEvent.click(GetFibButton)
    const Results = await screen.getByTestId('results')

    // assert mock return and called times
    expect(Results).toHaveTextContent('0')
    expect(getFibNums).toHaveBeenCalledTimes(1)
})
