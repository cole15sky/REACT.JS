import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Guys.'
        }
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button> Check Me!</button>
            </div>

        )
    }
}

export default Message




//step1; create a step objecty and initalize it -> done inside a class constructor.
// within the constructor we use super() method to extend react component and a call has be made to the base class constructor.
// step2; create state object 
// step3; initalize properties and bind the state value in render function.
// Now we got ability to change the message .

//step4; add html to button element.