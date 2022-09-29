import React from 'react'
import { Footer, HCard, Navbar } from '../../components'
import { useData } from '../../context/data/data-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './ReviewPage.css'

export const ReviewPage = () => {
  const { videosState } = useData()
  const reviewsDB = videosState.videos[3][1]

  PageTitle('Reviews | Automophile')

  return (
    <div>
      <Navbar />
      <div className='review-container'>
        <h2 className='review-title'>Reviews</h2>
        <div className='review-card-container'>
          {reviewsDB.map((review) => {
            return (
              <HCard
                thumbnail={review.thumbnail}
                title={review.title}
                time={review.duration}
                data={review}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
