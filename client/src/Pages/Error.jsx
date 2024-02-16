import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <section id="error_page">
            <div className="content">
                <h2 className="header">
                    404
                </h2>
                <h4>Sorry! Page not found</h4>
                <p>Oops! It seem like the page you're trying to access doesn't exist.
                    If you believe there's an issue, feel free to report it, and we'll look into it.
                </p>
                <div className="btn btn_group">
              <NavLink to='/'>
                <button className='btn secondary-btn'>Return Home</button>
              </NavLink>
              <NavLink to='/contact'>
                <button className='btn secondary-btn'>Report Problem </button>
              </NavLink>
            </div>
            </div>

        </section>
    )
}

export default Error