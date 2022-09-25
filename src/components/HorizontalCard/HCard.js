import React from 'react'
import { BsPlay } from 'react-icons/bs'
import './HCard.css'

export const HCard = ({ thumbnail, title, time }) => {
  return (
    <div className='hcard-container'>
      <div className='hcard'>
        <img src={thumbnail} alt='title' className='hcard-img' />
        <div className='bg-linear'>
          <div className='movie-info'>
            <BsPlay className='play-btn' />
            <div className='hcard-title'>{title}</div>
            <div className='movie-duration'>{time}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
