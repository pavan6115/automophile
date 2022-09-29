import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { VCard } from '../../components/VerticalCard/VCard'
import { useData } from '../../context/data/data-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './HomePage.css'

export const HomePage = () => {
  const [isCardMoved, setIsCardMoved] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const movieContainerRef = useRef()
  const racingContainerRef = useRef()
  const navigate = useNavigate()

  PageTitle('Automophile | Haus of Autoculture')

  // context
  const { videosState } = useData()
  const videosCollection = videosState.videos

  // db
  const moviesData = videosCollection[0][0]
  const seriesData = videosCollection[1][0]
  const racingData = videosCollection[2][0]
  const reviewsData = videosCollection[3][0]

  const movieHandleScroll = (direction) => {
    setIsScrolled(true)
    // @ts-ignore
    let distance = movieContainerRef.current.getBoundingClientRect().x - 45
    if (direction === 'left' && isCardMoved > 0) {
      setIsCardMoved((isCardMoved) => isCardMoved - 1)
      // @ts-ignore
      movieContainerRef.current.style.transform = `translateX(${
        228 + distance
      }px)`
    }

    if (direction === 'right' && isCardMoved < 6) {
      setIsCardMoved((isCardMoved) => isCardMoved + 1)
      // @ts-ignore
      movieContainerRef.current.style.transform = `translateX(${
        -228 + distance
      }px)`
    }
  }

  const racingHandleScroll = (direction) => {
    setIsScrolled(true)
    // @ts-ignore
    let distance = racingContainerRef.current.getBoundingClientRect().x - 45
    if (direction === 'left' && isCardMoved > 0) {
      setIsCardMoved((isCardMoved) => isCardMoved - 1)
      // @ts-ignore
      racingContainerRef.current.style.transform = `translateX(${
        228 + distance
      }px)`
    }

    if (direction === 'right' && isCardMoved < 6) {
      setIsCardMoved((isCardMoved) => isCardMoved + 1)
      // @ts-ignore
      racingContainerRef.current.style.transform = `translateX(${
        -228 + distance
      }px)`
    }
  }

  return (
    <div>
      <div className='wrapper'>
        <Navbar />
        <div className='content'>
          <div className='msg'>Welcome to Automophile</div>
          <div className='description'>
            <h2>
              Stream Plethora
              <div></div>of Movies, Series & Reviews
              <div></div>around Autoculture
            </h2>
          </div>
        </div>
      </div>
      <div className='categories'>
        <div className='category-movies'>
          <div className='category-name'>Movies</div>
          <span
            className='material-symbols-outlined arrow movie-left-abs'
            onClick={() => movieHandleScroll('left')}
            style={{ display: !isScrolled && 'none' }}
          >
            arrow_back_ios
          </span>
          <div
            className='category-cards'
            ref={movieContainerRef}
            onClick={() => navigate('/movies')}
          >
            {moviesData.map((movie) => {
              return (
                <VCard
                  key={movie._id}
                  thumbnail={movie.coverImg}
                  title={movie.title}
                />
              )
            })}
          </div>
          <span
            className='material-symbols-outlined arrow movie-right-abs'
            onClick={() => movieHandleScroll('right')}
          >
            arrow_forward_ios
          </span>
        </div>

        <div className='space'></div>

        <div className='category-series'>
          <div className='category-name'>Series</div>
          <div className='category-cards' onClick={() => navigate('/series')}>
            {seriesData.map((serial) => {
              return (
                <VCard
                  key={serial._id}
                  thumbnail={serial.coverImg}
                  title={serial.title}
                />
              )
            })}
          </div>
        </div>

        <div className='space'></div>

        <div className='category-racing'>
          <div className='category-name'>Racing</div>
          <span
            className='material-symbols-outlined arrow racing-left-abs'
            onClick={() => racingHandleScroll('left')}
            style={{ display: !isScrolled && 'none' }}
          >
            arrow_back_ios
          </span>
          <div
            className='category-cards'
            ref={racingContainerRef}
            onClick={() => navigate('/racing')}
          >
            {racingData.map((race) => {
              return (
                <VCard
                  key={race._id}
                  thumbnail={race.coverImg}
                  title={race.title}
                />
              )
            })}
          </div>
          <span
            className='material-symbols-outlined arrow racing-right-abs'
            onClick={() => racingHandleScroll('right')}
          >
            arrow_forward_ios
          </span>
        </div>

        <div className='space'></div>

        <div className='category-reviews'>
          <div className='category-name'>Reviews</div>
          <div className='category-cards' onClick={() => navigate('/reviews')}>
            {reviewsData.map((review) => {
              return (
                <VCard
                  key={review._id}
                  thumbnail={review.coverImg}
                  title={review.title}
                />
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
