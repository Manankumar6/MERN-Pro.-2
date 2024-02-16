import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    });
    const { id } = useParams();
    console.log(id,"params id")
    const { authorizationToken, URL } = useAuth()
    const getSingleUserData = async () => {
        try {
            const response = await fetch(`${URL}/api/admin/users/${id}`, {
                method: "GET",
                headers: {
                    authorization: authorizationToken,
                }
            })
            const data = await response.json();
   
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleUserData()
        // eslint-disable-next-line
    }, [])

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${URL}/api/admin/users/update/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: authorizationToken,
                },
                body: JSON.stringify(data)
            })
            if(response.ok){

                toast.success("Update Successfully")
            }else{
                toast.error("No Updated")
            }
        } catch (error) {

        }
    }
    return (
        <section className='section-contact'>
            <div className="contact-content container">
                <h1 className="main_heading">Updata User Data</h1>
            </div>
            <container className="container grid grid-two-cols">
                <section className='section-form'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text" name='username' onChange={handleInput} value={data.username} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' onChange={handleInput} value={data.email} />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name='phone' onChange={handleInput} value={data.phone} />
                        </div>
                        <div>

                            <button type='submit'>Update</button>
                        </div>
                    </form>
                </section>
            </container>
        </section>
    )
}

export default AdminUpdate
