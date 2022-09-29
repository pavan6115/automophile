// @ts-nocheck
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth/auth-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'

import './LoginPage.css'

const toastLogin = () => toast.success('Login Successful 🥳')

export const LoginPage = () => {
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    login(email, password)
  }

  const handleGuestLogin = (e) => {
    e.preventDefault()
    login('pk@gmail.com', 'pavankulkarni')
    toastLogin()
  }

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
        <form action={handleLogin} className='login-box'>
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='credentials'
                  placeholder='Password'
                  autoComplete='off'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className='login-buttons'>
                <button className='btns login-btn'>Login</button>
                <button
                  type='submit'
                  className='btns anonymous-login-btn'
                  onClick={handleGuestLogin}
                >
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
