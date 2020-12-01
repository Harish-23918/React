import React, { Component } from 'react'

export default class IfelseEx1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogging: true
        }
    }

    render() {
        if (this.state.isLogging) {
            return (
                <div>Welcome..react</div>
            )
        }
        else {
            return (
                <div>
                    welcome harish
                </div>
            )
        }
    }
}
