import React from 'react'
import moviepicsum from '../../assets/moviepicsum.jpeg'
import { Footer, HCard, Navbar } from '../../components'
import './MoviePage.css'

export const MoviePage = () => {
  return (
    <div>
      <Navbar />
      <div className='movie-container'>
        <h2 className='movie-title'>Movies</h2>
        <div className='movie-card-container'>
          <HCard
            thumbnail={moviepicsum}
            title={'Ford VS Ferrari'}
            time={'2 hr 10 min'}
          />
          <HCard
            thumbnail={moviepicsum}
            title={'Ford VS Ferrari'}
            time={'2 hr 10 min'}
          />
          <HCard
            thumbnail={moviepicsum}
            title={'Ford VS Ferrari'}
            time={'2 hr 10 min'}
          />
          <HCard
            thumbnail={moviepicsum}
            title={'Ford VS Ferrari'}
            time={'2 hr 10 min'}
          />
          <HCard
            thumbnail={moviepicsum}
            title={'Ford VS Ferrari'}
            time={'2 hr 10 min'}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
