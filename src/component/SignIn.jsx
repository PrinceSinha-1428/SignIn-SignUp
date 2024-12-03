import React, { useState } from 'react'

const SignIn = ({user,setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = ()=>{
        console.log(username);
        console.log(password);
        setUsername('');
        setPassword('');
    }
    const changeUser = ()=>{
        setUser("new")
    }
    document.title = "Sign In"
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen '>
        <div className='relative'>
        <div className='absolute h-[540px] w-[463px] bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-2xl blur-2xl'></div>
        <div className='relative flex flex-col border border-purple-600 p-20 rounded-2xl drop-shadow-lg bg-black'>
            <div className='mb-10'>
            <h1 className='text-4xl text-center font-bold text-white '>Sign In</h1>
            </div>
            <div className='flex flex-col'>
                <label className='text-white text-2xl font-bold mb-2 ' htmlFor="Username">Username:</label>
                <input
                value={username}
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                placeholder='Enter username here...' type="text" className='text-white pl-4 rounded-xl bg-transparent border border-gray-300 h-[35px] w-[300px] placeholder:pl-0.5 ' />
            </div>
            <div className=' flex flex-col mt-4'>
                <label className='text-white text-2xl font-bold mb-2' htmlFor="Password">Password:</label>
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                placeholder='Enter password here...' type="password" className='text-white pl-4 rounded-xl bg-transparent border border-gray-300 h-[35px] w-[300px] placeholder:pl-0.5 ' />
            </div>
            <div className='flex items-center justify-center mt-10'>
            <button onClick={handleClick} className='bg-purple-600 w-full h-12 rounded-full text-white text-xl font-bold hover:bg-purple-800'>Sign In</button>
            </div>
            <div onClick={changeUser}   className='text-center text-white mt-4'>
            <h1 className='hover:text-violet-500 hover:cursor-pointer'>Don't have an account?</h1>
        </div>
        </div>
        </div>
    </div>
  )
}

export default SignIn
