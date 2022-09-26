import React from 'react'
import './SignUpPage.css'
import { Link } from 'react-router-dom'

export const SignUpPage = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='title'>
          <Link to='/'>
            <span className='title-1'>Auto</span>
            <span className='title-2'>mophile</span>
          </Link>
        </div>
        <form action='' className='signup-box'>
          <div className='signup-container'>
            <div className='signup-heading'>
              <div className='signup-title'>Sign Up</div>
            </div>
            <div className='signup-controls'>
              <div className='signup-inputs'>
              <input
                  type='text'
                  name='fName'
                  id='fName'
                  className='credentials'
                  placeholder='First Name'
                  autoComplete='off'
                  required
                />
                <input
                  type='text'
                  name='lName'
                  id='lName'
                  className='credentials'
                  placeholder='Last Name'
                  autoComplete='off'
                  required
                />
                <input
                  type='email'
                  name='emailID'
                  id='emailID'
                  className='credentials'
                  placeholder='E-mail'
                  autoComplete='off'
                  required
                />
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='credentials'
                  placeholder='Password'
                  autoComplete='off'
                  required
                />
              </div>
              <div className='signup-buttons'>
                <button type='submit' className='btns signup-btn'>
                  Sign Up
                </button>
              </div>
              <div className='route-login'>
                <div className='text'>
                  Already have an account?
                  <Link to='/login'>
                    <span className='login-text'> Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
