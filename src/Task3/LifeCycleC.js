import React, { Component } from 'react'

export class LifeCycleC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Harish'
        }
        console.log('child constructor invoke')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('child getDerivedStateFromProps invoke')
        return null
    }

    componentDidMount() {
        console.log('child componentdidmount invoked')
        setTimeout(() => {
            this.setState({
                name: "hello..set name using didmount"
              })
          }, 1000)
    }

    render() {
        console.log('child render invoke')
        return (

            <div>
                <h1> {this.state.name} this is child example</h1>
            </div>
        )
    }
}

export default LifeCycleC
