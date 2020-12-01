import React from 'react';

class ChildToParent extends React.Component {
    state = {

    }
    getData(age, name) {

        this.setState({
            age: age,
            name: name
        })
    }

    render() {
        return (
            <div>
                <label>Name:</label>
                <input type="text" value={this.state.name}></input><br></br>
                <label>Age:</label>
                <input type="text" value={this.state.age}></input>
                <Child3 onChange={this.getData.bind(this)} />
            </div>
        )
    }

}
export default ChildToParent;


class Child3 extends React.Component {

    state = {
        name: 'harish',
        age: '23',
    }

    onClickListener = () => {
        this.props.onChange(this.state.age, this.state.name)
    }

    render() {
        return (

            <div>
                <button onClick={this.onClickListener}>send data
                </button>
            </div>
        )
    }
}