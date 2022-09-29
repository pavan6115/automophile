import React from 'react'
import { Footer, HCard, Navbar } from '../../components'
import { useData } from '../../context/data/data-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './MoviePage.css'

export const MoviePage = () => {
  const { videosState } = useData()
  const moviesDB = videosState.videos[0][1]

  PageTitle('Movies | Automophile')

  return (
    <div>
      <Navbar />
      <div className='movie-container'>
        <h2 className='movie-title'>Movies</h2>
        <div className='movie-card-container'>
          {moviesDB.map((movie) => {
            return (
              <HCard
                thumbnail={movie.thumbnail}
                title={movie.title}
                time={movie.duration}
                data={movie}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
