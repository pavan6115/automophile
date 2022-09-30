import React from 'react'
import { useNavigate } from 'react-router-dom'
import addToWatchlistIcon from '../../assets/watchlistIcon.png'
import { Footer, HCard, Navbar } from '../../components'
import { useData } from '../../context/data/data-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './Watchlist.css'

export const Watchlist = () => {
  const { videosState, dispatchVideos } = useData()
  const navigate = useNavigate()
  const watchList = videosState.watchlist

  const clearWatchlist = () => {
    dispatchVideos({ type: 'CLEAR_WATCHLIST' })
  }

  PageTitle('Watchlist | Automophile')

  return (
    <div>
      <Navbar />
      <div className='watchlist-container'>
        <div className='watchlist'>
          <div className='watchlist-title'>Watchlist</div>
          {watchList.length > 0 ? (
            <div className='clear-watchlist'>
              <button className='btn-clear-wl' onClick={clearWatchlist}>
                Clear Watchlist
              </button>
            </div>
          ) : null}
          <div className='watchlist-cards'>
            {watchList.length > 0 ? (
              watchList.map((vWatch) => {
                return (
                  <HCard
                    thumbnail={vWatch.thumbnail}
                    title={vWatch.title}
                    time={vWatch.duration}
                  />
                )
              })
            ) : (
              <div className='add-wl-container'>
                <div className='add-wl-icon'>
                  <img
                    src={addToWatchlistIcon}
                    alt='add-to-wl-icon'
                    className='wl-icon'
                  />
                </div>
                <div className='add-wl-txt'>
                  Your Watchlist is currently empty
                </div>
                <div className='wl-links'>
                  Add{' '}
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
                  that you want to watch later by clicking Add to Watchlist
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
