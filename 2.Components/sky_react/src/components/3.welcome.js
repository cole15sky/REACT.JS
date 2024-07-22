//whenever we create a class component wee need to include 2imports 
//i.e (React and component class from react as; and we define the class)
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Class Components.</h1>;
    }
}

export default Welcome;