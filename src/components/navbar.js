import React from 'react'
import logo from '../assests/images/logo.svg'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="header" className="logo" />
                <Link to="/" className="header-text">Home</Link>
                <Link to="/rooms" className="header-text">rooms</Link>
            </div>
        </div>
    )
}

export default Navbar


