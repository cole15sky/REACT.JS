import React from 'react'



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