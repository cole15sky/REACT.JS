import React from 'react'

function UserList() {

let data = [
    {
        name: "David",
        email: "david@gmail.com",
        rollNo: "12",
    },
    {
        name: "Reck",
        email: "reck@gmail.com",
        rollNo: "9",
    },
    {
        name: "Saimon",
        email: "saimon@gmail.com",
        rollNo: "5",
    },

];

  return (
    <div>
        {data.map(({name,email,rollNo}) =>(
                <div>
        <h1>{name}</h1>
        <p>{rollNo}</p>
        <p>{email}</p>
        </div>

            ))}
        
    </div>
  )
}

export default UserList;
