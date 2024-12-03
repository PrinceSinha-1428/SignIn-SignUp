import React, { useState } from 'react'

const SignUp = ({setUser}) => {
    document.title = "Sign Up"
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const verification = ()=>{
        if(password !=confirmPassword)
            alert("Confirm Your password")
    }

    const handleClick = ()=>{
        console.log(email);
        console.log(password);
        verification();
        setEmail('');
        setPassword('');
        setConfirmPassword('');

    }
    const changeUser = ()=>{
        setUser("old")
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen '>
     <div className='relative'>  
    <div className='absolute h-[620px] w-[470px] bg-gradient-to-t from-violet-500 to-fuchsia-500  rounded-2xl blur-2xl'></div>
    <div className='relative flex flex-col border border-purple-600 p-20 rounded-2xl bg-black '>
        <div className='mb-10'>
        <h1 className='text-4xl text-center font-bold text-white '>Sign Up</h1>
        </div>
        <div className='flex gap-4 flex-col'>
            <div className='flex flex-col'>
                <label className='text-white text-2xl font-bold mb-2 ' htmlFor="Username">E-mail:</label>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                 required placeholder='Enter email here...' type="email" className='text-white pl-4 rounded-xl bg-transparent border  border-gray-300 h-[35px] w-[300px] placeholder:pl-0.5 ' />
            </div>
            <div className='flex flex-col'>
                <label className='text-white text-2xl font-bold mb-2 ' htmlFor="Username">Password:</label>
                <input
                 value={password}
                 onChange={(e)=>{
                     setPassword(e.target.value)
                 }}
                required placeholder='Enter password here...' type="text" className='text-white pl-4 rounded-xl bg-transparent border border-gray-300 h-[35px] w-[300px] placeholder:pl-0.5 ' />
            </div>
            <div className='flex flex-col'>
                <label className='text-white text-2xl font-bold mb-2 ' htmlFor="Username">Confirm password:</label>
                <input
                 value={confirmPassword}
                 onChange={(e)=>{
                     setConfirmPassword(e.target.value)
                     
                 }}
                required placeholder='Confirm Password here...' type="text" className='text-white pl-4 rounded-xl bg-transparent border border-gray-300 h-[35px] w-[300px] placeholder:pl-0.5 ' />
            </div>
        </div> 
        <div className='flex items-center justify-center mt-6'>
        <button onClick={handleClick}  className='bg-purple-600 w-full h-12 rounded-full text-white text-xl font-bold hover:bg-purple-800'>Sign Up</button>
        </div>
        <div onClick={changeUser}   className='text-center text-white mt-4'>
            <h1 className='hover:text-violet-500 hover:cursor-pointer'>Already have an account?</h1>
        </div>
    </div>
    </div>
</div>
  )
}

export default SignUp
