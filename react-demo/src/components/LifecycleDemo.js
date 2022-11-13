import React from 'react'

import DemoContainer from '../sharedComponents/DemoContainer'

class LifecycleDemo extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            count: 0,
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return state
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        return (
            <DemoContainer>
                <h2>Lifecycle Class Component</h2>
                <span>Count: {this.state.count}</span>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    increase count
                </button>
            </DemoContainer>
        )
    }
}

export default LifecycleDemo
