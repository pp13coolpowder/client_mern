import React, { useEffect } from 'react'
import Footerweb from '../componants/Footerweb'
import Navbarweb from '../componants/Navbarweb'
import { auth_f } from '../logic/function'

export default function Store() {

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
      
      <Footerweb />
    </section>
  )
}
