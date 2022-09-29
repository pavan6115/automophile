import React from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './LoginPage.css'

export const LoginPage = () => {
  PageTitle('Login | Automophile')

  return (
    <div>
      <div className='wrapper'>
        <div className='title'>
          <Link to='/'>
            <span className='title-1'>Auto</span>
            <span className='title-2'>mophile</span>
          </Link>
        </div>
        <form action='' className='login-box'>
          <div className='login-container'>
            <div className='login-heading'>
              <div className='login-title'>Login</div>
            </div>
            <div className='login-controls'>
              <div className='login-inputs'>
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
              <div className='login-buttons'>
                <button type='submit' className='btns login-btn'>
                  Login
                </button>
                <button type='submit' className='btns anonymous-login-btn'>
                  Anonymous Login
                </button>
              </div>
              <div className='route-signup'>
                <div className='text'>
                  Haven't you registered yet?
                  <Link to='/signup'>
                    <span className='signup-text'> Sign Up</span>
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
