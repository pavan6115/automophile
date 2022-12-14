import React from 'react'
import { toast } from 'react-hot-toast'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { CgPlayListAdd } from 'react-icons/cg'
import ReactPlayer from 'react-player'
import { Footer } from '../../components'
import { useData } from '../../context/data/data-context'
import { PageTitle } from '../../hooks/PageTitle/PageTitle'
import './VideoPage.css'

export const VideoPage = () => {
  const { videosState, dispatchVideos } = useData()
  const videoID = videosState.videoData[0]._id
  const videoInfo = videosState.videoData

  const addToWatchlist = (info) => {
    dispatchVideos({ type: 'ADD_TO_WATCHLIST', payload: info })
    toast.success('Added to Watchlist 🎬')
  }

  PageTitle(`${videoInfo[0].title} | Automophile`)

  return (
    <>
      <div className='player-container'>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoID}`}
          width={'100%'}
          height={'100%'}
          playing
          controls={true}
        ></ReactPlayer>
      </div>
      <div className='video-info'>
        {videoInfo.map((vInfo) => {
          return (
            <>
              <div className='v-title'>{vInfo.title}</div>
              <div className='v-description'>{vInfo.description}</div>
            </>
          )
        })}
      </div>
      <div className='toggles'>
        <div
          className='playlist-toggle'
          onClick={() => addToWatchlist(...videoInfo)}
        >
          <div>
            <CgPlayListAdd className='icon' />
          </div>
          <span className='txt-toggle'>WATCHLIST</span>
        </div>
      </div>
      <Footer />
    </>
  )
}
