import React, { useEffect } from 'react'
import Footerweb from '../componants/Footerweb'
import Navbarweb from '../componants/Navbarweb'
import { auth_f } from '../logic/function'


export default function Home() {
  useEffect(() => {
    const token = localStorage.token_id
    auth_f(token)
      .then((res) => {
        if (res.data.status === 'ok') { console.log(res) }
        else { localStorage.clear(); window.location = '/' }
      })
      .catch((error) => { console.error('Error', error) })
  }, [])

  return (
    <section className='bg-zinc-700 h-screen'>
      <Navbarweb />

      <form className=' m-5 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        <p className='flex justify-end'>
        <button className='mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Post</button>
        </p>
      </form>

      <Footerweb />
    </section>
  )
}
