// @ts-nocheck
import axios from 'axios'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { videoReducer } from '../../reducer/data/data-reducer'

const DataContext = createContext()

const initialVideoState = {
  videos: [],
  watchlist: [],
  videoData: [],
  history: [],
}

const DataProvider = ({ children }) => {
  const [videosState, dispatchVideos] = useReducer(
    videoReducer,
    initialVideoState
  )

  useEffect(() => {
    ;(async () => {
      try {
        const videoData = await axios.get('/api/videos')
        dispatchVideos({ type: 'INITVIDEOS', payload: videoData.data.videos })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <DataContext.Provider value={{ videosState, dispatchVideos }}>
      {videosState.videos.length ? children : null}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext)

export { useData, DataProvider }
