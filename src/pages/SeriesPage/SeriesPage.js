import React from 'react'
import seriespicsum from '../../assets/seriespicsum.jpeg'
import seriespicsum2 from '../../assets/seriespicsum2.jpeg'
import { Footer, HCard, Navbar } from '../../components'
import './SeriesPage.css'

export const SeriesPage = () => {
  return (
    <div>
      <Navbar />
      <div className='series-container'>
        <h2 className='series-title'>Series</h2>
        <h3 className="series-title">Cars</h3>
        <div className='series-card-container'>
          <HCard
            thumbnail={seriespicsum}
            title={'Cars'}
            time={'1 hr 57 min'}
          />
          <HCard
            thumbnail={seriespicsum}
            title={'Cars'}
            time={'1 hr 57 min'}
          />
          <HCard
            thumbnail={seriespicsum}
            title={'Cars'}
            time={'1 hr 57 min'}
          />
        </div>
        <h3 className="series-title">Fast & Furious</h3>
        <div className='series-card-container'>
          <HCard
            thumbnail={seriespicsum2}
            title={'Fast and Furious'}
            time={'2 hr 22 min'}
          />
          <HCard
            thumbnail={seriespicsum2}
            title={'Fast and Furious'}
            time={'2 hr 22 min'}
          />
          <HCard
            thumbnail={seriespicsum2}
            title={'Fast and Furious'}
            time={'2 hr 22 min'}
          />
                    <HCard
            thumbnail={seriespicsum2}
            title={'Fast and Furious'}
            time={'2 hr 22 min'}
          />
          <HCard
            thumbnail={seriespicsum2}
            title={'Fast and Furious'}
            time={'2 hr 22 min'}
          />
          <HCard
            thumbnail={seriespicsum2}
            title={'Fast and Furious'}
            time={'2 hr 22 min'}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
