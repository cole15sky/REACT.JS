import React from 'react'
// function Greet(){
//     return <h1> Hello I'm learing React.</h1>
// }

const Greet = (props) => {
    const {name,heroName} = props
    // console.log(props)
    return(
        <div>
            <h1>
                Hello I'm {name} also known as {heroName}
            </h1>
        </div>
    )
}
   


export default Greet
