import React, { Component } from 'react'

export default class ElementVariable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogging: true
        }
    }

    render() {
        let message;
        if (this.state.isLogging) {
               message= <div>Welcome..react</div>
        }
        else {
            message= <div>Welcome..harish</div>
        }
            return (
                <div>
                   {message}
                </div>
            )
        
    }
}
