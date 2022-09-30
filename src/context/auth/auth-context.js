import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'

// @ts-ignore
const AuthContext = createContext()

const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
  token: null,
  user: null,
}
const AuthProvider = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    token: userProfile.token,
    user: userProfile.user,
  })

  //   services
  const login = async (email, password) => {
    try {
      const loginResponse = await axios.post(`/api/auth/login`, {
        email,
        password,
      })
      if (loginResponse.status === 200) {
        const userProfile = {
          token: loginResponse.data.encodedToken,
          user: loginResponse.data.foundUser,
        }
        setUser(userProfile)
        localStorage.setItem('userProfile', JSON.stringify(userProfile))
        navigate(location.state?.from?.pathname || '/', { replace: true })
      }
    } catch (err) {
      toast.error('Something is wrong, Please try again 😔')
      console.log('Login error : ', err)
    }
  }

  const signup = async (email, password, firstName, lastName) => {
    try {
      const signUpResponse = await axios.post('/api/auth/signup', {
        email,
        password,
        firstName,
        lastName,
      })
      if (signUpResponse.status === 201) {
        const userProfile = {
          token: signUpResponse.data.encodedToken,
          user: signUpResponse.data.createdUser,
        }
        setUser(userProfile)
        localStorage.setItem('userProfile', JSON.stringify(userProfile))
        navigate(location.state?.from?.pathname || '/', { replace: true })
      }
    } catch (e) {
      toast.error('Signup error, try again!')
      console.log('Signup error: ', e)
    }
  }

  const logout = () => {
    localStorage.removeItem('userProfile')
    setUser({ token: null, user: null })
    toast.success('Logout Successful')
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }
