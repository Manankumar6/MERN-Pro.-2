import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'
const About = () => {
  const {user} = useAuth();

  const [username,setUsername] = useState()
  useEffect(()=>{
    if(user){
      setUsername(user.username)

    }

  },[user])
  const capitalize = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <>
    <main>
      <section className='sectoin_hero'>
        <div className="container grid grid-two-cols">
          <div className="hero_content">
            
          <p>Welcome,{username ? capitalize(username): "to our wwbsite"}</p>
           <h1>Why Choose Us?</h1>
           <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
           <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
           <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
           <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
            <div className="btn btn_group">
              <NavLink to='/contact'>
                <button className='btn'>Contact now </button>
              </NavLink>
              <NavLink to='/service'>
                <button className='btn secondary-btn'>Learn more </button>
              </NavLink>
            </div>
          </div>

      {/* {Image} */}

      <div className="hero_image">
        <img src="image/home.png" alt="home_image" width='400' height='auto' />
      </div>

        </div>
      </section>
    </main>
    {/* {Second Section} */}
    <section className="section_analytics">
      <div className="container grid grid-four-cols">
        <div className="div1">
          <h2>50+</h2>
          <p>Registered Company</p>
        </div>
        
        <div className="div1">
          <h2>50+</h2>
          <p>Project Done</p>
        </div>
        <div className="div1">
          <h2>500+</h2>
          <p>Well know developers</p>
        </div>
        <div className="div1">
          <h2>24/7</h2>
          <p>Service</p>
        </div>

      </div>
    </section>
    </>
  )
}

export default About
