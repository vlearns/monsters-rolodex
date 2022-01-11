// 54. Asynchronous setState
import React, { Component } from 'react'

//State updates are asynchronous
// You determind whether or not you need a second parameter

class State extends Component {
    constructor(props) { //pass props here only if you need to use this.props inside the constructor
        super(props)     //pass props here only if you need to use this.props inside the constructor - Always recommended to pass props
        this.state = {
            meaningOfLife: 47 + this.props.increment
        }
        //this.props = props
    }

    //OR without .this and constructor
    state = {
        meaningOfLife: 47
    }


    handleClick = () => {
        //Method 1
        // this.setState({ meaningOfLife: this.state.meaningOfLife + 1}, () => console.log(this.state.meaningOfLife) )

        //Method 2
        //prevState is the same as using this.state
        //prevProps is the same as using this.props
        this.setState((prevState, prevProps) => {
            return { meaningOfLife: prevState.meaningOfLife + prevProps.increment }   //first parameter
        }, 
            () => console.log(this.state.meaningOfLife)             //second parameter
        )
    }
    render() {
        return (
            <div>
                <p>{this.state.meaningOfLife}</p>
                <button onClick={this.handleClick}>Update State</button>
            </div>
        )
    }
}

export default State