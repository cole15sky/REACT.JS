import React from 'react'
// function Greet(){
//     return <h1> Hello I'm learing React.</h1>
// }

const Greet = (props) => {
    console.log(props)
    return(
        <div>
            <h1>
                Hello I'm {props.name} also known as {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}
   


//NOTE: Here, we are exporting components as default export from practice.js
//This is what allows us to import the component with any name.


export default Greet;
