import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
  return (
    <div>
        <h3>Users: {users.length}</h3>
    </div>
  )
}

export default Users

/*

1. Declare a state to hold the data
2. useEffect with callback and dependency array
3. use fetch to load data

*/