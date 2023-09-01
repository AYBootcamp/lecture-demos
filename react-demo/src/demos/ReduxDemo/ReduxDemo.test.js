import '@testing-library/jest-dom'

import { getByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider, useSelector } from 'react-redux'

import ReduxDemo from './ReduxDemo'
import store from './store'

const customRender = (ui, options = {}) => {
    const Wrapper = ({ children }) => (
        <Provider store={store}>{children}</Provider>
    )

    return render(ui, { wrapper: Wrapper, ...options })
}

describe('Rendering with Wrapper', () => {
    // * First, write basic test with native `render` function
    // test('it should render without error', () => {
    //     expect(render(<ReduxDemo />)).not.toThrow()
    // })
    // -> Saw that exception thrown with no react-redux context - need Provider
    // * Then, we write `customRender` to wrap Provider context
    test('it should render without error', () => {
        expect(() => customRender(<ReduxDemo />)).not.toThrow()
    })
})

describe('Test redux dispatch actions', () => {
    test('Increase count', async () => {
        customRender(<ReduxDemo />)
        const increaseBtn = await screen.findByTestId('increase-btn')
        await userEvent.click(increaseBtn)

        // test UI is updated
        const count = await screen.findByTestId('count')
        expect(count).toHaveTextContent('current count is: 1')
    })
})
