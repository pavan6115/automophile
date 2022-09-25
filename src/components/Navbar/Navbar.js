import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-heading'>
        <div className='nav-logo'>
          <h2>
            <Link to='/'>
              <span className='title-1'>Auto</span>
              <span className='title-2'>mophile</span>
            </Link>
          </h2>
        </div>
        <div className='navigation'>
          <ul className='navigation-links'>
            <Link to='/'>
              <div className='nav-link'>Home</div>
            </Link>

            <Link to='/movies'>
              <div className='nav-link'>Movies</div>
            </Link>

            <Link to='/series'>
              <div className='nav-link'>Series</div>
            </Link>

            <Link to='/racing'>
              <div className='nav-link'>Racing</div>
            </Link>

            <Link to='/reviews'>
              <div className='nav-link'>Reviews</div>
            </Link>
          </ul>
        </div>
        <div className='nav-auth'>
          <Link to='/login'>
            <button className='btn-sign-in'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
