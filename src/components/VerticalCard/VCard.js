import React from 'react'
import './VCard.css'

const VCard = ({ thumbnail, title }) => {
  return (
    <div className='vcard-container'>
      <div className='vcard'>
        <img src={thumbnail} alt='movie thumbnail' className='vcard-img' />
        <span className='vcard-title'>{title}</span>
      </div>
    </div>
  )
}

export { VCard }
