import React, { useEffect, useState } from 'react'
import { login_f } from '../logic/function'
import { auth_f } from '../logic/function'


export default function Login() {
  useEffect(() => {
    const token = localStorage.token_id
    auth_f(token)
      .then((res) => {
        if (res.data.status === 'ok') { window.location = '/Home' }
      })
      .catch((error) => { console.error('Error', error) })
  }, [])

  const [log, setlog] = useState({
    email: '',
    password: ''
  })

  const handlechang = (e) => {
    setlog({ ...log, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    login_f(log)
      .then((res) => {
        window.location = '/Home';
        localStorage.setItem('token_id', res.data.token)
      })
      .catch((err) => { alert(err.response.data) })
  }

  return (
    <section className='h-screen bg-zinc-700 flex justify-center items-center'>
      <form onSubmit={handlesubmit} className='max-w-sm w-96  p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input onChange={handlechang} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input onChange={handlechang} type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <p className='flex justify-end'> <a href='/Register'><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register</button></a></p>
        <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
      </form>
    </section>
  )
}
