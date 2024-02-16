import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <main>
      <section className='sectoin_hero'>
        <div className="container grid grid-two-cols">
          <div className="hero_content">
          <p>We are the world best IT Company</p>
            <h1>Welcome To About Page</h1>
            <p>Are you ready to take your bussiness to the next level with cutting-ege IT Solutions? Look no further! At thapa technical we specialize in providing innovative IT Service and solutions tailored  to meet your unique needs. </p>
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
          <h2>100,00+</h2>
          <p>Happy Client</p>
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

    {/* {3rd Section} */}
    <section className='sectoin_hero'>
        <div className="container grid grid-two-cols">
            {/* {Image} */}

      <div className="hero_image">
        <img src="image/register.avif" alt="home_image" width='400' height='auto' />
      </div>

          <div className="hero_content">
            <p>We are here to help you</p>
            <h1>Get start today</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod inventore fuga mollitia! Voluptas dolorum nostrum assumenda, laborum harum nisi reiciendis et aut natus laudantium veniam nemo perferendis culpa, officiis omnis!</p>
            <div className="btn btn_group">
              <NavLink to='/contact'>
                <button className='btn'>Contact now </button>
              </NavLink>
              <NavLink to='/service'>
                <button className='btn secondary-btn'>Learn more </button>
              </NavLink>
            </div>
          </div>

    
        </div>
      </section>
    </div>
  )
}

export default Home
