import React, { Component } from 'react'
import UpdateC from './UpdateC'

export class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Harish'
        }
        console.log('Parent constructor invoke')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Parent getDerivedStateFromProps invoke')
        return null
    }

    componentDidMount() {
        console.log('Parent componentdidmount invoked')
    }

    shouldComponentUpdate(){
        console.log('Parent shouldComponentUpdate invoked')
        return true
    }
    getSnapshotBeforeUpdate(preProps, preState){
console.log('Parent getSnapshotBeforeUpdate invoked')
return null
    }
    componentDidUpdate(){
        console.log('Parent componentDidUpdate invoked')
    }
    changeState=()=>{
this.setState({
    name:'hai..'
})
    }

    render() {
        console.log('Parent render invoke')
        return (

            <div>
                <h1>{this.state.name} this is life cycle example</h1>
                <button onClick={this.changeState}>update</button>
                <br></br>
                <UpdateC />
            </div>
        )
    }
}

export default Update
