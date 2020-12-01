import React, { Component } from 'react'

export default class TerneryOperators extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogging: true
        }
    }

    render() {
        // return this.state.isLogging ? 
        // (<div>Welcome..react</div>) : (
        //     <div>Welcome..harish</div>)
            return this.state.isLogging && <div>Welcome..harish</div>
    }
    
}
