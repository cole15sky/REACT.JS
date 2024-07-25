import React from 'react'
// function Greet(){
//     return <h1> Hello I'm learing React.</h1>
// }

const Greet = ({name,heroName}) => {
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
