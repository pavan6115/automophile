import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth/auth-context'
import './Navbar.css'

export const Navbar = () => {
  const {
    user: { token },
  } = useAuth()

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
          {!token ? (
            <Link to='/login'>
              <button className='btn-sign-in'>Login</button>
            </Link>
          ) : (
            <Link to='/userprofile'>
              <AiOutlineUser className='user-icon' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
