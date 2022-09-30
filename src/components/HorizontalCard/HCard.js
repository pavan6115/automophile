import React from 'react'
import { BsPlay } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../context/data/data-context'
import './HCard.css'

export const HCard = ({ thumbnail, title, time, data }) => {
  const { dispatchVideos } = useData()
  const navigate = useNavigate()

  const sendData = (info) => {
    dispatchVideos({ type: 'DATA', payload: info })
    navigate(`/video/${info._id}`)
  }

  return (
    <div className='hcard-container'>
      <div className='hcard'>
        <img src={thumbnail} alt='title' className='hcard-img' />
        <div className='bg-linear'>
          <div className='movie-info'>
            <BsPlay className='play-btn' onClick={() => sendData(data)} />
            <div className='hcard-title'>{title}</div>
            <div className='movie-duration'>{time}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
