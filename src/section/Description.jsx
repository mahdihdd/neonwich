import React from 'react'
import { usePost } from '../context/PostProvider'
export default function Description() {
  const {descript} = usePost()
  // console.log(descript);
  return (
    <div ref={descript} className='flex flex-col md:flex-row gap-[200px] mt-10 justify-center items-center h-[680px] border-2 rounded-xl m-3'>
        <div>image</div>
        <div><p className='text-right'>hello my name is the mahdi haddad, I am a front end developer, I studied at IKIU, I am happy</p></div>
    </div>
  )
}
