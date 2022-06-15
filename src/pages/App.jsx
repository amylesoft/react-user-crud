import React from 'react'
import CreateUser from '../components/User/CreateUser'
import UserList from '../components/User/UserList'

const App = () => {
  return (
    <div className='header'>
      <div>
        <CreateUser></CreateUser>
        <UserList></UserList>
      </div>

    </div>
  )
}

export default App;