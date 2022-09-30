import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth/auth-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './SignUpPage.css'

const toastSignUp = () => toast.success('Signup Successful ✅')

export const SignUpPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signup } = useAuth()

  const submitHandler = (e) => {
    e.preventDefault()
    signup(email, password, firstName, lastName)
    toastSignUp()
  }

  PageTitle('Signup | Automophile')

  return (
    <div>
      <div className='wrapper'>
        <div className='title'>
          <Link to='/'>
            <span className='title-1'>Auto</span>
            <span className='title-2'>mophile</span>
          </Link>
        </div>
        <form onSubmit={submitHandler} className='signup-box'>
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
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type='text'
                  name='lName'
                  id='lName'
                  className='credentials'
                  placeholder='Last Name'
                  autoComplete='off'
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
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
