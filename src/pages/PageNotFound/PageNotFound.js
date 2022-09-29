import React from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './PageNotFound.css'

export const PageNotFound = () => {
  PageTitle('404 | Automophile')

  return (
    <div>
      <div className='title'>
        <Link to='/'>
          <span className='title-1'>Auto</span>
          <span className='title-2'>mophile</span>
        </Link>
      </div>
      <div className='error-container'>
        <div className='error-msg'>
          <div className='txt-404'>
            <span className='title-2'>4</span>
            <span>0</span>
            <span className='title-2'>4</span>
          </div>
          <div className='txt'>Whoooops!</div>
          <p className='txt'>
            Seems like you have lost your way
            <div></div>To return to homepage, click below
          </p>
          <Link to='/'>
            <button className='btn-homepage'>Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
