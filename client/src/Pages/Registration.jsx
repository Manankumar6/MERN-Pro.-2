import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';


const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ''
  })

  const {storetokenLs,URL} = useAuth()
  const navigate = useNavigate()
  const handleInput = (event) => {
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)
    try {
      const response = await fetch( `${URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });
      console.log(response)
      if (!response.ok) {
        // Check for client or server errors
        if (response.status >= 400 && response.status < 500) {
          // Client error (4xx)
          const errorData = await response.json();
          console.log("Client error:", errorData);
        } else if (response.status >= 500) {
          // Server error (5xx)
          console.log("Server error:", response.statusText);
        }
      } else {
   
        // Request was successful
        const responseData = await response.json();
        console.log("Registration successful:", responseData);
        setUser({
          username: "", email: "", phone: "", password: ''
        });
        storetokenLs(responseData.token)
        toast.success("Registration Successfully")
        navigate('/login')
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }

  }
  return (
    <div>
      <section>
        <main>
          <div className="section_registration">
            <div className="container grid grid-two-cols">
              <div className="registration_image">
                <img src="image/register.avif" alt="registration_img" width='400' height='500' />
              </div>
              <div className="registration_form">
                <h1 className="main_heading mb-3">Registration Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='user name'
                      id='username' required value={user.username} onChange={handleInput} />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='Enter email'
                      id='email' required value={user.email} onChange={handleInput} />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name='phone' placeholder='Enter phone number'
                      id='phone' required value={user.phone} onChange={handleInput} autoComplete='off' />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter password '
                      id='password' required value={user.password} onChange={handleInput} />
                  </div>
                  <br />
                  <button type='submit' className='btn btn_submit'>Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Registration
