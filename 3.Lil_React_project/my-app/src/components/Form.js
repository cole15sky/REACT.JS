import React from 'react'


function handleRegister(event){
    event.preventDefault();  //Don't reload the screen on calling function. 
    console.log("Hello Check form");
}

function Form(){
    return(
        <div>
            <form>
            <input type='email' placeholder='Enter your email'></input>
            <button onClick={handleRegister}>Submit.</button>


            </form>
        </div>
    )
}






export default Form;