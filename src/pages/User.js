import React, { useEffect, useState } from 'react'
import Footerweb from '../componants/Footerweb'
import Navbarweb from '../componants/Navbarweb'
import { auth_f, delete_user, eidt_user, list_user } from '../logic/function'
import {Modal } from 'antd';

export default function Inbox() {

  const [data, setdata] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values,setvalues]=useState({
    id:'',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const showModal = (id) => {
    setIsModalOpen(true);
    setvalues({id:id})
  };

  const handlechang = (e) =>{
    setvalues({ ...values, [e.target.name]: e.target.value })
  }

  const handleOk = () => {
    setIsModalOpen(false);
    console.log()
    eidt_user(values.id,values)
    .then(res=>{
      console.log(res)
      window.location='/User'
    }).catch(err=>{
      console.log(err.response)
    })
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const loadData = () => {
    list_user()
      .then(res => {
        setdata(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleRemove = (id) => {
    if (window.confirm('แน่ใจนะ')) { delete_user(id); window.location='/User'}
  }

  useEffect(() => {
    loadData()
    const token = localStorage.token_id
    auth_f(token)
      .then((res) => {
        if (res.data.status === 'ok') { console.log() }
        else { localStorage.clear(); window.location = '/' }
      })
      .catch((error) => { console.error('Error', error) })
  }, [])

  return (
    <section className='bg-zinc-700 h-screen'>
      <Navbarweb />
      <div className="m-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID User
              </th>
              <th scope="col" className="px-6 py-3">
                Firt Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item,index)=>
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item._id}
              </th>
              <td className="px-6 py-4">
                {item.first_name}
              </td>
              <td className="px-6 py-4">
                {item.last_name}
              </td>
              <td className="px-6 py-4">
                {item.email}
              </td>
              <td onClick={()=>showModal(item._id)} className="px-6 py-4 text-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </td>
              <td onClick={() => handleRemove(item._id)} className="px-6 py-4 text-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </td>
            </tr>
           )}
            
          </tbody>
        </table>
        <Modal title="Edit User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="relative z-0 w-full mb-6 group">
          <input onChange={handlechang} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input onChange={handlechang} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input onChange={handlechang} type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input onChange={handlechang} type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
          </div>
          </div>
      </Modal>
      </div>
      <Footerweb />
    </section>
  )
}
