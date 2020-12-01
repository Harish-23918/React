import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'React',
        }
    }
    handleUsename = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    hangleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <lable>UserName</lable>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsename}
                    />
                    <br></br>
                    <lable>Comments</lable>
                    <textarea
                        type="text"
                        value={this.state.comments}
                        onChange={this.hangleCommentsChange}></textarea>
                    <br></br>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option valu="angular">angular</option>
                        <option value="java">java</option>
                    </select>
                    <br></br>
                    <button type="submit">Submit</button>
                </div>
            </form>

        )
    }
}
