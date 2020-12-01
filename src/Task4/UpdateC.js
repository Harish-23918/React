import React, { Component } from 'react'

export class UpdateC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Harish'
        }
        console.log('Child constructor invoke')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Child getDerivedStateFromProps invoke')
        return null
    }

    componentDidMount() {
        console.log('Child componentdidmount invoked')
    }

    shouldComponentUpdate(){
        console.log('Child shouldComponentUpdate invoked')
        return true
    }
    getSnapshotBeforeUpdate(preProps, preState){
console.log('Child getSnapshotBeforeUpdate invoked')
return null
    }
    componentDidUpdate(){
        console.log('Child componentDidUpdate invoked')
    }


    render() {
        console.log('Child render invoke')
        return (

            <div>
                <h1>{this.state.name} this is life cycle example</h1>
            </div>
        )
    }
}

export default UpdateC
