import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaParking } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-heading'>
            <div className='footer-title'>
              <Link to='/'>
                <span className='title-1'>Auto</span>
                <span className='title-2'>mophile</span>
              </Link>
            </div>
          </div>
          <div className='footer-links'>
            <div className='footer-link'>Feedbacks</div>
            <div className='footer-link'>&copy; 2022 All rights reserved</div>
            <div className='footer-link'>Agreement</div>
          </div>
          <div className='footer-socials'>
            <ul className='social-links'>
              <a href='https://github.com/pavan6115' target='_blank'>
                <AiFillGithub />
              </a>
              <a href='https://peerlist.io/kpavan' target='_blank'>
                <FaParking />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
