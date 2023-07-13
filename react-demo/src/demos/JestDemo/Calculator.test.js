import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Calculator from './Calculator'

test('loads', async () => {
    // ARRANGE
    render(<Calculator />)

    const header = await screen.findByText('Calculator')
    expect(header).toBeInTheDocument()
})

test('renders 1 button', async () => {
    render(<Calculator />)
    const button = await screen.findAllByRole('button')
    expect(button).toHaveLength(1)
})

test('renders 2 inputs', async () => {
    render(<Calculator />)
    const inputs = await screen.findAllByRole('spinbutton')
    expect(inputs).toHaveLength(2)
})

// Advanced
test('enter numbers in input', async () => {
    render(<Calculator />)

    const inputs = screen.getAllByRole('spinbutton')
    const firstInput = inputs[0]
    const secondInput = inputs[1]

    fireEvent.change(firstInput, { target: { valueAsNumber: 20 } })
    expect(firstInput.valueAsNumber).toBe(20)
    fireEvent.change(secondInput, { target: { valueAsNumber: 40 } })
    expect(secondInput.valueAsNumber).toBe(40)
})

test('calculates result', async () => {
    render(<Calculator />)

    const inputs = screen.getAllByRole('spinbutton')
    const firstInput = inputs[0]
    const secondInput = inputs[1]

    fireEvent.change(firstInput, { target: { valueAsNumber: 20 } })
    fireEvent.change(secondInput, { target: { valueAsNumber: 40 } })

    await userEvent.click(screen.getByText('calculate'))
    expect(await screen.getByText(/= 60/i)).toBeInTheDocument()
})
