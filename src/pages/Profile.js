import React, { useEffect } from 'react'
import { auth_f } from '../logic/function'

export default function Profile() {

  useEffect(()=>{
    const token = localStorage.token_id
  auth_f(token)
  .then((res)=>{
    if(res.data.status==='ok'){
      console.log(res)
    }
    else{
      localStorage.clear()
      window.location ='/'
    }
  })
  .catch((error)=>{
    console.error('Error',error)
  })
  },[])

  return (
    <div className='h-screen bg-zinc-700 flex justify-center items-center'>
      <section className="w-full max-w-screen-md p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p className='flex justify-center mb-4 '>
          <img className='rounded-full border-4 border-gray-800/100 w-48 h-48' src="https://avatars.githubusercontent.com/u/120770345?s=400&u=23ee2544a857e27b2a6eef474dee2bf750ed0f70&v=4" alt="" />
        </p>
        <h1 className='flex justify-center mb-4'>Phongphath Luangphithak</h1>
        <h1 className='flex justify-center'>Skill</h1>
          <p className='flex justify-center '>HTML CSS JavaScript MongoDB Express React Node</p>
            <h1 className='flex justify-center mt-4'>Certifications</h1>
        <h1 className='flex justify-center -4'>👇👇👇</h1>
          <a className='flex justify-center' href='https://www.freecodecamp.org/certification/Phongphath-Luangphithak/responsive-web-design'>Responsive Web Desingn</a>
          <a className='flex justify-center' href='https://www.freecodecamp.org/certification/Phongphath-Luangphithak/front-end-development-libraries'>Front End development Libraries</a>
          <a className='flex justify-center' href='https://www.freecodecamp.org/certification/Phongphath-Luangphithak/javascript-algorithms-and-data-structures'>JavaScript Algorithms and Data Structures</a>
        <h1 className='flex justify-center mt-4'>Contact Me Click Now</h1>
        <h1 className='flex justify-center mb-4'>👇👇👇</h1>
        <p className='flex justify-center gap-4 mb-4'>
        <a href="https://github.com/pp13coolpowder" className='flex items-center'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              className="mr-1 h-3 sm:h-6"
              alt="Logo" />Linkedin
          </a>
          <a href="https://github.com/pp13coolpowder" className='flex items-center'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              className="mr-1 h-3 sm:h-6"
              alt="Logo" />Gmail
          </a>
          <a href="https://github.com/pp13coolpowder" className='flex items-center'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2504/2504922.png"
              className="mr-1 h-3 sm:h-6"
              alt="Logo" />LINE
          </a>
        </p>
        <p className='flex justify-center gap-4'>
        <a href="https://www.freecodecamp.org/Phongphath-Luangphithak" className='flex items-center'>
            <img
              src="https://d33wubrfki0l68.cloudfront.net/bbfa33a202e8612d49b6c1ed05c1fdd8e4001566/bbdd1/img/fcc_secondary_small.svg"
              className=" h-3 sm:h-6"
              alt="Logo" />Freecodecamp
          </a>
          <a href="https://stackoverflow.com/users/20932162/tompp-lpt" className='flex items-center'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111628.png"
              className="mr-1 h-3 sm:h-6"
              alt="Logo" />StackOverflow
          </a>
          <a href="https://github.com/pp13coolpowder" className='flex items-center'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="mr-1 h-3 sm:h-6"
              alt="Logo" />Github
          </a>
        </p>
      </section>
    </div>
  )
}
