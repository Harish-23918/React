import React, { Component } from 'react'
import LifeCycleC from './LifeCycleC'

export class LifeCycleP extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Harish'
        }
        console.log('Parent constructor invoke')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Parent getDerivedStateFromProps invoke')
        return {
            name: props.name
        }
    }

    componentDidMount() {
        console.log('Parent componentdidmount invoked')
    }

    render() {
        console.log('Parent render invoke')
        return (

            <div>
                <h1>{this.state.name} this is life cycle example</h1>
                <br></br>
                <LifeCycleC />
            </div>
        )
    }
}

export default LifeCycleP
