import React from 'react'
import { Footer, HCard, Navbar } from '../../components'
import { useData } from '../../context/data/data-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './RacingPage.css'

export const RacingPage = () => {
  const { videosState } = useData()

  const racingDB = videosState.videos[2][1]

  PageTitle('Racing | Automophile')

  return (
    <div>
      <Navbar />
      <div className='racing-container'>
        <h2 className='racing-title'>Racing</h2>
        <div className='racing-card-container'>
          {racingDB.map((race) => {
            return (
              <HCard
                thumbnail={race.thumbnail}
                title={race.title}
                time={race.duration}
                data={race}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
