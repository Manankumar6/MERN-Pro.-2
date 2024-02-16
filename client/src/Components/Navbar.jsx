import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo_brand">
                        <a href="/">Manan</a>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/service">Service</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {!localStorage.getItem('token') ?
                                <>
                                    <li><NavLink to="/register">Registration</NavLink></li>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                </>
                                :
                                <li onClick={handleLogout}><NavLink to="/login">Logout</NavLink></li>
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
