import PropTypes from 'prop-types'
import React from 'react'

import DemoContainer from '../sharedComponents/DemoContainer'

class LifecycleDemo extends React.Component {
    constructor(props) {
        console.log('constructor', { props })
        super(props)
        this.state = {
            count: 0,
            showMessage: false,
        }
        console.log('end of constructor', { state: this.state })
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps initial values: ', {
            props,
            state,
        })
        return {
            ...state,
            count: state.count === 0 ? props.initialCount : state.count,
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', { nextProps, nextState })
        return nextState.count % 10 !== 0
    }

    componentDidUpdate(prevProps, prevState) {
        // show message if next count will be 10s.
        if (
            (this.state.count + 1) % 10 === 0 &&
            this.state.showMessage === false
        ) {
            this.setState({ showMessage: true })
        }
        if (
            (this.state.count + 1) % 10 !== 0 &&
            this.state.showMessage === true
        ) {
            this.setState({ showMessage: false })
        }
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render', { state: this.state })
        return (
            <DemoContainer>
                <h2>Lifecycle Class Component</h2>
                <span>Count: {this.state.count}</span>
                <p> notes: inital value: 5, skip 10s</p>
                {this.state.showMessage &&
                    'Next number can be divided by 10! Skipping that number'}
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

LifecycleDemo.propTypes = {
    initialCount: PropTypes.number,
}

export default LifecycleDemo
