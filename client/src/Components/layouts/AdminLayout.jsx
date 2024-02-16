import React from 'react'

import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { FaUsers   } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

import { useAuth } from '../../store/auth';

const AdminLayout = () => {
  const {user,isLoading} = useAuth();


  if(isLoading){
    return <h1>Loading...</h1>
  }
    
  if(!user.isAdmin){
    return <Navigate to="/" />
  }



  return (<>

    <header>

      <div className='container'>
        <nav>
          <ul>
            <li><NavLink to='/admin/users'><FaUsers />
              Users</NavLink></li>
            <li><NavLink to='/admin/contacts'><MdContacts />Contacts</NavLink></li>
           

          </ul>
        </nav>

      </div>
    </header>
    <Outlet />
  </>
  )
}

export default AdminLayout;
