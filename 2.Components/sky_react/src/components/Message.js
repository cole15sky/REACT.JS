import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Guys.'
        }
    }
render (){
    return(
        <h1>
          {this.state.message}
        </h1>
    )
}
}

export default Message




//step1; create a step objecty and initalize it -> done inside a class constructior