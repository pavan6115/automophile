import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import {
  HomePage,
  LoginPage,
  MoviePage,
  PageNotFound,
  RacingPage,
  ReviewPage,
  SeriesPage,
  SignUpPage,
  VideoPage,
} from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/video/:videoId' element={<VideoPage />}></Route>
        <Route path='/movies' element={<MoviePage />}></Route>
        <Route path='/series' element={<SeriesPage />}></Route>
        <Route path='/racing' element={<RacingPage />}></Route>
        <Route path='/reviews' element={<ReviewPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
