import React, { useState } from 'react'


function handleRegister(event) {
    event.preventDefault();  //Don't reload the screen on calling function. 
    console.log("Hello Check form");
}
console.log(email);

Const [email,setEmail] = useState();

function Form() {
    return (

        <form>
                <div>
                    <input type='email' placeholder='Enter your email'>
                    value ={email}
                    onChange={(e) => setEmail(e.target.value)}
                    </input>
                    <input type='password' placeholder='Enter the password'></input>
                    <button onClick={handleRegister}>Submit.</button>
                </div>


        </form>

    );
}


export default Form;