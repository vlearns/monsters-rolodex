import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }

    handleCommentsChange = (event) => {
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
        event.preventDefault() //Prevent the default behaviour of form submission
    }

    render() {
        //Destructure state properties in the render method (Code Cleanup so that you don't have to keep writting "this.state")
        const {username, comments, topic} = this.state
        return (

            // //Regular HTML Form
            // <form>
            //     <div>
            //         <label>Username</label>
            //         <input type='text' />
            //     </div>
            // </form>

            //Controlled React Component
            //Create a state
            //Handling the onChange event

            //Controlled Component Form
            <form onSubmit={this.handleSubmit}>
                {/* Input Element */}
                <div>
                    <label>Username</label>
                    {/* Don't necessarily need "this.state." in value={this.state.username} */}
                    <input type='text' value={username}  onChange={this.handleUsernameChange} /> 
                </div>
                {/* Text Area */}
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange} ></textarea>
                </div>
                {/* Select Tag */}
                <div>
                    <lable>Topic</lable>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="view">View</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>

        )
    }
}

export default Form
