import React from 'react'
import {AiFillYoutube,AiOutlineUser} from "react-icons/ai"


export default function Home() {
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
          
        </div>
        <div c>
          <div className ='w-60 h-40 bg-sky-400'>aa</div>
        </div>
      </div>
      
    </div>
  )
}
