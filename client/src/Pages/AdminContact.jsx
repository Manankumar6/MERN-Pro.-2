import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
const AdminContact = () => {
  const { authorizationToken,URL } = useAuth()
  const [contactData,setContactData] = useState([]);
  const getContactData = async ()=>{
    try {
      const response = await fetch(`${URL}/api/admin/contact`,{
        method:"GET",
        headers:{
          authorization: authorizationToken,
        }
      })

      const data = await response.json();
 
      console.log(response.ok)
      if(response.ok){
        setContactData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const deleteContactById = async(id)=>{
    try {
      const response = await fetch(`${URL}/api/admin/contact/delete/${id}`,{
        method:"DELETE",
        headers:{
          authorization: authorizationToken,
        }
      })

      if(response.ok){
        getContactData();
        toast.success("Deleted Successfully")
    }else{
        toast.error("No Delete")
    }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getContactData();
    // eslint-disable-next-line
  },[])
  return (
    <>
    <h1 className='container'>Admin contacts details</h1>
    <div className='container grid'>
      {
        contactData.map((curr,ind)=>{
          return (
            
            <div key={ind} className=' '>
              <p>{curr.username}</p>
              <p>{curr.email}</p>
              <p>{curr.message}</p>
            <button className='btn' onClick={()=>{deleteContactById(curr._id)}}>Delete</button>
              </div>
          )
        })
      }
    </div>
              </>
  )
}

export default AdminContact
