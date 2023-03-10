import axios from "axios"

export const regis_f =async(value)=>
await axios.post(process.env.REACT_APP_API+'/register',value)

export const login_f =async(value)=>
await axios.post(process.env.REACT_APP_API+'/login',value)

export const auth_f = async(id_token)=>
await axios.post(process.env.REACT_APP_API+'/Auth',{},
    { headers:{id_token} })

export const list_user = async()=>
 await axios.get(process.env.REACT_APP_API+'/user')
    
 export const delete_user = async(id)=>
 await axios.delete(process.env.REACT_APP_API+'/user/'+id,)

 export const eidt_user =async(id,value)=> 
 await axios.put(process.env.REACT_APP_API+'/user/'+id,value)
