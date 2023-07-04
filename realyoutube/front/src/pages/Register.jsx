import React from 'react'
import {AiFillYoutube,AiOutlineUser} from "react-icons/ai"


export const Register = () => {
  return (
    <div className ='bg-black h-screen'>
      <div className = 'w-10/12 mx-auto items-center'>
        <div className = 'bg-black text-white flex flex-row border-b items-center justify-between'>
          <div className = 'text-5xl  flex items-center'>
            <div className ='text-red-500'>
              <AiFillYoutube/>
            </div>
            <div className ='text-3xl font-bold'>
              Youtube
            </div>
          </div>
          <div className =  'flex space-x-2' >
            <div className = 'text-4xl'>
              <AiOutlineUser/>
            </div>
            <div className = 'text-2xl'>
              LogOut
            </div>
          </div>
        </div>
        <div>
          <div className = 'form'>
            <div className = 'md:w-1/2 mx-auto mt-20 rounded bg-slate-800'>
              <form className='flex flex-col space-y-5 rounded p-10'>
                <label className ='text-white'htmlFor="username">Username</label>
                <input className='p-3 rounded outline-none' type ='text' placeholder='Write a Username' id='username'/>
                <label className ='text-white'htmlFor="email">Email</label>
                <input className='p-3 rounded outline-none' type ='text' placeholder='Write a Email'/>
                <label className ='text-white'htmlFor="password">Password</label>
                <input className='p-3 rounded outline-none' type ='text' placeholder='Write a Password'/>
                <button className= 'w-72 text-white text-center text-2xl rounded-md cursor-pointer hover:bg-white hover:text-black bg-black p-3 mx-auto'>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
