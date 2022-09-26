import React from 'react'
import reviewpicsum from '../../assets/reviewpicsum.jpeg'
import { Footer, HCard, Navbar } from '../../components'
import './ReviewPage.css'

export const ReviewPage = () => {
  return (
    <div>
      <Navbar />
      <div className='review-container'>
        <h2 className='review-title'>Reviews</h2>
        <div className='review-card-container'>
          <HCard
            thumbnail={reviewpicsum}
            title={'Škoda Kushaq | Faisal Khan'}
            time={'20 min 45 sec '}
          />
          <HCard
            thumbnail={reviewpicsum}
            title={'Škoda Kushaq | Faisal Khan'}
            time={'20 min 45 sec '}
          />
          <HCard
            thumbnail={reviewpicsum}
            title={'Škoda Kushaq | Faisal Khan'}
            time={'20 min 45 sec '}
          />
          <HCard
            thumbnail={reviewpicsum}
            title={'Škoda Kushaq | Faisal Khan'}
            time={'20 min 45 sec '}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
