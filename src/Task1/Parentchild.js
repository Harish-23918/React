import React from 'react';

class ParentToChild extends React.Component {

    state = {
        age: 10,
        name: 'harish',
        phnum: 902684346
    }
    render() {
        return (
            <div>
                <Child age={this.state.age} name={this.state.name} />
                <Child2 age={this.state.age} name={this.state.name} phnum={this.state.phnum} />
            </div>
        )
    }
}
export default ParentToChild;


class Child extends React.Component {
    render() {

        return (
            <div>
                <p>age: {this.props.age}</p>
                <p>name: {this.props.name}</p>
            </div>
        )
    }
}

class Child2 extends React.Component {
    render() {

        return (
            <div>
                <p>age: {this.props.age}</p>
                <p>name: {this.props.name}</p>
                <p>phnum: {this.props.phnum}</p>
            </div>
        )
    }
}