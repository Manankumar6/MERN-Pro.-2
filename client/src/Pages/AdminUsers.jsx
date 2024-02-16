import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import   {Link} from 'react-router-dom'
const AdminUsers = () => {

    const [users, setUsers] = useState([])
    const { authorizationToken,URL } = useAuth();
    const getAllUsersData = async () => {
        try {
            const response = await fetch(`${URL}/api/admin/users`, {
                method: "GET",
                headers: {
                    authorization: authorizationToken,
                }

            });

            const data = await response.json()
          
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }

    // Deleteuser using delete btn
    const deleteUser = async (id) => {
        
        try {
            const response = await fetch(`${URL}/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: authorizationToken,
                }

            });

            const data = await response.json()
            console.log(data)
            if(response.ok){
                setUsers(data)
                getAllUsersData()
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllUsersData()
        // eslint-disable-next-line 
    }, [])

return (


    
    <>
        <section className='admin-users-section'>
            <div className="container">
                <h1>Admin User Panel</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users && users.map((curr, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{curr.username}</td>
                                    <td>{curr.email}</td>
                                    <td>{curr.phone}</td>
                                    <td><Link to={`/admin/users/${curr._id}/edit`}>Edit</Link></td>
                                    <td><button onClick={() => deleteUser(curr._id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    </>



)
}

export default AdminUsers
