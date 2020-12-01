import React from 'react';
export default class Child extends React.Component {
    render() {
        console.log('child rendered');
        return (
            <div>
                <h1>{this.props.message}</h1>
            </div>
        );
    }
}