import React from 'react'
import UserCard from './UserCard';

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
           <UserCard name={name} email={email} rollNo={rollNo}/>

            ))}
        
    </div>
  )
}

export default UserList;
