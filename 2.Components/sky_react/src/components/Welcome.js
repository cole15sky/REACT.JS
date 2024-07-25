//whenever we create a class component wee need to include 2imports 
//i.e (React and component class from react as; and we define the class)
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return (
        <h1>
            Welcome {name} also known as {heroName}</h1>
        )
    }
}



export default Welcome 