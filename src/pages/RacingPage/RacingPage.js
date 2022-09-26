import React from 'react'
import racingpicsum from '../../assets/racingpicsum.jpeg'
import { Footer, HCard, Navbar } from '../../components'
import './RacingPage.css'

export const RacingPage = () => {
  return (
    <div>
    <Navbar />
    <div className='racing-container'>
      <h2 className='racing-title'>Racing</h2>
      <div className='racing-card-container'>
        <HCard
          thumbnail={racingpicsum}
          title={'Formula 1 Explained | For rookies'}
          time={'15 min '}
        />
        <HCard
          thumbnail={racingpicsum}
          title={'Formula 1 Explained | For rookies'}
          time={'15 min '}
        />
        <HCard
          thumbnail={racingpicsum}
          title={'Formula 1 Explained | For rookies'}
          time={'15 min '}
        />
      </div>
    </div>
    <Footer />
  </div>
  ) 
}
