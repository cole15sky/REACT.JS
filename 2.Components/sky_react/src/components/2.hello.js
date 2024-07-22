import React from 'react'

const Hello = () =>{
//     return(
//         <div className ='dummyClass>
//             <h1> Hey,this is Aakash.</h1>
//         </div>
//     )
// 
return React.createElement('div',
    {id:'hello', className:'dummyClass'},
    React.createElement('h1',null,'Hello, this is Aakash')
)

}
export default Hello


// Basically each jsx element is just syntatic sugar for calling react.create element
// And that is why we need to import the react library when we use jsx.
//JSX translates into react.create element which in turn uses the react library.



//-----------JSX differences 
// class -> className
// for -> htmlFor
// CamelCase property naming convention
// . onclick -> onClick
