import React from 'react'
import './NavBar.css'
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <div className='Navigation'>
            {/* Navbar */}
            <nav className='navbar navbar-expand-lg'>

                {/* Brand */}
                <div className="navbar-brand ms-3 me-5"><Link to='home'><img src="MY_LOGO.jpg" alt="brand-logo" id='brand' className='rounded-circle me-2' />
                {/* <span className='Name'>Hrishikesh Dhanawade</span> */}
                </Link>
                </div>

                {/* Navbar toggler */}
                <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src='ham2.png' className="navbar-toggler-icon" id="navtog" alt='toggle' />
                </button>
                

                {/* Nav list */}
                <div className="mx-auto collapse navbar-collapse" id='navbarSupportedContent'>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-right">
                        <li className="nav-item mx-auto px-3 my-2 fw-bold">
                            <Link to='home' smooth={true} offset={0} duration={50}>Home</Link>
                        </li>
                        <li className="nav-item mx-auto px-3 my-2 fw-bold">
                            <Link to='about' smooth={true} offset={-75} duration={50}>About</Link>
                        </li>
                        <li className="nav-item mx-auto px-3 my-2 fw-bold">
                            <Link to='work' smooth={true} offset={20} duration={50}>Work</Link>
                        </li>
                        <li className="nav-item mx-auto px-3 my-2 fw-bold">
                            <Link to='service' smooth={true} offset={53} duration={50}>Services</Link>
                        </li>

                    </ul>
                </div>

                {/* Contact button */}
                <div className="contactbtn">
                    <Link to='contact' smooth={true} offset={25} duration={50}><span className='btn  mx-3 rounded-pill fw-bold'>Contact Me</span></Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
