import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 5000)
    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <a href="/" className="brand-logo left">Poké Mart</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )


}

export default withRouter(Navbar);