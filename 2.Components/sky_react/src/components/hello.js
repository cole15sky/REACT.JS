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