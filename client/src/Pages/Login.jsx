import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [user, setUser] = useState({
    email: "",
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

    try {
      const response = await fetch(`${URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });
    
      const responseData = await response.json();

      if (response.ok) {
      console.log("response data",responseData)
      setUser({
        email: "",
        password: ''
        })
        storetokenLs(responseData.token)
        toast.success("login successfully")
        navigate('/')
      } else {
        // Request was successful
     
        toast.error(responseData.extraDetails?responseData.extraDetails:responseData.message)
     
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
                <h1 className="main_heading mb-3">Login Form</h1>
                <br />

                <form onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='Enter email'
                      id='email' required value={user.email} onChange={handleInput} />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter password '
                      id='password' required value={user.password} onChange={handleInput} />
                  </div>
                  <br />
                  <button type='submit' className='btn btn_submit'>Login</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Login
