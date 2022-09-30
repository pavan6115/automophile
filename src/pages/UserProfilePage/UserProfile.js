import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { RiUserShared2Line } from 'react-icons/ri'
import userAvatar from '../../assets/userAvatar.png'
import { Footer, Navbar } from '../../components'
import { useAuth } from '../../context/auth/auth-context'
import './UserProfile.css'

export const UserProfile = () => {
  const {
    user: {
      user: { firstName, lastName },
    },
    logout,
  } = useAuth()

  let [year, setYear] = useState(2023)

  const updateValidity = () => {
    setYear((year = year + 1))
    toast('Validity Upgraded', {
      icon: '🎊',
    })
  }

  return (
    <div>
      <Navbar />
      <div className='user-profile-container'>
        <div className='profile-container'>
          <div className='profile-img'>
            <img src={userAvatar} alt='' className='user-img' />
          </div>
          <div className='user-info'>
            <div className='user-name'>
              {firstName} {lastName}
            </div>
            <div className='subscription-validity'>
              Valid till: 21 May {year}
            </div>
          </div>
          <div className='upgrade-validity'>
            <button className='btn-upgrade-validity' onClick={updateValidity}>
              UPGRADE VALIDITY
            </button>
          </div>
          <div className='route-links'>
            <div className='route'>
              <div>Watchlist</div>
              <BsArrowRightCircleFill className='route-icon' />
            </div>
            <div className='route border'>
              <div>History</div>
              <BsArrowRightCircleFill className='route-icon' />
            </div>
            <div className='route' onClick={logout}>
              <div>Logout</div>
              <RiUserShared2Line className='route-icon' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
