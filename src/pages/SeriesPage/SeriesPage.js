import React from 'react'
import { Footer, HCard, Navbar } from '../../components'
import { useData } from '../../context/data/data-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './SeriesPage.css'

export const SeriesPage = () => {
  const { videosState } = useData()

  const carsSeriesDB = videosState.videos[1][1][0]
  const ffSeriesDB = videosState.videos[1][1][1]
  const ti24DB = videosState.videos[1][1][2]

  PageTitle('Series | Automophile')

  return (
    <div>
      <Navbar />
      <div className='series-container'>
        <h2 className='series-title'>Series</h2>
        <h3 className='series-title'>Cars</h3>
        <div className='series-card-container'>
          {carsSeriesDB.map((car) => {
            return (
              <HCard
                thumbnail={car.thumbnail}
                title={car.title}
                time={car.duration}
                data={car}
              />
            )
          })}
        </div>
        <h3 className='series-title'>Fast & Furious</h3>
        <div className='series-card-container'>
          {ffSeriesDB.map((serial) => {
            return (
              <HCard
                thumbnail={serial.thumbnail}
                title={serial.title}
                time={serial.duration}
                data={serial}
              />
            )
          })}
        </div>
        <h3 className='series-title'>Truth in 24</h3>
        <div className='series-card-container'>
          {ti24DB.map((serial) => {
            return (
              <HCard
                thumbnail={serial.thumbnail}
                title={serial.title}
                time={serial.duration}
                data={serial}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
