import React, { useRef, useState } from 'react'
import picsum from '../../assets/picsum.jpg'
import spicsum from '../../assets/spicsum.jpeg'
import rapicsum from '../../assets/rapicsum.jpeg'
import repicsum from '../../assets/repicsum.jpeg'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { VCard } from '../../components/VerticalCard/VCard'
import './HomePage.css'

export const HomePage = () => {
  const [isCardMoved, setIsCardMoved] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const movieContainerRef = useRef()
  const seriesContainerRef = useRef()
  const racingContainerRef = useRef()
  const reviewContainerRef = useRef()

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

  const seriesHandleScroll = (direction) => {
    setIsScrolled(true)
    // @ts-ignore
    let distance = seriesContainerRef.current.getBoundingClientRect().x - 45
    if (direction === 'left' && isCardMoved > 0) {
      setIsCardMoved((isCardMoved) => isCardMoved - 1)
      // @ts-ignore
      seriesContainerRef.current.style.transform = `translateX(${
        228 + distance
      }px)`
    }

    if (direction === 'right' && isCardMoved < 6) {
      setIsCardMoved((isCardMoved) => isCardMoved + 1)
      // @ts-ignore
      seriesContainerRef.current.style.transform = `translateX(${
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

  const reviewHandleScroll = (direction) => {
    setIsScrolled(true)
    // @ts-ignore
    let distance = reviewContainerRef.current.getBoundingClientRect().x - 45
    if (direction === 'left' && isCardMoved > 0) {
      setIsCardMoved((isCardMoved) => isCardMoved - 1)
      // @ts-ignore
      reviewContainerRef.current.style.transform = `translateX(${
        228 + distance
      }px)`
    }

    if (direction === 'right' && isCardMoved < 6) {
      setIsCardMoved((isCardMoved) => isCardMoved + 1)
      // @ts-ignore
      reviewContainerRef.current.style.transform = `translateX(${
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
          <div className='category-cards' ref={movieContainerRef}>
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
            <VCard thumbnail={picsum} title={'Ford vs Ferrari'} />
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
          <span
            className='material-symbols-outlined arrow series-left-abs'
            onClick={() => seriesHandleScroll('left')}
            style={{ display: !isScrolled && 'none' }}
          >
            arrow_back_ios
          </span>
          <div className='category-cards' ref={seriesContainerRef}>
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
            <VCard thumbnail={spicsum} title={'Cars'} />
          </div>
          <span
            className='material-symbols-outlined arrow series-right-abs'
            onClick={() => seriesHandleScroll('right')}
          >
            arrow_forward_ios
          </span>
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
          <div className='category-cards' ref={racingContainerRef}>
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
            <VCard thumbnail={rapicsum} title={'Formula 1'} />
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
          <span
            className='material-symbols-outlined arrow reviews-left-abs'
            onClick={() => reviewHandleScroll('left')}
            style={{ display: !isScrolled && 'none' }}
          >
            arrow_back_ios
          </span>
          <div className='category-cards' ref={reviewContainerRef}>
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
            <VCard thumbnail={repicsum} title={'Volkswagen'} />
          </div>
          <span
            className='material-symbols-outlined arrow reviews-right-abs'
            onClick={() => reviewHandleScroll('right')}
          >
            arrow_forward_ios
          </span>
        </div>
      </div>
      <Footer />
    </div>
  )
}
