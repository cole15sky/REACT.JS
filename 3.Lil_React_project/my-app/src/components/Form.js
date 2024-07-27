import React from 'react'


function handleRegister(event) {
    event.preventDefault();  //Don't reload the screen on calling function. 
    console.log("Hello Check form");


}

let age = 20;
let emailId ="cole15sky.com";


function Form() {
    return (

        <form>
            {/* Conditional Statement */}

            {age > 18 && emailId =='cole15sky'? (
                <div>
                    <input type='email' placeholder='Enter your email'></input>
                    <button onClick={handleRegister}>Submit.</button>
                </div>

            ) : (
            <h1> You are kiddo boi.</h1>

        )};

        </form>

    )
}






export default Form;