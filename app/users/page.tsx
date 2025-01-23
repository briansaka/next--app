
import React from 'react'

interface User {
    id: number;
    name: string;
}

const Userspage = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});
   const users: User[] = await res.json();
  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user=> <tr key={user.id}>
      <th>{user.name}</th>
      <th>{user.name}</th>
      </tr>)}
      </tbody>
       
    </table>
    </>
    
  )
}

export default Userspage