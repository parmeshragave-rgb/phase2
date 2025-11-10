import React, { useEffect } from 'react'
import ZusUsers from './ZusUsers'

function ZusUserList() {
  const { users, loading, error, fetchUsers } = ZusUsers()

  useEffect(() => {fetchUsers()}, [fetchUsers])

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ZusUserList
