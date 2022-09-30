import React from 'react'
import { useNavigate } from 'react-router-dom'
import historyIcon from '../../assets/historyIcon.png'
import { Footer, HCard, Navbar } from '../../components'
import { useData } from '../../context/data/data-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './History.css'

export const History = () => {
  const { videosState, dispatchVideos } = useData()
  const historyData = videosState.history
  const navigate = useNavigate()

  const clearHistory = () => {
    dispatchVideos({ type: 'CLEAR_HISTORY' })
  }

  PageTitle('History | Automophile')

  return (
    <div>
      <Navbar />
      <div className='history-container'>
        <div className='history'>
          <div className='history-title'>History</div>
          {historyData.length > 0 ? (
            <div className='clear-history'>
              <button className='btn-clear-history' onClick={clearHistory}>
                Clear History
              </button>
            </div>
          ) : null}
          <div className='history-cards'>
            {historyData.length > 0 ? (
              historyData.map((history) => {
                return (
                  <HCard
                    thumbnail={history.thumbnail}
                    title={history.title}
                    time={history.duration}
                  />
                )
              })
            ) : (
              <div className='add-wl-container'>
                <div className='add-wl-icon'>
                  <img
                    src={historyIcon}
                    alt='add-to-wl-icon'
                    className='wl-icon'
                  />
                </div>
                <div className='add-wl-txt'>
                  Your History is currently empty
                </div>
                <div className='wl-links'>
                  Watch from{' '}
                  <span className='link' onClick={() => navigate('/movies')}>
                    Movies
                  </span>{' '}
                  |{' '}
                  <span className='link' onClick={() => navigate('/series')}>
                    Series
                  </span>{' '}
                  |
                  <span className='link' onClick={() => navigate('/racing')}>
                    {' '}
                    Racing
                  </span>{' '}
                  |{' '}
                  <span className='link' onClick={() => navigate('/reviews')}>
                    Reviews
                  </span>{' '}
                  to see something here
                </div>
              </div>
            )}
            {}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
