import React from 'react'
import { Link } from 'react-router-dom'

const LoggedOutList = () => {
    return (
        <li className="nav-item no-side-margin"><Link className="nav-link"
            to="/login">Login</Link></li>
    )
}

export default LoggedOutList
