import React from 'react';
import Child from './Child';

export default class ExampleClass1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            message: "hii..Harish"
        }
    }

    handleClick = () => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
    };

    render() {
        console.log('parent rendered');
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <br />
                <Child message={this.state.message} />
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

