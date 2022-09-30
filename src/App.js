import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { RequireAuth } from './components'
import {
  HomePage,
  LoginPage,
  MoviePage,
  PageNotFound,
  RacingPage,
  ReviewPage,
  SeriesPage,
  SignUpPage,
  UserProfile,
  VideoPage,
} from './pages'

function App() {
  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            background: 'var(--black-bg)',
            color: 'var(--navbar-links)',
            border: '1px solid var(--primary-color)',
            borderRadius: '10px',
          },
        }}
      />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/userprofile' element={<UserProfile />}></Route>
        <Route path='/video/:videoId' element={<VideoPage />}></Route>
        <Route
          path='/movies'
          element={
            <RequireAuth>
              <MoviePage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/series'
          element={
            <RequireAuth>
              <SeriesPage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/racing'
          element={
            <RequireAuth>
              <RacingPage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/reviews'
          element={
            <RequireAuth>
              <ReviewPage />
            </RequireAuth>
          }
        ></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
