import React, { useState } from 'react'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'


const App = () => {
  const [user, setUser] = useState('');
  return (
    <div className='bg-black'>
      {user == "old" ? <SignIn user={user} setUser={setUser}  /> : <SignUp user={user} setUser={setUser} />}
    </div>
  )
}

export default App
